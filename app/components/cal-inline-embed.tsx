"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Cal?: any;
    __calBootstrapped?: boolean;
    __calInlineMounted?: boolean;
  }
}

function bootstrapCal() {
  if (window.__calBootstrapped) return;
  window.__calBootstrapped = true;

  ((C: any, A: string, L: string) => {
    const p = function (a: any, ar: IArguments) {
      a.q.push(ar);
    };
    const d = C.document;

    C.Cal =
      C.Cal ||
      function () {
        const cal = C.Cal;
        const ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api: any = function () {
            p(api, arguments);
          };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace] as any);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
  })(window, "https://app.cal.com/embed/embed.js", "init");
}

export default function CalInlineEmbed() {
  useEffect(() => {
    if (window.__calInlineMounted) return;
    window.__calInlineMounted = true;

    bootstrapCal();

    window.Cal?.("init", "30min", { origin: "https://app.cal.com" });

    window.Cal?.ns?.["30min"]?.("inline", {
      elementOrSelector: "#my-cal-inline-30min",
      config: {
        layout: "month_view",
        useSlotsViewOnSmallScreen: "true",
        theme: "dark"
      },
      calLink: "tog-studio/30min"
    });

    window.Cal?.ns?.["30min"]?.("ui", {
      theme: "dark",
      hideEventTypeDetails: true,
      layout: "month_view"
    });
  }, []);

  return (
    <div
      suppressHydrationWarning
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      id="my-cal-inline-30min"
    ></div>
  );
}
