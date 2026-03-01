"use client";

import { useEffect } from "react";

const NAV_ACTIVE = "active";
const NAV_INACTIVE = "not-active";
const STATUS_ATTR = "data-navigation-status";

function getStatusElement(): HTMLElement | null {
  return document.querySelector<HTMLElement>(`[${STATUS_ATTR}]`);
}

export default function NavigationBehavior() {
  useEffect(() => {
    const toggleButtons = document.querySelectorAll<HTMLElement>(
      '[data-navigation-toggle="toggle"]'
    );
    const closeButtons = document.querySelectorAll<HTMLElement>(
      '[data-navigation-toggle="close"]'
    );

    const toggleNav = () => {
      const statusEl = getStatusElement();
      if (!statusEl) return;

      const isActive = statusEl.getAttribute(STATUS_ATTR) === NAV_ACTIVE;
      statusEl.setAttribute(STATUS_ATTR, isActive ? NAV_INACTIVE : NAV_ACTIVE);
    };

    const closeNav = () => {
      const statusEl = getStatusElement();
      if (!statusEl) return;

      statusEl.setAttribute(STATUS_ATTR, NAV_INACTIVE);
    };

    const onEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeNav();
      }
    };

    toggleButtons.forEach((button) => button.addEventListener("click", toggleNav));
    closeButtons.forEach((button) => button.addEventListener("click", closeNav));
    document.addEventListener("keydown", onEsc);

    return () => {
      toggleButtons.forEach((button) =>
        button.removeEventListener("click", toggleNav)
      );
      closeButtons.forEach((button) =>
        button.removeEventListener("click", closeNav)
      );
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  return null;
}
