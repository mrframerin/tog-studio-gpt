"use client";

import { useEffect } from "react";

function setupClickableButtons(): () => void {
  const cleanups: Array<() => void> = [];

  document.querySelectorAll<HTMLElement>(".g_clickable_wrap").forEach((wrap) => {
    const button = wrap.querySelector<HTMLButtonElement>(".g_clickable_btn");
    const link = wrap.querySelector<HTMLAnchorElement>(".g_clickable_link[href]");

    if (!button || !link) return;

    const onClick = (event: MouseEvent) => {
      event.preventDefault();

      const href = link.href;
      if (!href) return;

      const target = link.target?.toLowerCase();
      if (target === "_blank") {
        window.open(href, "_blank", "noopener,noreferrer");
        return;
      }

      window.location.href = href;
    };

    button.addEventListener("click", onClick);
    cleanups.push(() => button.removeEventListener("click", onClick));
  });

  return () => {
    cleanups.forEach((cleanup) => cleanup());
  };
}

function setupTabs(): () => void {
  const cleanups: Array<() => void> = [];

  document.querySelectorAll<HTMLElement>(".w-tabs").forEach((tabsRoot) => {
    const tabLinks = Array.from(
      tabsRoot.querySelectorAll<HTMLElement>(".w-tab-link[data-w-tab]")
    );
    const tabPanes = Array.from(
      tabsRoot.querySelectorAll<HTMLElement>(".w-tab-pane[data-w-tab]")
    );

    if (!tabLinks.length || !tabPanes.length) return;

    const setActiveTab = (tabName: string) => {
      tabsRoot.setAttribute("data-current", tabName);

      tabLinks.forEach((link) => {
        const isActive = link.getAttribute("data-w-tab") === tabName;
        link.classList.toggle("w--current", isActive);
        link.setAttribute("aria-selected", String(isActive));
      });

      tabPanes.forEach((pane) => {
        const isActive = pane.getAttribute("data-w-tab") === tabName;
        pane.classList.toggle("w--tab-active", isActive);
      });
    };

    const initialTab =
      tabsRoot.getAttribute("data-current") ??
      tabLinks[0]?.getAttribute("data-w-tab") ??
      "";

    if (initialTab) setActiveTab(initialTab);

    tabLinks.forEach((link) => {
      const onClick = (event: Event) => {
        event.preventDefault();
        const tabName = link.getAttribute("data-w-tab");
        if (!tabName) return;
        setActiveTab(tabName);
      };

      link.addEventListener("click", onClick);
      cleanups.push(() => link.removeEventListener("click", onClick));
    });
  });

  return () => {
    cleanups.forEach((cleanup) => cleanup());
  };
}

function setCurrentYear() {
  const year = String(new Date().getFullYear());
  document.querySelectorAll<HTMLElement>(".this-year").forEach((el) => {
    el.textContent = year;
  });
}

export default function InteractionFallback() {
  useEffect(() => {
    setCurrentYear();

    const cleanupButtons = setupClickableButtons();
    const cleanupTabs = setupTabs();

    return () => {
      cleanupButtons();
      cleanupTabs();
    };
  }, []);

  return null;
}
