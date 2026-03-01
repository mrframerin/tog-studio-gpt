"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    $?: any;
    jQuery?: any;
    Swiper?: new (element: Element, config: Record<string, unknown>) => unknown;
    Webflow?: {
      destroy?: () => void;
      ready?: () => void;
      require?: (moduleName: string) => { init?: (...args: unknown[]) => void };
    };
  }
}

type RuntimeScript = {
  id: string;
  src: string;
  integrity?: string;
  crossOrigin?: "anonymous";
};

const runtimeScripts: RuntimeScript[] = [
  {
    id: "wf-jquery",
    src: "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=67ec5bee56ec8dfb35026e2b",
    integrity: "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
    crossOrigin: "anonymous"
  },
  {
    id: "wf-chunk-1",
    src: "https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/js/webflow.schunk.36b8fb49256177c8.js"
  },
  {
    id: "wf-chunk-2",
    src: "https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/js/webflow.schunk.db282b75b7c3a9d9.js"
  },
  {
    id: "wf-main",
    src: "https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/js/webflow.59b15c66.c2e5ca218d9958bc.js"
  },
  {
    id: "wf-swiper",
    src: "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"
  }
];

function loadScript(scriptConfig: RuntimeScript): Promise<void> {
  return new Promise((resolve, reject) => {
    const existing = document.getElementById(scriptConfig.id) as HTMLScriptElement | null;
    if (existing?.dataset.loaded === "true") {
      resolve();
      return;
    }

    const script = existing ?? document.createElement("script");
    script.id = scriptConfig.id;
    script.src = scriptConfig.src;
    script.async = false;

    if (scriptConfig.integrity) {
      script.integrity = scriptConfig.integrity;
    }
    if (scriptConfig.crossOrigin) {
      script.crossOrigin = scriptConfig.crossOrigin;
    }

    const onLoad = () => {
      script.dataset.loaded = "true";
      script.removeEventListener("load", onLoad);
      script.removeEventListener("error", onError);
      resolve();
    };

    const onError = () => {
      script.removeEventListener("load", onLoad);
      script.removeEventListener("error", onError);
      reject(new Error(`Failed to load ${scriptConfig.src}`));
    };

    script.addEventListener("load", onLoad);
    script.addEventListener("error", onError);

    if (!existing) {
      document.body.appendChild(script);
    }
  });
}

function initWebflowAndSwiper() {
  const $ = window.jQuery ?? window.$;

  if ($) {
    $(".this-year").text(new Date().getFullYear());
  }

  if (window.Webflow?.destroy) {
    try {
      window.Webflow.destroy();
    } catch {
      // noop
    }
  }

  if (window.Webflow?.ready) {
    try {
      window.Webflow.ready();
    } catch {
      // noop
    }
  }

  if (window.Webflow?.require) {
    try {
      window.Webflow.require("ix2")?.init?.();
      window.Webflow.require("tabs")?.init?.();
      window.Webflow.require("slider")?.init?.();
    } catch {
      // noop
    }
  }

  if ($ && window.Swiper) {
    $(".slider-main_component").each(function (this: any) {
      const loopMode = $(this).attr("loop-mode") === "true";
      const sliderDuration =
        $(this).attr("slider-duration") !== undefined
          ? +($(this).attr("slider-duration") as string)
          : 300;

      const swiperContainer = $(this).find(".swiper")[0];
      if (!swiperContainer) return;

      new window.Swiper!(swiperContainer, {
        speed: sliderDuration,
        loop: loopMode,
        autoHeight: false,
        centeredSlides: false,
        followFinger: true,
        freeMode: false,
        slideToClickedSlide: false,
        slidesPerView: "auto",
        spaceBetween: 0,
        rewind: false,
        mousewheel: {
          forceToAxis: true
        },
        keyboard: {
          enabled: true,
          onlyInViewport: true
        },
        breakpoints: {
          480: {
            slidesPerView: "auto",
            spaceBetween: 16
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 0
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 0
          }
        },
        pagination: {
          el: $(this).find(".swiper-bullet-wrapper")[0],
          bulletActiveClass: "is-active",
          bulletClass: "swiper-bullet",
          bulletElement: "button",
          clickable: true
        },
        navigation: {
          nextEl: $(this).find(".swiper-next")[0],
          prevEl: $(this).find(".swiper-prev")[0],
          disabledClass: "is-disabled"
        },
        scrollbar: {
          el: $(this).find(".swiper-drag-wrapper")[0],
          draggable: true,
          dragClass: "swiper-drag",
          snapOnRelease: true
        },
        slideActiveClass: "is-active",
        slideDuplicateActiveClass: "is-active"
      });

      setTimeout(() => {
        $(this).find(".swiper").css("overflow", "visible");
      }, 100);
    });
  }

  window.dispatchEvent(new Event("resize"));
}

export default function WebflowRuntime() {
  useEffect(() => {
    let isActive = true;

    const init = async () => {
      try {
        for (const script of runtimeScripts) {
          await loadScript(script);
          if (!isActive) return;
        }

        if (!isActive) return;
        initWebflowAndSwiper();
      } catch {
        // noop
      }
    };

    init();

    return () => {
      isActive = false;
    };
  }, []);

  return null;
}
