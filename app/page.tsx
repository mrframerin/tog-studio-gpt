/* eslint-disable @next/next/no-sync-scripts */
import InteractionFallback from "./components/interaction-fallback";
import NavigationBehavior from "./components/navigation-behavior";

export default function Home() {
  return (
    <>
    <InteractionFallback />
    <NavigationBehavior />
    <div className="page_wrap">
      <div className="page_code_wrap u-theme-dark">
        <div className="page_code_base w-embed">
          <style dangerouslySetInnerHTML={{ __html: `
            :root {
              --site--max-width: min(var(--site--width), 100vw);
              --container--main: calc(
                var(--site--max-width) - var(--site--margin) * 2
              );
              --container--full: calc(100vw - var(--site--margin) * 2);
              --container--small: calc(
                var(--column-width--plus-gutter) *
                  (var(--site--column-count) - 2) - var(--site--gutter)
              );
              --site--gutter-total: calc(
                var(--site--gutter) * (var(--site--column-count) - 1)
              );
              --column-width--1: calc(
                (var(--container--main) - var(--site--gutter-total)) /
                  var(--site--column-count)
              );
              --column-width--plus-gutter: calc(
                var(--column-width--1) + var(--site--gutter)
              );
              --column-width--2: calc(
                var(--column-width--plus-gutter) * 2 - var(--site--gutter)
              );
              --column-width--3: calc(
                var(--column-width--plus-gutter) * 3 - var(--site--gutter)
              );
              --column-width--4: calc(
                var(--column-width--plus-gutter) * 4 - var(--site--gutter)
              );
              --column-width--5: calc(
                var(--column-width--plus-gutter) * 5 - var(--site--gutter)
              );
              --column-width--6: calc(
                var(--column-width--plus-gutter) * 6 - var(--site--gutter)
              );
              --column-width--7: calc(
                var(--column-width--plus-gutter) * 7 - var(--site--gutter)
              );
              --column-width--8: calc(
                var(--column-width--plus-gutter) * 8 - var(--site--gutter)
              );
              --column-width--9: calc(
                var(--column-width--plus-gutter) * 9 - var(--site--gutter)
              );
              --column-width--10: calc(
                var(--column-width--plus-gutter) * 10 - var(--site--gutter)
              );
              --column-width--11: calc(
                var(--column-width--plus-gutter) * 11 - var(--site--gutter)
              );
              --column-width--12: calc(
                var(--column-width--plus-gutter) * 12 - var(--site--gutter)
              );
              --column-margin--1: calc(var(--column-width--plus-gutter) * 1);
              --column-margin--2: calc(var(--column-width--plus-gutter) * 2);
              --column-margin--3: calc(var(--column-width--plus-gutter) * 3);
              --column-margin--4: calc(var(--column-width--plus-gutter) * 4);
              --column-margin--5: calc(var(--column-width--plus-gutter) * 5);
              --column-margin--6: calc(var(--column-width--plus-gutter) * 6);
              --column-margin--7: calc(var(--column-width--plus-gutter) * 7);
              --column-margin--8: calc(var(--column-width--plus-gutter) * 8);
              --column-margin--9: calc(var(--column-width--plus-gutter) * 9);
              --column-margin--10: calc(var(--column-width--plus-gutter) * 10);
              --column-margin--11: calc(var(--column-width--plus-gutter) * 11);
              --column-margin--12: calc(var(--column-width--plus-gutter) * 12);
              --breakout-start: [full-start] minmax(0, 1fr) [content-start];
              --breakout-end: [content-end] minmax(0, 1fr) [full-end];
              --grid-breakout-single: var(--breakout-start)
                minmax(0, var(--container--main)) var(--breakout-end);
              --grid-breakout: var(--breakout-start)
                repeat(
                  var(--site--column-count),
                  minmax(0, var(--column-width--1))
                )
                var(--breakout-end);
              --grid-main: repeat(var(--site--column-count), minmax(0, 1fr));
              --grid-1: repeat(1, minmax(0, 1fr));
              --grid-2: repeat(2, minmax(0, 1fr));
              --grid-3: repeat(3, minmax(0, 1fr));
              --grid-4: repeat(4, minmax(0, 1fr));
              --grid-5: repeat(5, minmax(0, 1fr));
              --grid-6: repeat(6, minmax(0, 1fr));
              --grid-7: repeat(7, minmax(0, 1fr));
              --grid-8: repeat(8, minmax(0, 1fr));
              --grid-9: repeat(9, minmax(0, 1fr));
              --grid-10: repeat(10, minmax(0, 1fr));
              --grid-11: repeat(11, minmax(0, 1fr));
              --grid-12: repeat(12, minmax(0, 1fr));
              --_typography---text-transform--none: none;
              --_typography---text-transform--uppercase: uppercase;
              --_typography---text-transform--captialize: capitalize;
              --_typography---text-transform--lowercase: lowercase;
              --align--start: start;
              --align--center: center;
              --align--end: end;
            }
            * {
              vertical-align: bottom;
            }
            ::before,
            ::after {
              box-sizing: border-box;
            }
            html {
              background-color: var(--_theme---background);
            }
            button {
              background-color: unset;
              padding: unset;
              text-align: inherit;
            }
            button:not(:disabled) {
              cursor: pointer;
            }
            video {
              width: 100%;
              object-fit: cover;
            }
            video.wf-empty {
              padding: 0;
            }
            svg {
              max-width: 100%;
            }
            section,
            header,
            footer {
              position: relative;
            }
            @media (prefers-color-scheme: light) {
              option {
                color: black;
              }
            }
            img::selection {
              background: transparent;
            }
            /* Typography */
            body {
              text-transform: var(--_text-style---text-transform);
              font-smoothing: antialiased;
              -webkit-font-smoothing: antialiased;
            }
            /* Clear Defaults */
            a:not([class]) {
              text-decoration: underline;
            }
            h1,
            h2,
            h3,
            h4,
            h5,
            h6,
            p,
            blockquote,
            label {
              font-family: inherit;
              font-size: inherit;
              font-weight: inherit;
              line-height: inherit;
              letter-spacing: inherit;
              text-transform: inherit;
              text-wrap: inherit;
              margin-top: 0;
              margin-bottom: 0;
            }
            /* Margin Trim */
            :is(.u-margin-trim, .u-rich-text)
              > :not(
                :not(.w-condition-invisible) ~ :not(.w-condition-invisible)
              ) {
              margin-top: 0;
            }
            :is(.u-margin-trim, .u-rich-text)
              > :not(:has(~ :not(.w-condition-invisible))) {
              margin-bottom: 0;
            }
            .w-richtext a {
              position: relative;
              z-index: 4;
            }
            /* Line Height Trim */
            :is([class*="u-text-style-"], h1, h2, h3, h4, h5, h6, p):not(
                .w-richtext,
                .u-text-trim-off
              )::before {
              content: "";
              display: table;
              margin-bottom: calc(-0.5lh + var(--_text-style---trim-top));
            }
            :is([class*="u-text-style-"], h1, h2, h3, h4, h5, h6, p):not(
                .w-richtext,
                .u-text-trim-off
              )::after {
              content: "";
              display: table;
              margin-bottom: calc(-0.5lh + var(--_text-style---trim-bottom));
            }
            /* Line Clamp */
            .u-line-clamp-1,
            .u-line-clamp-2,
            .u-line-clamp-3,
            .u-line-clamp-4 {
              -webkit-line-clamp: 1;
              -webkit-box-orient: vertical;
            }
            .u-line-clamp-2 {
              -webkit-line-clamp: 2;
            }
            .u-line-clamp-3 {
              -webkit-line-clamp: 3;
            }
            .u-line-clamp-4 {
              -webkit-line-clamp: 4;
            }
            /* Child Contain */
            .u-child-contain > * {
              width: 100%;
              max-width: inherit !important;
              margin-inline: 0 !important;
              margin-top: 0 !important;
            }

            /* Hide */
            .u-hide-if-empty:empty,
            .u-hide-if-empty:not(:has(> :not(.w-condition-invisible))),
            .u-hide-if-empty-cms:not(:has(.w-dyn-item)),
            .u-embed-js,
            .u-embed-css {
              display: none !important;
            }

            /* Focus State */
            a,
            button,
            :where([tabindex]),
            .w-checkbox-input--inputType-custom,
            .w-form-formradioinput--inputType-custom {
              outline-offset: var(--focus--offset-outer);
            }
            a:focus-visible,
            button:focus-visible,
            [tabindex]:focus-visible,
            .w-checkbox:has(:focus-visible) .w-checkbox-input--inputType-custom,
            .w-radio:has(:focus-visible)
              .w-form-formradioinput--inputType-custom {
              outline-color: var(--_theme---text);
              outline-width: var(--focus--width);
              outline-style: solid;
            }
            .w-checkbox-input--inputType-custom.w--redirected-focus,
            .w-form-formradioinput--inputType-custom.w--redirected-focus {
              box-shadow: none;
            }

            /* Global / Clickable Component */
            .wf-design-mode .g_clickable_wrap {
              z-index: 0;
            }
            .g_clickable_wrap a[href="#"] {
              display: none;
            }
            .g_clickable_wrap a[href="#"] ~ button {
              display: block;
            }

            /* Responsive */
            @container (width < 62em) {
              .u-grid-desktop {
                display: flex;
                flex-direction: column;
              }
            }
            @container (width < 48em) {
              .u-grid-tablet {
                display: flex;
                flex-direction: column;
              }
            }
            @container (width < 30em) {
              .u-grid-landscape {
                display: flex;
                flex-direction: column;
              }
            }
          ` }} />
        </div>
        <div className="page_code_custom w-embed">
          <style dangerouslySetInnerHTML={{ __html: `
            [class*="paragraph"] {
              text-wrap: balance;
            }
          ` }} />
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          :root {
            --site--margin: clamp(
              1rem,
              0.42857142857142855rem + 2.857142857142857vw,
              3rem
            );
            --size--2rem: clamp(
              1.75rem,
              1.6785714285714286rem + 0.35714285714285715vw,
              2rem
            );
            --size--2-5rem: clamp(
              2rem,
              1.8571428571428572rem + 0.7142857142857143vw,
              2.5rem
            );
            --size--3rem: clamp(
              2.25rem,
              2.0357142857142856rem + 1.0714285714285714vw,
              3rem
            );
            --size--3-5rem: clamp(
              2.375rem,
              2.0535714285714284rem + 1.607142857142857vw,
              3.5rem
            );
            --size--4rem: clamp(
              2.5rem,
              2.0714285714285716rem + 2.142857142857143vw,
              4rem
            );
            --size--4-5rem: clamp(2.75rem, 2.25rem + 2.5vw, 4.5rem);
            --size--5rem: clamp(
              3rem,
              2.4285714285714284rem + 2.857142857142857vw,
              5rem
            );
            --size--5-5rem: clamp(
              3.25rem,
              2.607142857142857rem + 3.214285714285714vw,
              5.5rem
            );
            --size--6rem: clamp(
              3.5rem,
              2.7857142857142856rem + 3.571428571428571vw,
              6rem
            );
            --size--6-5rem: clamp(
              3.75rem,
              2.9642857142857144rem + 3.9285714285714284vw,
              6.5rem
            );
            --size--7rem: clamp(
              4rem,
              3.142857142857143rem + 4.285714285714286vw,
              7rem
            );
            --size--7-5rem: clamp(
              4.25rem,
              3.3214285714285716rem + 4.642857142857143vw,
              7.5rem
            );
            --size--8rem: clamp(4.5rem, 3.5rem + 5vw, 8rem);
            --size--8-5rem: clamp(
              4.75rem,
              3.6785714285714284rem + 5.357142857142857vw,
              8.5rem
            );
            --size--9rem: clamp(
              5rem,
              3.857142857142857rem + 5.714285714285714vw,
              9rem
            );
            --size--9-5rem: clamp(
              5.25rem,
              4.035714285714286rem + 6.071428571428571vw,
              9.5rem
            );
            --size--10rem: clamp(
              5.5rem,
              4.214285714285714rem + 6.428571428571428vw,
              10rem
            );
            --size--11rem: clamp(5.75rem, 4.25rem + 7.5vw, 11rem);
            --size--12rem: clamp(
              6rem,
              4.285714285714286rem + 8.571428571428571vw,
              12rem
            );
            --size--13rem: clamp(
              6.5rem,
              4.642857142857143rem + 9.285714285714286vw,
              13rem
            );
            --size--14rem: clamp(7rem, 5rem + 10vw, 14rem);
            --size--15rem: clamp(
              7.5rem,
              5.357142857142857rem + 10.714285714285714vw,
              15rem
            );
            --size--16rem: clamp(
              8rem,
              5.714285714285714rem + 11.428571428571429vw,
              16rem
            );
          }
        ` }} />
      </div>
      <div className="styleguide_guide_wrap">
        <div className="w-embed">
          <style dangerouslySetInnerHTML={{ __html: `
            html:not(.wf-design-mode) .styleguide_guide_wrap {
              display: none;
            }
            .styleguide_guide_layout {
              counter-reset: gridguides;
            }
            .styleguide_guide_layout > div::before {
              counter-increment: gridguides;
              content: counter(gridguides);
            }
          ` }} />
        </div>
        <div
          data-padding-bottom="none"
          data-padding-top="none"
          className="styleguide_guide_contain u-container"
        >
          <div className="styleguide_guide_layout u-grid-custom">
            <div className="styleguide_guide_column u-vflex-center-bottom"></div>
            <div className="styleguide_guide_column u-vflex-center-bottom"></div>
            <div className="styleguide_guide_column u-vflex-center-bottom"></div>
            <div className="styleguide_guide_column u-vflex-center-bottom"></div>
            <div className="styleguide_guide_column u-vflex-center-bottom"></div>
            <div className="styleguide_guide_column u-vflex-center-bottom"></div>
            <div className="styleguide_guide_column u-vflex-center-bottom"></div>
            <div className="styleguide_guide_column u-vflex-center-bottom"></div>
            <div className="styleguide_guide_column u-vflex-center-bottom"></div>
            <div className="styleguide_guide_column u-vflex-center-bottom"></div>
            <div className="styleguide_guide_column u-vflex-center-bottom"></div>
            <div className="styleguide_guide_column u-vflex-center-bottom"></div>
            <div className="styleguide_guide_column u-vflex-center-bottom"></div>
            <div className="styleguide_guide_column u-vflex-center-bottom"></div>
            <div className="styleguide_guide_column u-vflex-center-bottom"></div>
            <div className="styleguide_guide_column u-vflex-center-bottom"></div>
            <div className="styleguide_guide_column u-vflex-center-bottom"></div>
            <div className="styleguide_guide_column u-vflex-center-bottom"></div>
            <div className="styleguide_guide_column u-vflex-center-bottom"></div>
            <div className="styleguide_guide_column u-vflex-center-bottom"></div>
            <div className="styleguide_guide_column u-vflex-center-bottom"></div>
            <div className="styleguide_guide_column u-vflex-center-bottom"></div>
            <div className="styleguide_guide_column u-vflex-center-bottom"></div>
            <div className="styleguide_guide_column u-vflex-center-bottom"></div>
          </div>
        </div>
      </div>
      <div className="navbar_wrapper">
        <nav data-navigation-status="not-active" className="navbar">
          <div className="u-container no-borders u-zindex-3">
            <div className="u-container-inside">
              <div className="navbar_component">
                <a
                  href="/"
                  aria-current="page"
                  className="navbar_logo-link w-inline-block w--current"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    viewBox="0 0 42 20"
                    fill="none"
                    className="btn_icon"
                  >
                    <path
                      d="M40.7719 16.2493L1.02972 16.2493C0.536509 16.2493 0.20431 15.7547 0.437894 15.3203C2.34461 11.7744 7.61475 6.71876 14.6402 9.22614L7.60224 1.59565C7.28657 1.25341 7.38882 0.705773 7.82744 0.549595C10.9047 -0.546128 16.4842 -0.541806 20.9146 5.7405C24.914 -0.258547 30.7058 -0.357475 33.8717 0.523266C34.3513 0.656696 34.4712 1.24691 34.1192 1.59894L26.4918 9.22614C34.1094 6.68695 39.4149 11.8975 41.3557 15.3061C41.6033 15.741 41.2724 16.2493 40.7719 16.2493Z"
                      fill="currentColor"
                    ></path></svg
                ></a>
                <div className="navbar_links">
                  <div className="navbar_links wpr">
                    <a
                      href="https://www.yungle.com.mx/pricing"
                      className="navbar_link w-inline-block"
                      ><div>Pricing</div></a
                    ><a
                      href="https://www.yungle.com.mx/contact"
                      className="navbar_link w-inline-block"
                      ><div>Book a call</div></a
                    >
                  </div>
                  <div className="hamburger-nav">
                    <div
                      data-hover=""
                      data-navigation-toggle="toggle"
                      className="hamburger-nav__toggle"
                    >
                      <div className="hamburger-nav__toggle-bar"></div>
                      <div className="hamburger-nav__toggle-bar"></div>
                      <div className="hamburger-nav__bg"></div>
                    </div>
                    <div className="hamburger-nav__group">
                      <p className="hamburger-nav__menu-p">Menu</p>
                      <ul className="hamburger-nav__ul">
                        <div className="hamburger-nav__li">
                          <a
                            href="/"
                            aria-current="page"
                            className="hamburger-nav__a w-inline-block w--current"
                            ><p className="hamburger-nav__p">Home</p>
                            <div className="hamburger-nav__dot"></div
                          ></a>
                        </div>
                        <div className="hamburger-nav__li">
                          <a
                            href="https://www.yungle.com.mx/work"
                            className="hamburger-nav__a w-inline-block"
                            ><p className="hamburger-nav__p">Work</p>
                            <div className="hamburger-nav__dot"></div
                          ></a>
                        </div>
                        <div className="hamburger-nav__li">
                          <a
                            href="https://www.yungle.com.mx/pricing"
                            className="hamburger-nav__a w-inline-block"
                            ><p className="hamburger-nav__p">Pricing</p>
                            <div className="hamburger-nav__dot"></div
                          ></a>
                        </div>
                        <div className="hamburger-nav__li">
                          <a
                            href="https://www.yungle.com.mx/maintenance"
                            className="hamburger-nav__a w-inline-block"
                            ><p className="hamburger-nav__p">Maintenance</p>
                            <div className="hamburger-nav__dot"></div
                          ></a>
                        </div>
                        <div className="hamburger-nav__li">
                          <a
                            href="https://www.yungle.com.mx/contact"
                            className="hamburger-nav__a w-inline-block"
                            ><p className="hamburger-nav__p">Contact</p>
                            <div className="hamburger-nav__dot"></div
                          ></a>
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-navigation-toggle="close"
            className="navigation__dark-bg u-zindex-1"
          ></div>
          <div className="hide w-embed">
            <style dangerouslySetInnerHTML={{ __html: `
              /* Nav Dark BG */
              .navigation__dark-bg {
                transition: all 0.7s cubic-bezier(0.5, 0.5, 0, 1);
              }

              [data-navigation-status="active"] .navigation__dark-bg {
                opacity: 0.33;
                visibility: visible;
              }

              /* Nav Group BG  */
              .hamburger-nav__bg {
                transition: all 0.7s cubic-bezier(0.5, 0.5, 0, 1);
              }

              [data-navigation-status="active"] .hamburger-nav__bg {
                width: 100%;
                height: 100%;
              }

              /* Nav Group  */
              .hamburger-nav__group {
                transition:
                  all 0.5s cubic-bezier(0.5, 0.5, 0, 1),
                  transform 0.7s cubic-bezier(0.5, 0.5, 0, 1);
                transform: scale(0.15) rotate(0.001deg);
                opacity: 0;
                visibility: hidden;
              }

              [data-navigation-status="active"] .hamburger-nav__group {
                transform: scale(1) rotate(0.001deg);
                opacity: 1;
                visibility: visible;
              }

              /* Active Link  */

              .hamburger-nav__a[aria-current] .hamburger-nav__p {
                opacity: 0.33;
              }

              /* Active Indicator  */

              .hamburger-nav__dot {
                transition: all 0.7s cubic-bezier(0.5, 0.5, 0, 1);
                transform: scale(0) rotate(0.001deg);
                opacity: 0.5;
              }

              .hamburger-nav__a[aria-current] .hamburger-nav__dot {
                transform: scale(1) rotate(0.001deg);
                opacity: 1;
              }

              .hamburger-nav:has(.hamburger-nav__a:hover) .hamburger-nav__dot {
                transform: scale(0) rotate(0.001deg);
              }

              .hamburger-nav .hamburger-nav__a:hover .hamburger-nav__dot {
                transform: scale(1) rotate(0.001deg);
                opacity: 0.25;
              }

              /* Hamburger Button  */
              .hamburger-nav__toggle {
                transition: transform 0.7s cubic-bezier(0.5, 0.5, 0, 1);
                transform: translate(0em, 0em) rotate(0.001deg);
              }

              [data-navigation-status="active"] .hamburger-nav__toggle {
                transform: translate(-1em, 1em) rotate(0.001deg);
              }

              .hamburger-nav__toggle .hamburger-nav__toggle-bar {
                transition: transform 0.7s cubic-bezier(0.5, 0.5, 0, 1);
                transform: translateY(-0.15em) rotate(0.001deg);
              }

              .hamburger-nav__toggle:hover .hamburger-nav__toggle-bar {
                transform: translateY(0.15em) rotate(0.001deg);
              }

              [data-navigation-status="active"]
                .hamburger-nav__toggle
                .hamburger-nav__toggle-bar { 
                transform: translateY(0em) rotate(45deg);
              }

              .hamburger-nav__toggle .hamburger-nav__toggle-bar:nth-child(2) {
                transition: transform 0.7s cubic-bezier(0.5, 0.5, 0, 1);
                transform: translateY(0.15em) rotate(0.001deg);
              }

              .hamburger-nav__toggle:hover
                .hamburger-nav__toggle-bar:nth-child(2) {
                transform: translateY(-0.15em) rotate(0.001deg);
              }

              [data-navigation-status="active"]
                .hamburger-nav__toggle
                .hamburger-nav__toggle-bar:nth-child(2) {
                transform: translateY(0em) rotate(-45deg);
              }
            ` }} />
          </div>
        </nav>
        <div
          data-w-id="ab873b7b-4bb6-49b6-fd8e-66ffb0862943"
          className="navbar_trigger"
        ></div>
      </div>
      <div
        data-w-id="eba6e4d8-351d-6184-e481-6636a0c5ad88"
        className="navbar_btn-trigger"
      ></div>
      <main id="main" className="page_main">
        <section
          data-wf--section-hero-vertical--styles-theme="inherit"
          className="header_3_wrap u-alignment-center"
        >
          <div className="u-container">
            <div
              data-wf--global-section-space--section-space="navbar"
              className="g_section_space w-variant-1d423067-76cb-e16d-5638-a29a024afa67"
            ></div>
            <div className="u-container-inside">
              <div data-theme="dark" className="header_3_layout u-theme-dark">
                <img
                  src="https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/681182e39314ceec639d3855_hero%20yungle%20bg.webp"
                  loading="eager"
                  sizes="(max-width: 1232px) 100vw, 1232px"
                  srcSet="
                    https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/681182e39314ceec639d3855_hero%20yungle%20bg-p-500.webp   500w,
                    https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/681182e39314ceec639d3855_hero%20yungle%20bg-p-800.webp   800w,
                    https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/681182e39314ceec639d3855_hero%20yungle%20bg-p-1080.webp 1080w,
                    https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/681182e39314ceec639d3855_hero%20yungle%20bg.webp        1232w
                  "
                  alt=""
                  className="g_visual_img u-cover-absolute align-top"
                />
                <div className="header_3_content u-margin-trim">
                  <h1 className="u-text-style-h1 u-mb-5">
                    Turn your website<br />into your<br />‍<span
                      className="u-text-syle-secondary"
                      >best salesperson</span
                    >
                  </h1>
                  <div
                    className="g_paragraph w-richtext u-text-style-large u-mb-text u-max-width-40ch u-child-contain u-rich-text"
                  >
                    <p>
                      Get a site that looks great and performs even better—with
                      measurable results.
                    </p>
                  </div>
                  <div className="u-display-contents">
                    <div className="u-btn-group">
                      <div
                        data-wf--btn-main--style="dark"
                        data-w-id="824b76d0-0ddb-5ed5-8ae6-09771aaa568a"
                        className="btn_main_wrap w-variant-3b30c948-29d7-baec-d8a7-875cceb634d5"
                      >
                        <div className="g_clickable_wrap">
                          <a
                            target=""
                            href="https://www.yungle.com.mx/contact"
                            className="g_clickable_link w-inline-block"
                            ><span className="g_clickable_text u-sr-only"
                              >Book a call</span
                            ></a
                          ><button type="button" className="g_clickable_btn">
                            <span className="g_clickable_text u-sr-only"
                              >Book a call</span
                            >
                          </button>
                        </div>
                        <div aria-hidden="true" className="btn_main_text">
                          Book a call
                        </div>
                        <div
                          className="btn_icon-wpr w-variant-3b30c948-29d7-baec-d8a7-875cceb634d5"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            viewBox="0 0 25 24"
                            fill="none"
                            className="btn_icon _1"
                          >
                            <path
                              d="M23.8334 12.6666L15.167 21.333C14.9901 21.5099 14.7503 21.6092 14.5003 21.6092C14.2503 21.6092 14.0105 21.5099 13.8337 21.333C13.6569 21.1562 13.5575 20.9164 13.5575 20.6664C13.5575 20.4164 13.6569 20.1766 13.8337 19.9998L20.8909 12.9425L1.83403 12.9433C1.58385 12.9433 1.34392 12.8439 1.16702 12.667C0.990112 12.4901 0.890729 12.2502 0.890729 12C0.890729 11.7498 0.990113 11.5099 1.16702 11.333C1.34392 11.1561 1.58385 11.0567 1.83403 11.0567L20.8909 11.0575L13.8337 4.00025C13.6569 3.82344 13.5575 3.58364 13.5575 3.3336C13.5575 3.08356 13.6569 2.84376 13.8337 2.66695C14.0105 2.49015 14.2503 2.39082 14.5003 2.39082C14.7503 2.39082 14.9901 2.49015 15.167 2.66695L23.8334 11.3334C24.0102 11.5102 24.1095 11.75 24.1095 12C24.1095 12.25 24.0102 12.4898 23.8334 12.6666Z"
                              fill="currentColor"
                            ></path></svg
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            viewBox="0 0 25 24"
                            fill="none"
                            className="btn_icon _2 w-variant-3b30c948-29d7-baec-d8a7-875cceb634d5"
                          >
                            <path
                              d="M23.8334 12.6666L15.167 21.333C14.9901 21.5099 14.7503 21.6092 14.5003 21.6092C14.2503 21.6092 14.0105 21.5099 13.8337 21.333C13.6569 21.1562 13.5575 20.9164 13.5575 20.6664C13.5575 20.4164 13.6569 20.1766 13.8337 19.9998L20.8909 12.9425L1.83403 12.9433C1.58385 12.9433 1.34392 12.8439 1.16702 12.667C0.990112 12.4901 0.890729 12.2502 0.890729 12C0.890729 11.7498 0.990113 11.5099 1.16702 11.333C1.34392 11.1561 1.58385 11.0567 1.83403 11.0567L20.8909 11.0575L13.8337 4.00025C13.6569 3.82344 13.5575 3.58364 13.5575 3.3336C13.5575 3.08356 13.6569 2.84376 13.8337 2.66695C14.0105 2.49015 14.2503 2.39082 14.5003 2.39082C14.7503 2.39082 14.9901 2.49015 15.167 2.66695L23.8334 11.3334C24.0102 11.5102 24.1095 11.75 24.1095 12C24.1095 12.25 24.0102 12.4898 23.8334 12.6666Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-wf--global-section-space--section-space="none"
              className="g_section_space"
            ></div>
          </div>
        </section>
        <section
          data-wf--section-badges-vertical--styles-theme="inherit"
          className="header_3_wrap u-alignment-center"
        >
          <div className="u-container">
            <div className="u-container-inside">
              <div
                data-wf--global-section-space--section-space="even"
                className="g_section_space w-variant-41fc0c0a-cac3-53c9-9802-6a916e3fb342"
              ></div>
              <div className="badges_layout u-vflex-center-center">
                <div
                  className="g_paragraph w-richtext u-text-style-main u-max-width-50ch u-child-contain u-rich-text"
                >
                  <p>+80 projects in different industries</p>
                </div>
                <div className="badge_layout u-gap-4">
                  <a
                    href="https://webflow.com/@yungle-mx"
                    target="_blank"
                    className="badge_item u-hflex-center-center u-gap-1 light-12 w-inline-block"
                    ><div
                      className="badge_icon light-15 u-icon-size-2 u-color-brand-dark light-13"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        viewBox="0 0 32 20"
                        fill="none"
                        className="btn_icon light-14"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M31.8117 0L21.866 20H12.5242L16.6865 11.7111H16.4997C13.0659 16.2966 7.94255 19.315 0.642578 20V11.8259C0.642578 11.8259 5.31255 11.5421 8.05789 8.57306H0.642578V0.000157979H8.97659V7.05124L9.16365 7.05046L12.5693 0.000157979H18.872V7.00653L19.0591 7.00622L22.5924 0H31.8117Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div>Premium Partner</div></a
                  ><a
                    href="https://maps.app.goo.gl/Wf4R5idd58DuBwBB6"
                    target="_blank"
                    className="badge_item u-hflex-center-center u-gap-1 light-12 w-inline-block"
                    ><div
                      className="badge_icon light-15 u-icon-size-2 u-color-brand-dark light-13"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        viewBox="0 0 21 20"
                        fill="none"
                        className="btn_icon"
                      >
                        <path
                          d="M20.1321 8.18111H10.8115V12.0439H16.1753C15.6761 14.4985 13.5863 15.9089 10.8115 15.9089C10.0351 15.9102 9.26604 15.7582 8.54847 15.4617C7.83091 15.1651 7.17894 14.7298 6.62997 14.1808C6.08101 13.6317 5.64584 12.9796 5.34942 12.262C5.05301 11.5444 4.90119 10.7753 4.90266 9.99888C4.90134 9.22254 5.05327 8.45358 5.34975 7.73609C5.64622 7.01859 6.08142 6.36668 6.63037 5.81772C7.17932 5.26877 7.83124 4.83358 8.54873 4.5371C9.26623 4.24062 10.0352 4.08869 10.8115 4.09002C12.2207 4.09002 13.4945 4.59035 14.4941 5.40857L17.4043 2.49947C15.6313 0.953699 13.358 4.25989e-05 10.8115 4.25989e-05C9.49723 -0.00379908 8.19515 0.252235 6.98017 0.753419C5.76518 1.2546 4.66127 1.99105 3.73192 2.9204C2.80257 3.84974 2.06613 4.95365 1.56495 6.16864C1.06376 7.38362 0.807728 8.68571 0.811569 10C0.807579 11.3143 1.06351 12.6165 1.56464 13.8315C2.06577 15.0466 2.80221 16.1506 3.73159 17.0799C4.66097 18.0093 5.76494 18.7457 6.97999 19.2469C8.19504 19.748 9.49719 20.0039 10.8115 20C15.8115 20 20.3582 16.3633 20.3582 10C20.3582 9.409 20.2675 8.77211 20.1321 8.18111Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div className="badge_icon light-15">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        viewBox="0 0 71 14"
                        fill="none"
                      >
                        <path
                          d="M8.77622 5.83335L7.35872 1.16669L5.94122 5.83335H1.52539L5.13039 8.40585L3.75956 12.8334L7.35872 10.0975L10.9637 12.8334L9.59289 8.40585L13.1921 5.83335H8.77622Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M22.7762 5.83335L21.3587 1.16669L19.9412 5.83335H15.5254L19.1304 8.40585L17.7596 12.8334L21.3587 10.0975L24.9637 12.8334L23.5929 8.40585L27.1921 5.83335H22.7762Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M36.7762 5.83335L35.3587 1.16669L33.9412 5.83335H29.5254L33.1304 8.40585L31.7596 12.8334L35.3587 10.0975L38.9637 12.8334L37.5929 8.40585L41.1921 5.83335H36.7762Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M50.7762 5.83335L49.3587 1.16669L47.9412 5.83335H43.5254L47.1304 8.40585L45.7596 12.8334L49.3587 10.0975L52.9637 12.8334L51.5929 8.40585L55.1921 5.83335H50.7762Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M64.7762 5.83335L63.3587 1.16669L61.9412 5.83335H57.5254L61.1304 8.40585L59.7596 12.8334L63.3587 10.0975L66.9637 12.8334L65.5929 8.40585L69.1921 5.83335H64.7762Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div>4.9</div></a
                  >
                </div>
                <div
                  className="badges_logos u-hflex-center-center u-gap-6 u-max-width-90ch"
                >
                  <div className="badges_logo-wpr">
                    <img
                      src="https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/67ed46e591835f773aa0bc74_Curated.webp"
                      loading="lazy"
                      alt=""
                      className="badges_logo"
                    />
                  </div>
                  <div className="badges_logo-wpr">
                    <img
                      src="https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/67ed46e630f171d46748258e_Influur.webp"
                      loading="lazy"
                      alt=""
                      className="badges_logo"
                    />
                  </div>
                  <div className="badges_logo-wpr">
                    <img
                      src="https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/67ed46e6de5b8e48c0b614fc_Red%20Antler.webp"
                      loading="lazy"
                      alt=""
                      className="badges_logo"
                    />
                  </div>
                  <div className="badges_logo-wpr">
                    <img
                      src="https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/67ed46e5fd01935667b19abd_Adgoritmo.webp"
                      loading="lazy"
                      alt=""
                      className="badges_logo"
                    />
                  </div>
                  <div className="badges_logo-wpr">
                    <img
                      src="https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/67ed46e5b423c93557c6365d_Duventus.webp"
                      loading="lazy"
                      alt=""
                      className="badges_logo"
                    />
                  </div>
                  <div className="badges_logo-wpr">
                    <img
                      src="https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/67ed478ebb37b0ed54b7f22b_Dedupely.webp"
                      loading="lazy"
                      alt=""
                      className="badges_logo"
                    />
                  </div>
                  <div className="badges_logo-wpr">
                    <img
                      src="https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/67ed51ad471ca6c6a854edf1_Maena.webp"
                      loading="lazy"
                      alt=""
                      className="badges_logo"
                    />
                  </div>
                  <div className="badges_logo-wpr">
                    <img
                      src="https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/67ed51aeeda4fee87ac31a67_Kohl%20School.webp"
                      loading="lazy"
                      alt=""
                      className="badges_logo"
                    />
                  </div>
                  <div className="badges_logo-wpr">
                    <img
                      src="https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/67ed51ad712dde8694ba63ae_Hotel%20Cariongo.webp"
                      loading="lazy"
                      alt=""
                      className="badges_logo"
                    />
                  </div>
                  <div className="badges_logo-wpr">
                    <img
                      src="https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/67ed51ad96621cba7c7b3ac1_Roundbox.webp"
                      loading="lazy"
                      alt=""
                      className="badges_logo"
                    />
                  </div>
                  <div className="badges_logo-wpr">
                    <img
                      src="https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/67ed51adc437c08c16040316_Liks.webp"
                      loading="lazy"
                      alt=""
                      className="badges_logo"
                    />
                  </div>
                  <div className="badges_logo-wpr">
                    <img
                      src="https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/67ed51ad1b6e1fc5d342b9cf_Wildfruit.webp"
                      loading="lazy"
                      alt=""
                      className="badges_logo"
                    />
                  </div>
                </div>
              </div>
              <div
                data-wf--global-section-space--section-space="main"
                className="g_section_space w-variant-60a7ad7d-02b0-6682-95a5-2218e6fd1490"
              ></div>
            </div>
          </div>
        </section>
        <section
          data-wf--section-3-column-icon-text--styles-theme="inherit"
          className="section_services"
        >
          <div className="u-container">
            <div
              data-wf--global-section-space--section-space="small"
              className="g_section_space w-variant-d422cbd0-f212-c815-68df-63414354c21d"
            ></div>
            <div className="u-container-inside">
              <div className="u-vflex-center-center u-mb-8 u-max-width-60ch">
                <h2 className="u-text-style-h2 u-mb-4">
                  What
                  <span className="u-text-syle-secondary"
                    >your current website</span
                  >
                  should do
                </h2>
              </div>
              <div className="u-grid-autofit u-mb-8">
                <div className="feature_icon-card">
                  <div className="feature_icon-wpr">
                    <img
                      src="https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/682c405b8b8044ff6d4a26b6_icon%201%20expectation.webp"
                      loading="lazy"
                      alt=""
                      className="feature_icon"
                    />
                  </div>
                  <div className="feature_icon-content">
                    <h2 className="u-text-style-h5">1. Look great</h2>
                    <p className="u-max-width-30ch">
                      Boost brand recognition.<br />Be easy and intuitive to
                      navigate.
                    </p>
                  </div>
                </div>
                <div className="feature_icon-card">
                  <div className="feature_icon-wpr">
                    <img
                      src="https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/682c4090e3c593c77786f66c_icon%202%20expectation.webp"
                      loading="lazy"
                      alt=""
                      className="feature_icon"
                    />
                  </div>
                  <div className="feature_icon-content">
                    <h2 className="u-text-style-h5">2. Perform well</h2>
                    <p className="u-max-width-30ch">
                      Load fast on all devices.<br />Bring traffic through SEO.
                    </p>
                  </div>
                </div>
                <div className="feature_icon-card">
                  <div className="feature_icon-wpr">
                    <img
                      src="https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/682c40b44103ef752833d1b0_icon%203%20expectation.webp"
                      loading="lazy"
                      alt=""
                      className="feature_icon"
                    />
                  </div>
                  <div className="feature_icon-content">
                    <h2 className="u-text-style-h5">3. Convert traffic</h2>
                    <p className="u-max-width-30ch">
                      Collect valuable visitor data.<br />Constantly improve
                      through testing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-wf--global-section-space--section-space="even"
              className="g_section_space w-variant-41fc0c0a-cac3-53c9-9802-6a916e3fb342"
            ></div>
          </div>
        </section>
        <section
          data-wf--section-services-cards--styles-theme="inherit"
          className="section_services"
        >
          <div className="u-container">
            <div
              data-wf--global-section-space--section-space="main"
              className="g_section_space w-variant-60a7ad7d-02b0-6682-95a5-2218e6fd1490"
            ></div>
            <div className="u-container-inside">
              <div className="u-vflex-center-center u-mb-8 u-max-width-60ch">
                <div className="u-color-muted u-mb-4">Our services</div>
                <h2 className="u-text-style-h2 u-mb-5">
                  H<span>ow can you do </span
                  ><span className="u-text-syle-secondary">exactly that</span
                  ><span>?</span>
                </h2>
                <p>
                  It’s a <em>“I don’t have to worry about a thing”</em> type of
                  service.
                </p>
              </div>
              <div className="u-grid-autofit u-mb-8 is-services">
                <div
                  data-w-id="3fd7624a-1468-55cb-be62-72f2d862b392"
                  className="services_card"
                >
                  <img
                    src="https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/68117fff61967b86a148120c_card%20bg%20design%202.webp"
                    loading="lazy"
                    alt=""
                    sizes="(max-width: 767px) 100vw, 726px"
                    srcSet="
                      https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/68117fff61967b86a148120c_card%20bg%20design%202-p-500.webp 500w,
                      https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/68117fff61967b86a148120c_card%20bg%20design%202.webp       726w
                    "
                    className="g_visual_img u-cover-absolute"
                  />
                  <div className="service_card-img-wpr"></div>
                  <div className="service_card-content">
                    <h3 className="u-text-style-h4 u-mb-3">Design</h3>
                    <p className="u-opacity-90 u-max-width-40ch">
                      Conversion-driven designs that captivate users and guide
                      them toward action.
                    </p>
                  </div>
                </div>
                <div
                  data-w-id="3fd7624a-1468-55cb-be62-72f2d862b392"
                  className="services_card"
                >
                  <img
                    src="https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/68118175d323346f55bec78a_yungle%20webflow%20bg%201.webp"
                    loading="lazy"
                    alt=""
                    sizes="(max-width: 767px) 100vw, 726px"
                    srcSet="
                      https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/68118175d323346f55bec78a_yungle%20webflow%20bg%201-p-500.webp 500w,
                      https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/68118175d323346f55bec78a_yungle%20webflow%20bg%201.webp       726w
                    "
                    className="g_visual_img u-cover-absolute"
                  />
                  <div className="service_card-img-wpr"></div>
                  <div className="service_card-content">
                    <h3 className="u-text-style-h4 u-mb-3">Framer development</h3>
                    <p className="u-opacity-90 u-max-width-40ch">
                      High-performance Webflow sites that load fast, work
                      seamlessly, and are easy to manage.
                    </p>
                  </div>
                </div>
                <div
                  data-w-id="3fd7624a-1468-55cb-be62-72f2d862b392"
                  className="services_card"
                >
                  <img
                    src="https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/6811810b2d3396c1ad04a3f4_yungle%20seo%20bg.webp"
                    loading="lazy"
                    alt=""
                    sizes="(max-width: 767px) 100vw, 726px"
                    srcSet="
                      https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/6811810b2d3396c1ad04a3f4_yungle%20seo%20bg-p-500.webp 500w,
                      https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/6811810b2d3396c1ad04a3f4_yungle%20seo%20bg.webp       726w
                    "
                    className="g_visual_img u-cover-absolute"
                  />
                  <div className="service_card-img-wpr"></div>
                  <div className="service_card-content">
                    <h3 className="u-text-style-h4 u-mb-3">SEO strategy</h3>
                    <p className="u-opacity-90 u-max-width-40ch">
                      Strategies that drive qualified traffic through SEO and
                      website content creation.
                    </p>
                  </div>
                </div>
              </div>
              <div className="u-vflex-center-center">
                <div
                  className="badges_logos u-hflex-center-center u-gap-6 u-max-width-90ch"
                >
                  <div className="badges_logo-wpr">
                    <img
                      src="https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/67ed46e591835f773aa0bc74_Curated.webp"
                      loading="lazy"
                      alt=""
                      className="badges_logo"
                    />
                  </div>
                  <div className="badges_logo-wpr">
                    <img
                      src="https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/67edbe80b048d635e8194b0d_Influur%20black.webp"
                      loading="lazy"
                      alt=""
                      className="badges_logo"
                    />
                  </div>
                  <div className="badges_logo-wpr">
                    <img
                      src="https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/67ed46e6de5b8e48c0b614fc_Red%20Antler.webp"
                      loading="lazy"
                      alt=""
                      className="badges_logo"
                    />
                  </div>
                  <div className="badges_logo-wpr">
                    <img
                      src="https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/67edbe8648c7ac51153c16ee_Adgoritmo%20black.webp"
                      loading="lazy"
                      alt=""
                      className="badges_logo"
                    />
                  </div>
                  <div className="badges_logo-wpr">
                    <img
                      src="https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/67edbe80f42ca6fb2302458b_Dedupely%20black.webp"
                      loading="lazy"
                      alt=""
                      className="badges_logo"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              data-wf--global-section-space--section-space="main"
              className="g_section_space w-variant-60a7ad7d-02b0-6682-95a5-2218e6fd1490"
            ></div>
          </div>
        </section>
        <section
          data-wf--section-1-testimonial--styles-theme="inherit"
          className="section_services"
        >
          <div className="u-container">
            <div
              data-wf--global-section-space--section-space="even"
              className="g_section_space w-variant-41fc0c0a-cac3-53c9-9802-6a916e3fb342"
            ></div>
            <div className="u-container-inside">
              <div className="testimonial_dotted-wpr">
                <div className="testimonial_dotted-card">
                  <div>
                    <p className="u-text-style-h4">
                      “I don&#x27;t think I&#x27;ve worked with another web
                      design company that can take our sometimes limited
                      directions and consistently over-deliver.”
                    </p>
                  </div>
                  <div className="testimonial_info">
                    <img
                      src="https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/67edc88366c2c7c0bbfd2267_hampus%20headshot.webp"
                      loading="lazy"
                      alt=""
                      className="testimonial_img"
                    />
                    <div className="testimonial_name">
                      <div>Hampus Isaksoon</div>
                      <div className="u-color-muted">COO, Dedupely</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-wf--global-section-space--section-space="even"
              className="g_section_space w-variant-41fc0c0a-cac3-53c9-9802-6a916e3fb342"
            ></div>
          </div>
        </section>
        <section
          data-wf--section-features-cards-2-top-5-bottom--styles-theme="inherit"
          className="section_services"
        >
          <div className="u-container">
            <div
              data-wf--global-section-space--section-space="main"
              className="g_section_space w-variant-60a7ad7d-02b0-6682-95a5-2218e6fd1490"
            ></div>
            <div className="u-container-inside">
              <div className="u-vflex-center-center u-mb-8 u-max-width-60ch">
                <h2 className="u-text-style-h2">
                  <span className="u-text-syle-secondary">AI-powered</span
                  ><span> websites</span>
                </h2>
              </div>
            </div>
            <div className="grid_2col-no-pad u-grid-autofit u-gap-0 u-mb-8">
              <div className="features_grid-card">
                <div className="features_img-space"></div>
                <div className="features_grid-img-wpr">
                  <img
                    src="https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/6812b201dd5e3041da84a075_Custom%20experience%202.webp"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="
                      https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/6812b201dd5e3041da84a075_Custom%20experience%202-p-500.webp   500w,
                      https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/6812b201dd5e3041da84a075_Custom%20experience%202-p-800.webp   800w,
                      https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/6812b201dd5e3041da84a075_Custom%20experience%202-p-1080.webp 1080w,
                      https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/6812b201dd5e3041da84a075_Custom%20experience%202.webp        1312w
                    "
                    alt=""
                    className="features_grid-img"
                  />
                </div>
                <div className="features_grid-texts">
                  <h3 className="u-text-style-h4 u-mb-4">
                    Give visitors a custom experience
                  </h3>
                  <p className="u-max-width-40ch">
                    Target different customer segments and improve conversion
                    rates with personalized messaging, content, offers, CTAs,
                    and more.
                  </p>
                </div>
              </div>
              <div className="features_grid-card right">
                <div className="features_img-space"></div>
                <div className="features_grid-img-wpr">
                  <img
                    src="https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/6812b21303208fc54898bf77_AB%20testing%20with%20AI%202.webp"
                    loading="lazy"
                    sizes="100vw"
                    srcSet="
                      https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/6812b21303208fc54898bf77_AB%20testing%20with%20AI%202-p-500.webp   500w,
                      https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/6812b21303208fc54898bf77_AB%20testing%20with%20AI%202-p-800.webp   800w,
                      https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/6812b21303208fc54898bf77_AB%20testing%20with%20AI%202-p-1080.webp 1080w,
                      https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/6812b21303208fc54898bf77_AB%20testing%20with%20AI%202.webp        1312w
                    "
                    alt=""
                    className="features_grid-img"
                  />
                </div>
                <div className="features_grid-texts">
                  <h3 className="u-text-style-h4 u-mb-4">A/B testing with AI</h3>
                  <p className="u-max-width-40ch">
                    We create variations, then let AI make real-time decisions
                    about which audiences see what content in order to maximize
                    conversions.
                  </p>
                </div>
              </div>
            </div>
            <div className="u-container-inside">
              <div className="u-grid-autofit features_5col-grid">
                <div className="features_small-card">
                  <div className="img_wpr">
                    <img
                      src="https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/67f01037245d65fc6d967242_cta%20bg.webp"
                      loading="lazy"
                      alt=""
                      className="img"
                    />
                  </div>
                  <div className="features_texts">
                    <h4 className="u-text-style-h5 u-mb-3 u-mt-4">Higher ROI</h4>
                    <p>
                      Make every visit count<br />with data-backed decisions.
                    </p>
                  </div>
                </div>
                <div className="features_small-card">
                  <div className="img_wpr">
                    <img
                      src="https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/67f136baf71b33ff4c138631_pricing%201%20bg.webp"
                      loading="lazy"
                      alt=""
                      className="img"
                    />
                  </div>
                  <div className="features_texts">
                    <h4 className="u-text-style-h5 u-mb-3 u-mt-4">
                      Actionable analytics
                    </h4>
                    <p>Measure what works with real-time audience insights.</p>
                  </div>
                </div>
                <div className="features_small-card">
                  <div className="img_wpr">
                    <img
                      src="https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/67edbf53412b258a87b71f53_conversion%20card.png"
                      loading="lazy"
                      alt=""
                      className="img"
                    />
                  </div>
                  <div className="features_texts">
                    <h4 className="u-text-style-h5 u-mb-3 u-mt-4">
                      Future-proof dev
                    </h4>
                    <p>
                      Scalable, organized, and developer-friendly structure.
                    </p>
                  </div>
                </div>
                <div className="features_small-card">
                  <div className="img_wpr">
                    <img
                      src="https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/67eee36d1c775a612acd9cd8_card%20bg%20seo.webp"
                      loading="lazy"
                      alt=""
                      className="img"
                    />
                  </div>
                  <div className="features_texts">
                    <h4 className="u-text-style-h5 u-mb-3 u-mt-4">
                      Thoughtfully async
                    </h4>
                    <p>Clear communication through Slack and Mail.</p>
                  </div>
                </div>
                <div className="features_small-card">
                  <div className="img_wpr">
                    <img
                      src="https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/67f006374adfba438e208197_cal%20bg.webp"
                      loading="lazy"
                      alt=""
                      className="img"
                    />
                  </div>
                  <div className="features_texts">
                    <h4 className="u-text-style-h5 u-mb-3 u-mt-4">
                      100% ownership
                    </h4>
                    <p>You fully own everything we create—forever.</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-wf--global-section-space--section-space="main"
              className="g_section_space w-variant-60a7ad7d-02b0-6682-95a5-2218e6fd1490"
            ></div>
          </div>
        </section>
        <section
          data-wf--section-projects-slider--styles-theme="inherit"
          className="section_services"
        >
          <div className="u-container">
            <div
              data-wf--global-section-space--section-space="main"
              className="g_section_space w-variant-60a7ad7d-02b0-6682-95a5-2218e6fd1490"
            ></div>
            <div className="u-container-inside">
              <div className="u-vflex-center-center u-mb-8 u-max-width-60ch">
                <h2 className="u-text-style-h2">
                  Trusted by
                  <span className="u-text-syle-secondary">clients</span> who keep
                  coming back
                </h2>
              </div>
            </div>
            <div className="slider-main_component">
              <div className="swiper is-slider-main w-dyn-list">
                <div
                  yungle-slider="slider"
                  role="list"
                  className="swiper-wrapper is-slider-main w-dyn-items"
                >
                  <div
                    yungle-slider="slide"
                    role="listitem"
                    className="swiper-slide is-slider-main w-dyn-item"
                  >
                    <a
                      data-w-id="7ce28723-bdbf-cc95-00da-b2b3ce8ad121"
                      href="https://wearecurated.com/"
                      target="_blank"
                      className="projects_slider-card w-inline-block"
                      ><img
                        src="https://cdn.prod.website-files.com/67f0127fd6d2dea189808285/682c4dd50579669b6c981b98_curated%20bg%20img.png"
                        loading="lazy"
                        style={{ backgroundColor: "#1a1a1a" }}
                        alt="Curated"
                        sizes="100vw"
                        srcSet="
                          https://cdn.prod.website-files.com/67f0127fd6d2dea189808285/682c4dd50579669b6c981b98_curated%20bg%20img-p-500.png 500w,
                          https://cdn.prod.website-files.com/67f0127fd6d2dea189808285/682c4dd50579669b6c981b98_curated%20bg%20img.png       790w
                        "
                        className="projects_slider-card-img" />
                      <div className="projects_slider-card-texts">
                        <div className="u-color-muted u-mb-2">Curated</div>
                        <h3 className="u-text-style-h5">
                          Re-design and 3rd party database integration
                        </h3>
                        <div className="btn_link">
                          <div>See live website</div>
                          <div className="btn_icon-wpr is-small">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              viewBox="0 0 10 11"
                              fill="none"
                              className="btn_icon _1"
                            >
                              <path
                                d="M10 1.05554V8.27754C10 8.42487 9.94147 8.56618 9.83729 8.67036C9.7331 8.77455 9.5918 8.83308 9.44446 8.83308C9.29712 8.83308 9.15582 8.77455 9.05163 8.67036C8.94745 8.56618 8.88892 8.42487 8.88892 8.27754V2.39647L0.948891 10.3372C0.844649 10.4414 0.703267 10.5 0.555847 10.5C0.408427 10.5 0.267045 10.4414 0.162804 10.3372C0.0585623 10.233 0 10.0916 0 9.94415C0 9.79673 0.0585623 9.65535 0.162804 9.55111L8.10353 1.61108L2.22246 1.61108C2.07512 1.61108 1.93382 1.55255 1.82964 1.44836C1.72545 1.34418 1.66692 1.20288 1.66692 1.05554C1.66692 0.9082 1.72545 0.766897 1.82964 0.662714C1.93382 0.55853 2.07512 0.5 2.22246 0.5L9.44446 0.5C9.5918 0.5 9.7331 0.55853 9.83729 0.662714C9.94147 0.766897 10 0.9082 10 1.05554Z"
                                fill="currentColor"
                              ></path></svg
                            ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              viewBox="0 0 10 11"
                              fill="none"
                              className="btn_icon _2"
                            >
                              <path
                                d="M10 1.05554V8.27754C10 8.42487 9.94147 8.56618 9.83729 8.67036C9.7331 8.77455 9.5918 8.83308 9.44446 8.83308C9.29712 8.83308 9.15582 8.77455 9.05163 8.67036C8.94745 8.56618 8.88892 8.42487 8.88892 8.27754V2.39647L0.948891 10.3372C0.844649 10.4414 0.703267 10.5 0.555847 10.5C0.408427 10.5 0.267045 10.4414 0.162804 10.3372C0.0585623 10.233 0 10.0916 0 9.94415C0 9.79673 0.0585623 9.65535 0.162804 9.55111L8.10353 1.61108L2.22246 1.61108C2.07512 1.61108 1.93382 1.55255 1.82964 1.44836C1.72545 1.34418 1.66692 1.20288 1.66692 1.05554C1.66692 0.9082 1.72545 0.766897 1.82964 0.662714C1.93382 0.55853 2.07512 0.5 2.22246 0.5L9.44446 0.5C9.5918 0.5 9.7331 0.55853 9.83729 0.662714C9.94147 0.766897 10 0.9082 10 1.05554Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </div></div
                    ></a>
                  </div>
                  <div
                    yungle-slider="slide"
                    role="listitem"
                    className="swiper-slide is-slider-main w-dyn-item"
                  >
                    <a
                      data-w-id="7ce28723-bdbf-cc95-00da-b2b3ce8ad121"
                      href="https://www.cyberstarts.com/"
                      target="_blank"
                      className="projects_slider-card w-inline-block"
                      ><img
                        src="https://cdn.prod.website-files.com/67f0127fd6d2dea189808285/6883c6ebdadf2c21854e03f6_Cyberstarts%20bg%20img.png"
                        loading="lazy"
                        style={{ backgroundColor: "#5e5c49" }}
                        alt="Cyberstarts"
                        sizes="100vw"
                        srcSet="
                          https://cdn.prod.website-files.com/67f0127fd6d2dea189808285/6883c6ebdadf2c21854e03f6_Cyberstarts%20bg%20img-p-500.png 500w,
                          https://cdn.prod.website-files.com/67f0127fd6d2dea189808285/6883c6ebdadf2c21854e03f6_Cyberstarts%20bg%20img.png       790w
                        "
                        className="projects_slider-card-img" />
                      <div className="projects_slider-card-texts">
                        <div className="u-color-muted u-mb-2">Cyberstarts</div>
                        <h3 className="u-text-style-h5">
                          Webflow development in colab with Red Antler
                        </h3>
                        <div className="btn_link">
                          <div>See live website</div>
                          <div className="btn_icon-wpr is-small">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              viewBox="0 0 10 11"
                              fill="none"
                              className="btn_icon _1"
                            >
                              <path
                                d="M10 1.05554V8.27754C10 8.42487 9.94147 8.56618 9.83729 8.67036C9.7331 8.77455 9.5918 8.83308 9.44446 8.83308C9.29712 8.83308 9.15582 8.77455 9.05163 8.67036C8.94745 8.56618 8.88892 8.42487 8.88892 8.27754V2.39647L0.948891 10.3372C0.844649 10.4414 0.703267 10.5 0.555847 10.5C0.408427 10.5 0.267045 10.4414 0.162804 10.3372C0.0585623 10.233 0 10.0916 0 9.94415C0 9.79673 0.0585623 9.65535 0.162804 9.55111L8.10353 1.61108L2.22246 1.61108C2.07512 1.61108 1.93382 1.55255 1.82964 1.44836C1.72545 1.34418 1.66692 1.20288 1.66692 1.05554C1.66692 0.9082 1.72545 0.766897 1.82964 0.662714C1.93382 0.55853 2.07512 0.5 2.22246 0.5L9.44446 0.5C9.5918 0.5 9.7331 0.55853 9.83729 0.662714C9.94147 0.766897 10 0.9082 10 1.05554Z"
                                fill="currentColor"
                              ></path></svg
                            ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              viewBox="0 0 10 11"
                              fill="none"
                              className="btn_icon _2"
                            >
                              <path
                                d="M10 1.05554V8.27754C10 8.42487 9.94147 8.56618 9.83729 8.67036C9.7331 8.77455 9.5918 8.83308 9.44446 8.83308C9.29712 8.83308 9.15582 8.77455 9.05163 8.67036C8.94745 8.56618 8.88892 8.42487 8.88892 8.27754V2.39647L0.948891 10.3372C0.844649 10.4414 0.703267 10.5 0.555847 10.5C0.408427 10.5 0.267045 10.4414 0.162804 10.3372C0.0585623 10.233 0 10.0916 0 9.94415C0 9.79673 0.0585623 9.65535 0.162804 9.55111L8.10353 1.61108L2.22246 1.61108C2.07512 1.61108 1.93382 1.55255 1.82964 1.44836C1.72545 1.34418 1.66692 1.20288 1.66692 1.05554C1.66692 0.9082 1.72545 0.766897 1.82964 0.662714C1.93382 0.55853 2.07512 0.5 2.22246 0.5L9.44446 0.5C9.5918 0.5 9.7331 0.55853 9.83729 0.662714C9.94147 0.766897 10 0.9082 10 1.05554Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </div></div
                    ></a>
                  </div>
                  <div
                    yungle-slider="slide"
                    role="listitem"
                    className="swiper-slide is-slider-main w-dyn-item"
                  >
                    <a
                      data-w-id="7ce28723-bdbf-cc95-00da-b2b3ce8ad121"
                      href="https://montaukcap.com/"
                      target="_blank"
                      className="projects_slider-card w-inline-block"
                      ><img
                        src="https://cdn.prod.website-files.com/67f0127fd6d2dea189808285/6917ceaa0fb10e6473a74488_Mountauk%20Capital%20bg%20img.png"
                        loading="lazy"
                        style={{ backgroundColor: "#e5e1db" }}
                        alt="Montauk Capital"
                        sizes="100vw"
                        srcSet="
                          https://cdn.prod.website-files.com/67f0127fd6d2dea189808285/6917ceaa0fb10e6473a74488_Mountauk%20Capital%20bg%20img-p-500.png 500w,
                          https://cdn.prod.website-files.com/67f0127fd6d2dea189808285/6917ceaa0fb10e6473a74488_Mountauk%20Capital%20bg%20img.png       790w
                        "
                        className="projects_slider-card-img" />
                      <div className="projects_slider-card-texts">
                        <div className="u-color-muted u-mb-2">Montauk Capital</div>
                        <h3 className="u-text-style-h5">Webflow development</h3>
                        <div className="btn_link">
                          <div>See live website</div>
                          <div className="btn_icon-wpr is-small">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              viewBox="0 0 10 11"
                              fill="none"
                              className="btn_icon _1"
                            >
                              <path
                                d="M10 1.05554V8.27754C10 8.42487 9.94147 8.56618 9.83729 8.67036C9.7331 8.77455 9.5918 8.83308 9.44446 8.83308C9.29712 8.83308 9.15582 8.77455 9.05163 8.67036C8.94745 8.56618 8.88892 8.42487 8.88892 8.27754V2.39647L0.948891 10.3372C0.844649 10.4414 0.703267 10.5 0.555847 10.5C0.408427 10.5 0.267045 10.4414 0.162804 10.3372C0.0585623 10.233 0 10.0916 0 9.94415C0 9.79673 0.0585623 9.65535 0.162804 9.55111L8.10353 1.61108L2.22246 1.61108C2.07512 1.61108 1.93382 1.55255 1.82964 1.44836C1.72545 1.34418 1.66692 1.20288 1.66692 1.05554C1.66692 0.9082 1.72545 0.766897 1.82964 0.662714C1.93382 0.55853 2.07512 0.5 2.22246 0.5L9.44446 0.5C9.5918 0.5 9.7331 0.55853 9.83729 0.662714C9.94147 0.766897 10 0.9082 10 1.05554Z"
                                fill="currentColor"
                              ></path></svg
                            ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              viewBox="0 0 10 11"
                              fill="none"
                              className="btn_icon _2"
                            >
                              <path
                                d="M10 1.05554V8.27754C10 8.42487 9.94147 8.56618 9.83729 8.67036C9.7331 8.77455 9.5918 8.83308 9.44446 8.83308C9.29712 8.83308 9.15582 8.77455 9.05163 8.67036C8.94745 8.56618 8.88892 8.42487 8.88892 8.27754V2.39647L0.948891 10.3372C0.844649 10.4414 0.703267 10.5 0.555847 10.5C0.408427 10.5 0.267045 10.4414 0.162804 10.3372C0.0585623 10.233 0 10.0916 0 9.94415C0 9.79673 0.0585623 9.65535 0.162804 9.55111L8.10353 1.61108L2.22246 1.61108C2.07512 1.61108 1.93382 1.55255 1.82964 1.44836C1.72545 1.34418 1.66692 1.20288 1.66692 1.05554C1.66692 0.9082 1.72545 0.766897 1.82964 0.662714C1.93382 0.55853 2.07512 0.5 2.22246 0.5L9.44446 0.5C9.5918 0.5 9.7331 0.55853 9.83729 0.662714C9.94147 0.766897 10 0.9082 10 1.05554Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </div></div
                    ></a>
                  </div>
                  <div
                    yungle-slider="slide"
                    role="listitem"
                    className="swiper-slide is-slider-main w-dyn-item"
                  >
                    <a
                      data-w-id="7ce28723-bdbf-cc95-00da-b2b3ce8ad121"
                      href="https://bdtmsd.com/"
                      target="_blank"
                      className="projects_slider-card w-inline-block"
                      ><img
                        src="https://cdn.prod.website-files.com/67f0127fd6d2dea189808285/6929fcc759686b62243210a5_bdtmsd%20bg%20img.png"
                        loading="lazy"
                        style={{ backgroundColor: "#1e1e3e" }}
                        alt="BDT&amp;MSD"
                        sizes="100vw"
                        srcSet="
                          https://cdn.prod.website-files.com/67f0127fd6d2dea189808285/6929fcc759686b62243210a5_bdtmsd%20bg%20img-p-500.png 500w,
                          https://cdn.prod.website-files.com/67f0127fd6d2dea189808285/6929fcc759686b62243210a5_bdtmsd%20bg%20img.png       790w
                        "
                        className="projects_slider-card-img" />
                      <div className="projects_slider-card-texts">
                        <div className="u-color-muted u-mb-2">BDT&amp;MSD</div>
                        <h3 className="u-text-style-h5">
                          Webflow development in colab with Red Antler
                        </h3>
                        <div className="btn_link">
                          <div>See live website</div>
                          <div className="btn_icon-wpr is-small">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              viewBox="0 0 10 11"
                              fill="none"
                              className="btn_icon _1"
                            >
                              <path
                                d="M10 1.05554V8.27754C10 8.42487 9.94147 8.56618 9.83729 8.67036C9.7331 8.77455 9.5918 8.83308 9.44446 8.83308C9.29712 8.83308 9.15582 8.77455 9.05163 8.67036C8.94745 8.56618 8.88892 8.42487 8.88892 8.27754V2.39647L0.948891 10.3372C0.844649 10.4414 0.703267 10.5 0.555847 10.5C0.408427 10.5 0.267045 10.4414 0.162804 10.3372C0.0585623 10.233 0 10.0916 0 9.94415C0 9.79673 0.0585623 9.65535 0.162804 9.55111L8.10353 1.61108L2.22246 1.61108C2.07512 1.61108 1.93382 1.55255 1.82964 1.44836C1.72545 1.34418 1.66692 1.20288 1.66692 1.05554C1.66692 0.9082 1.72545 0.766897 1.82964 0.662714C1.93382 0.55853 2.07512 0.5 2.22246 0.5L9.44446 0.5C9.5918 0.5 9.7331 0.55853 9.83729 0.662714C9.94147 0.766897 10 0.9082 10 1.05554Z"
                                fill="currentColor"
                              ></path></svg
                            ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              viewBox="0 0 10 11"
                              fill="none"
                              className="btn_icon _2"
                            >
                              <path
                                d="M10 1.05554V8.27754C10 8.42487 9.94147 8.56618 9.83729 8.67036C9.7331 8.77455 9.5918 8.83308 9.44446 8.83308C9.29712 8.83308 9.15582 8.77455 9.05163 8.67036C8.94745 8.56618 8.88892 8.42487 8.88892 8.27754V2.39647L0.948891 10.3372C0.844649 10.4414 0.703267 10.5 0.555847 10.5C0.408427 10.5 0.267045 10.4414 0.162804 10.3372C0.0585623 10.233 0 10.0916 0 9.94415C0 9.79673 0.0585623 9.65535 0.162804 9.55111L8.10353 1.61108L2.22246 1.61108C2.07512 1.61108 1.93382 1.55255 1.82964 1.44836C1.72545 1.34418 1.66692 1.20288 1.66692 1.05554C1.66692 0.9082 1.72545 0.766897 1.82964 0.662714C1.93382 0.55853 2.07512 0.5 2.22246 0.5L9.44446 0.5C9.5918 0.5 9.7331 0.55853 9.83729 0.662714C9.94147 0.766897 10 0.9082 10 1.05554Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </div></div
                    ></a>
                  </div>
                  <div
                    yungle-slider="slide"
                    role="listitem"
                    className="swiper-slide is-slider-main w-dyn-item"
                  >
                    <a
                      data-w-id="7ce28723-bdbf-cc95-00da-b2b3ce8ad121"
                      href="https://toroto.com"
                      target="_blank"
                      className="projects_slider-card w-inline-block"
                      ><img
                        src="https://cdn.prod.website-files.com/67f0127fd6d2dea189808285/68e0617b1e4bf47531a0d6f5_toroto%20bg%20img.png"
                        loading="lazy"
                        style={{ backgroundColor: "hsla(212.2826086956522, 100%, 36.08%, 1)" }}
                        alt="Toroto"
                        sizes="100vw"
                        srcSet="
                          https://cdn.prod.website-files.com/67f0127fd6d2dea189808285/68e0617b1e4bf47531a0d6f5_toroto%20bg%20img-p-500.png 500w,
                          https://cdn.prod.website-files.com/67f0127fd6d2dea189808285/68e0617b1e4bf47531a0d6f5_toroto%20bg%20img.png       592w
                        "
                        className="projects_slider-card-img" />
                      <div className="projects_slider-card-texts">
                        <div className="u-color-muted u-mb-2">Toroto</div>
                        <h3 className="u-text-style-h5">
                          Redesign &amp; Wordpress to Webflow migration
                        </h3>
                        <div className="btn_link">
                          <div>See live website</div>
                          <div className="btn_icon-wpr is-small">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              viewBox="0 0 10 11"
                              fill="none"
                              className="btn_icon _1"
                            >
                              <path
                                d="M10 1.05554V8.27754C10 8.42487 9.94147 8.56618 9.83729 8.67036C9.7331 8.77455 9.5918 8.83308 9.44446 8.83308C9.29712 8.83308 9.15582 8.77455 9.05163 8.67036C8.94745 8.56618 8.88892 8.42487 8.88892 8.27754V2.39647L0.948891 10.3372C0.844649 10.4414 0.703267 10.5 0.555847 10.5C0.408427 10.5 0.267045 10.4414 0.162804 10.3372C0.0585623 10.233 0 10.0916 0 9.94415C0 9.79673 0.0585623 9.65535 0.162804 9.55111L8.10353 1.61108L2.22246 1.61108C2.07512 1.61108 1.93382 1.55255 1.82964 1.44836C1.72545 1.34418 1.66692 1.20288 1.66692 1.05554C1.66692 0.9082 1.72545 0.766897 1.82964 0.662714C1.93382 0.55853 2.07512 0.5 2.22246 0.5L9.44446 0.5C9.5918 0.5 9.7331 0.55853 9.83729 0.662714C9.94147 0.766897 10 0.9082 10 1.05554Z"
                                fill="currentColor"
                              ></path></svg
                            ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              viewBox="0 0 10 11"
                              fill="none"
                              className="btn_icon _2"
                            >
                              <path
                                d="M10 1.05554V8.27754C10 8.42487 9.94147 8.56618 9.83729 8.67036C9.7331 8.77455 9.5918 8.83308 9.44446 8.83308C9.29712 8.83308 9.15582 8.77455 9.05163 8.67036C8.94745 8.56618 8.88892 8.42487 8.88892 8.27754V2.39647L0.948891 10.3372C0.844649 10.4414 0.703267 10.5 0.555847 10.5C0.408427 10.5 0.267045 10.4414 0.162804 10.3372C0.0585623 10.233 0 10.0916 0 9.94415C0 9.79673 0.0585623 9.65535 0.162804 9.55111L8.10353 1.61108L2.22246 1.61108C2.07512 1.61108 1.93382 1.55255 1.82964 1.44836C1.72545 1.34418 1.66692 1.20288 1.66692 1.05554C1.66692 0.9082 1.72545 0.766897 1.82964 0.662714C1.93382 0.55853 2.07512 0.5 2.22246 0.5L9.44446 0.5C9.5918 0.5 9.7331 0.55853 9.83729 0.662714C9.94147 0.766897 10 0.9082 10 1.05554Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </div></div
                    ></a>
                  </div>
                  <div
                    yungle-slider="slide"
                    role="listitem"
                    className="swiper-slide is-slider-main w-dyn-item"
                  >
                    <a
                      data-w-id="7ce28723-bdbf-cc95-00da-b2b3ce8ad121"
                      href="http://influur.com"
                      target="_blank"
                      className="projects_slider-card w-inline-block"
                      ><img
                        src="https://cdn.prod.website-files.com/67f0127fd6d2dea189808285/682c4d3cdee5833c7206da39_influur%20bg%20img.png"
                        loading="lazy"
                        style={{ backgroundColor: "#ed652b" }}
                        alt="Influur"
                        sizes="100vw"
                        srcSet="
                          https://cdn.prod.website-files.com/67f0127fd6d2dea189808285/682c4d3cdee5833c7206da39_influur%20bg%20img-p-500.png 500w,
                          https://cdn.prod.website-files.com/67f0127fd6d2dea189808285/682c4d3cdee5833c7206da39_influur%20bg%20img.png       790w
                        "
                        className="projects_slider-card-img" />
                      <div className="projects_slider-card-texts">
                        <div className="u-color-muted u-mb-2">Influur</div>
                        <h3 className="u-text-style-h5">
                          Visual identity, design and Webflow dev
                        </h3>
                        <div className="btn_link">
                          <div>See live website</div>
                          <div className="btn_icon-wpr is-small">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              viewBox="0 0 10 11"
                              fill="none"
                              className="btn_icon _1"
                            >
                              <path
                                d="M10 1.05554V8.27754C10 8.42487 9.94147 8.56618 9.83729 8.67036C9.7331 8.77455 9.5918 8.83308 9.44446 8.83308C9.29712 8.83308 9.15582 8.77455 9.05163 8.67036C8.94745 8.56618 8.88892 8.42487 8.88892 8.27754V2.39647L0.948891 10.3372C0.844649 10.4414 0.703267 10.5 0.555847 10.5C0.408427 10.5 0.267045 10.4414 0.162804 10.3372C0.0585623 10.233 0 10.0916 0 9.94415C0 9.79673 0.0585623 9.65535 0.162804 9.55111L8.10353 1.61108L2.22246 1.61108C2.07512 1.61108 1.93382 1.55255 1.82964 1.44836C1.72545 1.34418 1.66692 1.20288 1.66692 1.05554C1.66692 0.9082 1.72545 0.766897 1.82964 0.662714C1.93382 0.55853 2.07512 0.5 2.22246 0.5L9.44446 0.5C9.5918 0.5 9.7331 0.55853 9.83729 0.662714C9.94147 0.766897 10 0.9082 10 1.05554Z"
                                fill="currentColor"
                              ></path></svg
                            ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              viewBox="0 0 10 11"
                              fill="none"
                              className="btn_icon _2"
                            >
                              <path
                                d="M10 1.05554V8.27754C10 8.42487 9.94147 8.56618 9.83729 8.67036C9.7331 8.77455 9.5918 8.83308 9.44446 8.83308C9.29712 8.83308 9.15582 8.77455 9.05163 8.67036C8.94745 8.56618 8.88892 8.42487 8.88892 8.27754V2.39647L0.948891 10.3372C0.844649 10.4414 0.703267 10.5 0.555847 10.5C0.408427 10.5 0.267045 10.4414 0.162804 10.3372C0.0585623 10.233 0 10.0916 0 9.94415C0 9.79673 0.0585623 9.65535 0.162804 9.55111L8.10353 1.61108L2.22246 1.61108C2.07512 1.61108 1.93382 1.55255 1.82964 1.44836C1.72545 1.34418 1.66692 1.20288 1.66692 1.05554C1.66692 0.9082 1.72545 0.766897 1.82964 0.662714C1.93382 0.55853 2.07512 0.5 2.22246 0.5L9.44446 0.5C9.5918 0.5 9.7331 0.55853 9.83729 0.662714C9.94147 0.766897 10 0.9082 10 1.05554Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </div></div
                    ></a>
                  </div>
                  <div
                    yungle-slider="slide"
                    role="listitem"
                    className="swiper-slide is-slider-main w-dyn-item"
                  >
                    <a
                      data-w-id="7ce28723-bdbf-cc95-00da-b2b3ce8ad121"
                      href="https://obviously.nyc/"
                      target="_blank"
                      className="projects_slider-card w-inline-block"
                      ><img
                        src="https://cdn.prod.website-files.com/67f0127fd6d2dea189808285/685183beb33bafa25781101a_obviously%20nyc%20bg%20img.png"
                        loading="lazy"
                        style={{ backgroundColor: "#cdffd6" }}
                        alt="Obviously NYC"
                        sizes="100vw"
                        srcSet="
                          https://cdn.prod.website-files.com/67f0127fd6d2dea189808285/685183beb33bafa25781101a_obviously%20nyc%20bg%20img-p-500.png 500w,
                          https://cdn.prod.website-files.com/67f0127fd6d2dea189808285/685183beb33bafa25781101a_obviously%20nyc%20bg%20img.png       592w
                        "
                        className="projects_slider-card-img" />
                      <div className="projects_slider-card-texts">
                        <div className="u-color-muted u-mb-2">Obviously NYC</div>
                        <h3 className="u-text-style-h5">
                          Webflow development in colab with Red Antler
                        </h3>
                        <div className="btn_link">
                          <div>See live website</div>
                          <div className="btn_icon-wpr is-small">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              viewBox="0 0 10 11"
                              fill="none"
                              className="btn_icon _1"
                            >
                              <path
                                d="M10 1.05554V8.27754C10 8.42487 9.94147 8.56618 9.83729 8.67036C9.7331 8.77455 9.5918 8.83308 9.44446 8.83308C9.29712 8.83308 9.15582 8.77455 9.05163 8.67036C8.94745 8.56618 8.88892 8.42487 8.88892 8.27754V2.39647L0.948891 10.3372C0.844649 10.4414 0.703267 10.5 0.555847 10.5C0.408427 10.5 0.267045 10.4414 0.162804 10.3372C0.0585623 10.233 0 10.0916 0 9.94415C0 9.79673 0.0585623 9.65535 0.162804 9.55111L8.10353 1.61108L2.22246 1.61108C2.07512 1.61108 1.93382 1.55255 1.82964 1.44836C1.72545 1.34418 1.66692 1.20288 1.66692 1.05554C1.66692 0.9082 1.72545 0.766897 1.82964 0.662714C1.93382 0.55853 2.07512 0.5 2.22246 0.5L9.44446 0.5C9.5918 0.5 9.7331 0.55853 9.83729 0.662714C9.94147 0.766897 10 0.9082 10 1.05554Z"
                                fill="currentColor"
                              ></path></svg
                            ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              viewBox="0 0 10 11"
                              fill="none"
                              className="btn_icon _2"
                            >
                              <path
                                d="M10 1.05554V8.27754C10 8.42487 9.94147 8.56618 9.83729 8.67036C9.7331 8.77455 9.5918 8.83308 9.44446 8.83308C9.29712 8.83308 9.15582 8.77455 9.05163 8.67036C8.94745 8.56618 8.88892 8.42487 8.88892 8.27754V2.39647L0.948891 10.3372C0.844649 10.4414 0.703267 10.5 0.555847 10.5C0.408427 10.5 0.267045 10.4414 0.162804 10.3372C0.0585623 10.233 0 10.0916 0 9.94415C0 9.79673 0.0585623 9.65535 0.162804 9.55111L8.10353 1.61108L2.22246 1.61108C2.07512 1.61108 1.93382 1.55255 1.82964 1.44836C1.72545 1.34418 1.66692 1.20288 1.66692 1.05554C1.66692 0.9082 1.72545 0.766897 1.82964 0.662714C1.93382 0.55853 2.07512 0.5 2.22246 0.5L9.44446 0.5C9.5918 0.5 9.7331 0.55853 9.83729 0.662714C9.94147 0.766897 10 0.9082 10 1.05554Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </div></div
                    ></a>
                  </div>
                  <div
                    yungle-slider="slide"
                    role="listitem"
                    className="swiper-slide is-slider-main w-dyn-item"
                  >
                    <a
                      data-w-id="7ce28723-bdbf-cc95-00da-b2b3ce8ad121"
                      href="https://marketingconmelissa.com"
                      target="_blank"
                      className="projects_slider-card w-inline-block"
                      ><img
                        src="https://cdn.prod.website-files.com/67f0127fd6d2dea189808285/688e2fec03efd2badab31168_Marketing%20con%20Melissa%20bg%20img.png"
                        loading="lazy"
                        style={{ backgroundColor: "#f3edf7" }}
                        alt="Marketing con Melissa"
                        sizes="100vw"
                        srcSet="
                          https://cdn.prod.website-files.com/67f0127fd6d2dea189808285/688e2fec03efd2badab31168_Marketing%20con%20Melissa%20bg%20img-p-500.png 500w,
                          https://cdn.prod.website-files.com/67f0127fd6d2dea189808285/688e2fec03efd2badab31168_Marketing%20con%20Melissa%20bg%20img.png       790w
                        "
                        className="projects_slider-card-img" />
                      <div className="projects_slider-card-texts">
                        <div className="u-color-muted u-mb-2">
                          Marketing con Melissa
                        </div>
                        <h3 className="u-text-style-h5">
                          Visual identity, design and Webflow dev
                        </h3>
                        <div className="btn_link">
                          <div>See live website</div>
                          <div className="btn_icon-wpr is-small">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              viewBox="0 0 10 11"
                              fill="none"
                              className="btn_icon _1"
                            >
                              <path
                                d="M10 1.05554V8.27754C10 8.42487 9.94147 8.56618 9.83729 8.67036C9.7331 8.77455 9.5918 8.83308 9.44446 8.83308C9.29712 8.83308 9.15582 8.77455 9.05163 8.67036C8.94745 8.56618 8.88892 8.42487 8.88892 8.27754V2.39647L0.948891 10.3372C0.844649 10.4414 0.703267 10.5 0.555847 10.5C0.408427 10.5 0.267045 10.4414 0.162804 10.3372C0.0585623 10.233 0 10.0916 0 9.94415C0 9.79673 0.0585623 9.65535 0.162804 9.55111L8.10353 1.61108L2.22246 1.61108C2.07512 1.61108 1.93382 1.55255 1.82964 1.44836C1.72545 1.34418 1.66692 1.20288 1.66692 1.05554C1.66692 0.9082 1.72545 0.766897 1.82964 0.662714C1.93382 0.55853 2.07512 0.5 2.22246 0.5L9.44446 0.5C9.5918 0.5 9.7331 0.55853 9.83729 0.662714C9.94147 0.766897 10 0.9082 10 1.05554Z"
                                fill="currentColor"
                              ></path></svg
                            ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              viewBox="0 0 10 11"
                              fill="none"
                              className="btn_icon _2"
                            >
                              <path
                                d="M10 1.05554V8.27754C10 8.42487 9.94147 8.56618 9.83729 8.67036C9.7331 8.77455 9.5918 8.83308 9.44446 8.83308C9.29712 8.83308 9.15582 8.77455 9.05163 8.67036C8.94745 8.56618 8.88892 8.42487 8.88892 8.27754V2.39647L0.948891 10.3372C0.844649 10.4414 0.703267 10.5 0.555847 10.5C0.408427 10.5 0.267045 10.4414 0.162804 10.3372C0.0585623 10.233 0 10.0916 0 9.94415C0 9.79673 0.0585623 9.65535 0.162804 9.55111L8.10353 1.61108L2.22246 1.61108C2.07512 1.61108 1.93382 1.55255 1.82964 1.44836C1.72545 1.34418 1.66692 1.20288 1.66692 1.05554C1.66692 0.9082 1.72545 0.766897 1.82964 0.662714C1.93382 0.55853 2.07512 0.5 2.22246 0.5L9.44446 0.5C9.5918 0.5 9.7331 0.55853 9.83729 0.662714C9.94147 0.766897 10 0.9082 10 1.05554Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </div></div
                    ></a>
                  </div>
                  <div
                    yungle-slider="slide"
                    role="listitem"
                    className="swiper-slide is-slider-main w-dyn-item"
                  >
                    <a
                      data-w-id="7ce28723-bdbf-cc95-00da-b2b3ce8ad121"
                      href="https://www.habitatpartners.co/"
                      target="_blank"
                      className="projects_slider-card w-inline-block"
                      ><img
                        src="https://cdn.prod.website-files.com/67f0127fd6d2dea189808285/682c513d22e61e1323c7164f_habitat%20partners%20bg%20img.png"
                        loading="lazy"
                        style={{ backgroundColor: "#99d88a" }}
                        alt="Habitat Partners"
                        sizes="100vw"
                        srcSet="
                          https://cdn.prod.website-files.com/67f0127fd6d2dea189808285/682c513d22e61e1323c7164f_habitat%20partners%20bg%20img-p-500.png 500w,
                          https://cdn.prod.website-files.com/67f0127fd6d2dea189808285/682c513d22e61e1323c7164f_habitat%20partners%20bg%20img.png       790w
                        "
                        className="projects_slider-card-img" />
                      <div className="projects_slider-card-texts">
                        <div className="u-color-muted u-mb-2">Habitat Partners</div>
                        <h3 className="u-text-style-h5">
                          Webflow development in colab with Red Antler
                        </h3>
                        <div className="btn_link">
                          <div>See live website</div>
                          <div className="btn_icon-wpr is-small">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              viewBox="0 0 10 11"
                              fill="none"
                              className="btn_icon _1"
                            >
                              <path
                                d="M10 1.05554V8.27754C10 8.42487 9.94147 8.56618 9.83729 8.67036C9.7331 8.77455 9.5918 8.83308 9.44446 8.83308C9.29712 8.83308 9.15582 8.77455 9.05163 8.67036C8.94745 8.56618 8.88892 8.42487 8.88892 8.27754V2.39647L0.948891 10.3372C0.844649 10.4414 0.703267 10.5 0.555847 10.5C0.408427 10.5 0.267045 10.4414 0.162804 10.3372C0.0585623 10.233 0 10.0916 0 9.94415C0 9.79673 0.0585623 9.65535 0.162804 9.55111L8.10353 1.61108L2.22246 1.61108C2.07512 1.61108 1.93382 1.55255 1.82964 1.44836C1.72545 1.34418 1.66692 1.20288 1.66692 1.05554C1.66692 0.9082 1.72545 0.766897 1.82964 0.662714C1.93382 0.55853 2.07512 0.5 2.22246 0.5L9.44446 0.5C9.5918 0.5 9.7331 0.55853 9.83729 0.662714C9.94147 0.766897 10 0.9082 10 1.05554Z"
                                fill="currentColor"
                              ></path></svg
                            ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              viewBox="0 0 10 11"
                              fill="none"
                              className="btn_icon _2"
                            >
                              <path
                                d="M10 1.05554V8.27754C10 8.42487 9.94147 8.56618 9.83729 8.67036C9.7331 8.77455 9.5918 8.83308 9.44446 8.83308C9.29712 8.83308 9.15582 8.77455 9.05163 8.67036C8.94745 8.56618 8.88892 8.42487 8.88892 8.27754V2.39647L0.948891 10.3372C0.844649 10.4414 0.703267 10.5 0.555847 10.5C0.408427 10.5 0.267045 10.4414 0.162804 10.3372C0.0585623 10.233 0 10.0916 0 9.94415C0 9.79673 0.0585623 9.65535 0.162804 9.55111L8.10353 1.61108L2.22246 1.61108C2.07512 1.61108 1.93382 1.55255 1.82964 1.44836C1.72545 1.34418 1.66692 1.20288 1.66692 1.05554C1.66692 0.9082 1.72545 0.766897 1.82964 0.662714C1.93382 0.55853 2.07512 0.5 2.22246 0.5L9.44446 0.5C9.5918 0.5 9.7331 0.55853 9.83729 0.662714C9.94147 0.766897 10 0.9082 10 1.05554Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </div></div
                    ></a>
                  </div>
                  <div
                    yungle-slider="slide"
                    role="listitem"
                    className="swiper-slide is-slider-main w-dyn-item"
                  >
                    <a
                      data-w-id="7ce28723-bdbf-cc95-00da-b2b3ce8ad121"
                      href="https://www.bungalow5.tv/"
                      target="_blank"
                      className="projects_slider-card w-inline-block"
                      ><img
                        src="https://cdn.prod.website-files.com/67f0127fd6d2dea189808285/684f44bc477d0e98318fe628_bungalow%20bg%20img.png"
                        loading="lazy"
                        style={{ backgroundColor: "#fa9355" }}
                        alt="Bungalow 5"
                        sizes="100vw"
                        srcSet="
                          https://cdn.prod.website-files.com/67f0127fd6d2dea189808285/684f44bc477d0e98318fe628_bungalow%20bg%20img-p-500.png 500w,
                          https://cdn.prod.website-files.com/67f0127fd6d2dea189808285/684f44bc477d0e98318fe628_bungalow%20bg%20img.png       790w
                        "
                        className="projects_slider-card-img" />
                      <div className="projects_slider-card-texts">
                        <div className="u-color-muted u-mb-2">Bungalow 5</div>
                        <h3 className="u-text-style-h5">
                          Visual identity, design and Webflow dev
                        </h3>
                        <div className="btn_link">
                          <div>See live website</div>
                          <div className="btn_icon-wpr is-small">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              viewBox="0 0 10 11"
                              fill="none"
                              className="btn_icon _1"
                            >
                              <path
                                d="M10 1.05554V8.27754C10 8.42487 9.94147 8.56618 9.83729 8.67036C9.7331 8.77455 9.5918 8.83308 9.44446 8.83308C9.29712 8.83308 9.15582 8.77455 9.05163 8.67036C8.94745 8.56618 8.88892 8.42487 8.88892 8.27754V2.39647L0.948891 10.3372C0.844649 10.4414 0.703267 10.5 0.555847 10.5C0.408427 10.5 0.267045 10.4414 0.162804 10.3372C0.0585623 10.233 0 10.0916 0 9.94415C0 9.79673 0.0585623 9.65535 0.162804 9.55111L8.10353 1.61108L2.22246 1.61108C2.07512 1.61108 1.93382 1.55255 1.82964 1.44836C1.72545 1.34418 1.66692 1.20288 1.66692 1.05554C1.66692 0.9082 1.72545 0.766897 1.82964 0.662714C1.93382 0.55853 2.07512 0.5 2.22246 0.5L9.44446 0.5C9.5918 0.5 9.7331 0.55853 9.83729 0.662714C9.94147 0.766897 10 0.9082 10 1.05554Z"
                                fill="currentColor"
                              ></path></svg
                            ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              viewBox="0 0 10 11"
                              fill="none"
                              className="btn_icon _2"
                            >
                              <path
                                d="M10 1.05554V8.27754C10 8.42487 9.94147 8.56618 9.83729 8.67036C9.7331 8.77455 9.5918 8.83308 9.44446 8.83308C9.29712 8.83308 9.15582 8.77455 9.05163 8.67036C8.94745 8.56618 8.88892 8.42487 8.88892 8.27754V2.39647L0.948891 10.3372C0.844649 10.4414 0.703267 10.5 0.555847 10.5C0.408427 10.5 0.267045 10.4414 0.162804 10.3372C0.0585623 10.233 0 10.0916 0 9.94415C0 9.79673 0.0585623 9.65535 0.162804 9.55111L8.10353 1.61108L2.22246 1.61108C2.07512 1.61108 1.93382 1.55255 1.82964 1.44836C1.72545 1.34418 1.66692 1.20288 1.66692 1.05554C1.66692 0.9082 1.72545 0.766897 1.82964 0.662714C1.93382 0.55853 2.07512 0.5 2.22246 0.5L9.44446 0.5C9.5918 0.5 9.7331 0.55853 9.83729 0.662714C9.94147 0.766897 10 0.9082 10 1.05554Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </div></div
                    ></a>
                  </div>
                  <div
                    yungle-slider="slide"
                    role="listitem"
                    className="swiper-slide is-slider-main w-dyn-item"
                  >
                    <a
                      data-w-id="7ce28723-bdbf-cc95-00da-b2b3ce8ad121"
                      href="http://dedupe.ly"
                      target="_blank"
                      className="projects_slider-card w-inline-block"
                      ><img
                        src="https://cdn.prod.website-files.com/67f0127fd6d2dea189808285/682c50ca18ef09dcee24b1e3_dedupely%20bg%20img.png"
                        loading="lazy"
                        style={{ backgroundColor: "hsla(197.9381443298969, 69.98%, 53.37%, 1)" }}
                        alt="Dedupely"
                        sizes="100vw"
                        srcSet="
                          https://cdn.prod.website-files.com/67f0127fd6d2dea189808285/682c50ca18ef09dcee24b1e3_dedupely%20bg%20img-p-500.png 500w,
                          https://cdn.prod.website-files.com/67f0127fd6d2dea189808285/682c50ca18ef09dcee24b1e3_dedupely%20bg%20img.png       790w
                        "
                        className="projects_slider-card-img" />
                      <div className="projects_slider-card-texts">
                        <div className="u-color-muted u-mb-2">Dedupely</div>
                        <h3 className="u-text-style-h5">
                          Re-design and Webflow dev
                        </h3>
                        <div className="btn_link">
                          <div>See live website</div>
                          <div className="btn_icon-wpr is-small">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              viewBox="0 0 10 11"
                              fill="none"
                              className="btn_icon _1"
                            >
                              <path
                                d="M10 1.05554V8.27754C10 8.42487 9.94147 8.56618 9.83729 8.67036C9.7331 8.77455 9.5918 8.83308 9.44446 8.83308C9.29712 8.83308 9.15582 8.77455 9.05163 8.67036C8.94745 8.56618 8.88892 8.42487 8.88892 8.27754V2.39647L0.948891 10.3372C0.844649 10.4414 0.703267 10.5 0.555847 10.5C0.408427 10.5 0.267045 10.4414 0.162804 10.3372C0.0585623 10.233 0 10.0916 0 9.94415C0 9.79673 0.0585623 9.65535 0.162804 9.55111L8.10353 1.61108L2.22246 1.61108C2.07512 1.61108 1.93382 1.55255 1.82964 1.44836C1.72545 1.34418 1.66692 1.20288 1.66692 1.05554C1.66692 0.9082 1.72545 0.766897 1.82964 0.662714C1.93382 0.55853 2.07512 0.5 2.22246 0.5L9.44446 0.5C9.5918 0.5 9.7331 0.55853 9.83729 0.662714C9.94147 0.766897 10 0.9082 10 1.05554Z"
                                fill="currentColor"
                              ></path></svg
                            ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              viewBox="0 0 10 11"
                              fill="none"
                              className="btn_icon _2"
                            >
                              <path
                                d="M10 1.05554V8.27754C10 8.42487 9.94147 8.56618 9.83729 8.67036C9.7331 8.77455 9.5918 8.83308 9.44446 8.83308C9.29712 8.83308 9.15582 8.77455 9.05163 8.67036C8.94745 8.56618 8.88892 8.42487 8.88892 8.27754V2.39647L0.948891 10.3372C0.844649 10.4414 0.703267 10.5 0.555847 10.5C0.408427 10.5 0.267045 10.4414 0.162804 10.3372C0.0585623 10.233 0 10.0916 0 9.94415C0 9.79673 0.0585623 9.65535 0.162804 9.55111L8.10353 1.61108L2.22246 1.61108C2.07512 1.61108 1.93382 1.55255 1.82964 1.44836C1.72545 1.34418 1.66692 1.20288 1.66692 1.05554C1.66692 0.9082 1.72545 0.766897 1.82964 0.662714C1.93382 0.55853 2.07512 0.5 2.22246 0.5L9.44446 0.5C9.5918 0.5 9.7331 0.55853 9.83729 0.662714C9.94147 0.766897 10 0.9082 10 1.05554Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </div></div
                    ></a>
                  </div>
                  <div
                    yungle-slider="slide"
                    role="listitem"
                    className="swiper-slide is-slider-main w-dyn-item"
                  >
                    <a
                      data-w-id="7ce28723-bdbf-cc95-00da-b2b3ce8ad121"
                      href="https://www.volantissemi.ai/"
                      target="_blank"
                      className="projects_slider-card w-inline-block"
                      ><img
                        src="https://cdn.prod.website-files.com/67f0127fd6d2dea189808285/6917ce4ace5f7c0fa872b646_Volantis%20bg%20img.png"
                        loading="lazy"
                        style={{ backgroundColor: "hsla(0, 0%, 100%, 1)" }}
                        alt="Volantis"
                        sizes="100vw"
                        srcSet="
                          https://cdn.prod.website-files.com/67f0127fd6d2dea189808285/6917ce4ace5f7c0fa872b646_Volantis%20bg%20img-p-500.png 500w,
                          https://cdn.prod.website-files.com/67f0127fd6d2dea189808285/6917ce4ace5f7c0fa872b646_Volantis%20bg%20img.png       790w
                        "
                        className="projects_slider-card-img" />
                      <div className="projects_slider-card-texts">
                        <div className="u-color-muted u-mb-2">Volantis</div>
                        <h3 className="u-text-style-h5">
                          Webflow development in colab with Red Antler
                        </h3>
                        <div className="btn_link">
                          <div>See live website</div>
                          <div className="btn_icon-wpr is-small">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              viewBox="0 0 10 11"
                              fill="none"
                              className="btn_icon _1"
                            >
                              <path
                                d="M10 1.05554V8.27754C10 8.42487 9.94147 8.56618 9.83729 8.67036C9.7331 8.77455 9.5918 8.83308 9.44446 8.83308C9.29712 8.83308 9.15582 8.77455 9.05163 8.67036C8.94745 8.56618 8.88892 8.42487 8.88892 8.27754V2.39647L0.948891 10.3372C0.844649 10.4414 0.703267 10.5 0.555847 10.5C0.408427 10.5 0.267045 10.4414 0.162804 10.3372C0.0585623 10.233 0 10.0916 0 9.94415C0 9.79673 0.0585623 9.65535 0.162804 9.55111L8.10353 1.61108L2.22246 1.61108C2.07512 1.61108 1.93382 1.55255 1.82964 1.44836C1.72545 1.34418 1.66692 1.20288 1.66692 1.05554C1.66692 0.9082 1.72545 0.766897 1.82964 0.662714C1.93382 0.55853 2.07512 0.5 2.22246 0.5L9.44446 0.5C9.5918 0.5 9.7331 0.55853 9.83729 0.662714C9.94147 0.766897 10 0.9082 10 1.05554Z"
                                fill="currentColor"
                              ></path></svg
                            ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              viewBox="0 0 10 11"
                              fill="none"
                              className="btn_icon _2"
                            >
                              <path
                                d="M10 1.05554V8.27754C10 8.42487 9.94147 8.56618 9.83729 8.67036C9.7331 8.77455 9.5918 8.83308 9.44446 8.83308C9.29712 8.83308 9.15582 8.77455 9.05163 8.67036C8.94745 8.56618 8.88892 8.42487 8.88892 8.27754V2.39647L0.948891 10.3372C0.844649 10.4414 0.703267 10.5 0.555847 10.5C0.408427 10.5 0.267045 10.4414 0.162804 10.3372C0.0585623 10.233 0 10.0916 0 9.94415C0 9.79673 0.0585623 9.65535 0.162804 9.55111L8.10353 1.61108L2.22246 1.61108C2.07512 1.61108 1.93382 1.55255 1.82964 1.44836C1.72545 1.34418 1.66692 1.20288 1.66692 1.05554C1.66692 0.9082 1.72545 0.766897 1.82964 0.662714C1.93382 0.55853 2.07512 0.5 2.22246 0.5L9.44446 0.5C9.5918 0.5 9.7331 0.55853 9.83729 0.662714C9.94147 0.766897 10 0.9082 10 1.05554Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </div></div
                    ></a>
                  </div>
                  <div
                    yungle-slider="slide"
                    role="listitem"
                    className="swiper-slide is-slider-main w-dyn-item"
                  >
                    <a
                      data-w-id="7ce28723-bdbf-cc95-00da-b2b3ce8ad121"
                      href="http://maena.mx"
                      target="_blank"
                      className="projects_slider-card w-inline-block"
                      ><img
                        src="https://cdn.prod.website-files.com/67f0127fd6d2dea189808285/682c51887bf4a41e790c21bc_maena%20bg%20img.png"
                        loading="lazy"
                        style={{ backgroundColor: "hsla(0, 0%, 0%, 1)" }}
                        alt="Maena"
                        sizes="100vw"
                        srcSet="
                          https://cdn.prod.website-files.com/67f0127fd6d2dea189808285/682c51887bf4a41e790c21bc_maena%20bg%20img-p-500.png 500w,
                          https://cdn.prod.website-files.com/67f0127fd6d2dea189808285/682c51887bf4a41e790c21bc_maena%20bg%20img.png       790w
                        "
                        className="projects_slider-card-img" />
                      <div className="projects_slider-card-texts">
                        <div className="u-color-muted u-mb-2">Maena</div>
                        <h3 className="u-text-style-h5">
                          Design and Webflow development
                        </h3>
                        <div className="btn_link">
                          <div>See live website</div>
                          <div className="btn_icon-wpr is-small">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              viewBox="0 0 10 11"
                              fill="none"
                              className="btn_icon _1"
                            >
                              <path
                                d="M10 1.05554V8.27754C10 8.42487 9.94147 8.56618 9.83729 8.67036C9.7331 8.77455 9.5918 8.83308 9.44446 8.83308C9.29712 8.83308 9.15582 8.77455 9.05163 8.67036C8.94745 8.56618 8.88892 8.42487 8.88892 8.27754V2.39647L0.948891 10.3372C0.844649 10.4414 0.703267 10.5 0.555847 10.5C0.408427 10.5 0.267045 10.4414 0.162804 10.3372C0.0585623 10.233 0 10.0916 0 9.94415C0 9.79673 0.0585623 9.65535 0.162804 9.55111L8.10353 1.61108L2.22246 1.61108C2.07512 1.61108 1.93382 1.55255 1.82964 1.44836C1.72545 1.34418 1.66692 1.20288 1.66692 1.05554C1.66692 0.9082 1.72545 0.766897 1.82964 0.662714C1.93382 0.55853 2.07512 0.5 2.22246 0.5L9.44446 0.5C9.5918 0.5 9.7331 0.55853 9.83729 0.662714C9.94147 0.766897 10 0.9082 10 1.05554Z"
                                fill="currentColor"
                              ></path></svg
                            ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              viewBox="0 0 10 11"
                              fill="none"
                              className="btn_icon _2"
                            >
                              <path
                                d="M10 1.05554V8.27754C10 8.42487 9.94147 8.56618 9.83729 8.67036C9.7331 8.77455 9.5918 8.83308 9.44446 8.83308C9.29712 8.83308 9.15582 8.77455 9.05163 8.67036C8.94745 8.56618 8.88892 8.42487 8.88892 8.27754V2.39647L0.948891 10.3372C0.844649 10.4414 0.703267 10.5 0.555847 10.5C0.408427 10.5 0.267045 10.4414 0.162804 10.3372C0.0585623 10.233 0 10.0916 0 9.94415C0 9.79673 0.0585623 9.65535 0.162804 9.55111L8.10353 1.61108L2.22246 1.61108C2.07512 1.61108 1.93382 1.55255 1.82964 1.44836C1.72545 1.34418 1.66692 1.20288 1.66692 1.05554C1.66692 0.9082 1.72545 0.766897 1.82964 0.662714C1.93382 0.55853 2.07512 0.5 2.22246 0.5L9.44446 0.5C9.5918 0.5 9.7331 0.55853 9.83729 0.662714C9.94147 0.766897 10 0.9082 10 1.05554Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </div></div
                    ></a>
                  </div>
                  <div
                    yungle-slider="slide"
                    role="listitem"
                    className="swiper-slide is-slider-main w-dyn-item"
                  >
                    <a
                      data-w-id="7ce28723-bdbf-cc95-00da-b2b3ce8ad121"
                      href="https://fifteenth.com/"
                      target="_blank"
                      className="projects_slider-card w-inline-block"
                      ><img
                        src="https://cdn.prod.website-files.com/67f0127fd6d2dea189808285/682c4e45ae7a25cf0989d360_fifteenth%20bg%20img.png"
                        loading="lazy"
                        style={{ backgroundColor: "#80e048" }}
                        alt="Fifteenth"
                        sizes="100vw"
                        srcSet="
                          https://cdn.prod.website-files.com/67f0127fd6d2dea189808285/682c4e45ae7a25cf0989d360_fifteenth%20bg%20img-p-500.png 500w,
                          https://cdn.prod.website-files.com/67f0127fd6d2dea189808285/682c4e45ae7a25cf0989d360_fifteenth%20bg%20img.png       790w
                        "
                        className="projects_slider-card-img" />
                      <div className="projects_slider-card-texts">
                        <div className="u-color-muted u-mb-2">Fifteenth</div>
                        <h3 className="u-text-style-h5">
                          Webflow development in colab with Red Antler
                        </h3>
                        <div className="btn_link">
                          <div>See live website</div>
                          <div className="btn_icon-wpr is-small">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              viewBox="0 0 10 11"
                              fill="none"
                              className="btn_icon _1"
                            >
                              <path
                                d="M10 1.05554V8.27754C10 8.42487 9.94147 8.56618 9.83729 8.67036C9.7331 8.77455 9.5918 8.83308 9.44446 8.83308C9.29712 8.83308 9.15582 8.77455 9.05163 8.67036C8.94745 8.56618 8.88892 8.42487 8.88892 8.27754V2.39647L0.948891 10.3372C0.844649 10.4414 0.703267 10.5 0.555847 10.5C0.408427 10.5 0.267045 10.4414 0.162804 10.3372C0.0585623 10.233 0 10.0916 0 9.94415C0 9.79673 0.0585623 9.65535 0.162804 9.55111L8.10353 1.61108L2.22246 1.61108C2.07512 1.61108 1.93382 1.55255 1.82964 1.44836C1.72545 1.34418 1.66692 1.20288 1.66692 1.05554C1.66692 0.9082 1.72545 0.766897 1.82964 0.662714C1.93382 0.55853 2.07512 0.5 2.22246 0.5L9.44446 0.5C9.5918 0.5 9.7331 0.55853 9.83729 0.662714C9.94147 0.766897 10 0.9082 10 1.05554Z"
                                fill="currentColor"
                              ></path></svg
                            ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              viewBox="0 0 10 11"
                              fill="none"
                              className="btn_icon _2"
                            >
                              <path
                                d="M10 1.05554V8.27754C10 8.42487 9.94147 8.56618 9.83729 8.67036C9.7331 8.77455 9.5918 8.83308 9.44446 8.83308C9.29712 8.83308 9.15582 8.77455 9.05163 8.67036C8.94745 8.56618 8.88892 8.42487 8.88892 8.27754V2.39647L0.948891 10.3372C0.844649 10.4414 0.703267 10.5 0.555847 10.5C0.408427 10.5 0.267045 10.4414 0.162804 10.3372C0.0585623 10.233 0 10.0916 0 9.94415C0 9.79673 0.0585623 9.65535 0.162804 9.55111L8.10353 1.61108L2.22246 1.61108C2.07512 1.61108 1.93382 1.55255 1.82964 1.44836C1.72545 1.34418 1.66692 1.20288 1.66692 1.05554C1.66692 0.9082 1.72545 0.766897 1.82964 0.662714C1.93382 0.55853 2.07512 0.5 2.22246 0.5L9.44446 0.5C9.5918 0.5 9.7331 0.55853 9.83729 0.662714C9.94147 0.766897 10 0.9082 10 1.05554Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </div></div
                    ></a>
                  </div>
                </div>
              </div>
              <div className="u-container-inside">
                <div className="projects_slider-arrows-wpr u-mb-8">
                  <div className="slider_arrows u-gap-1">
                    <a
                      yungle-slide="prev"
                      href="#"
                      className="slider-main_button swiper-prev w-inline-block"
                      ><div className="btn_icon-wpr">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          viewBox="0 0 25 24"
                          fill="none"
                          className="btn_icon is-inverted"
                        >
                          <path
                            d="M23.8334 12.6666L15.167 21.333C14.9901 21.5099 14.7503 21.6092 14.5003 21.6092C14.2503 21.6092 14.0105 21.5099 13.8337 21.333C13.6569 21.1562 13.5575 20.9164 13.5575 20.6664C13.5575 20.4164 13.6569 20.1766 13.8337 19.9998L20.8909 12.9425L1.83403 12.9433C1.58385 12.9433 1.34392 12.8439 1.16702 12.667C0.990112 12.4901 0.890729 12.2502 0.890729 12C0.890729 11.7498 0.990113 11.5099 1.16702 11.333C1.34392 11.1561 1.58385 11.0567 1.83403 11.0567L20.8909 11.0575L13.8337 4.00025C13.6569 3.82344 13.5575 3.58364 13.5575 3.3336C13.5575 3.08356 13.6569 2.84376 13.8337 2.66695C14.0105 2.49015 14.2503 2.39082 14.5003 2.39082C14.7503 2.39082 14.9901 2.49015 15.167 2.66695L23.8334 11.3334C24.0102 11.5102 24.1095 11.75 24.1095 12C24.1095 12.25 24.0102 12.4898 23.8334 12.6666Z"
                            fill="currentColor"
                          ></path>
                        </svg></div></a
                    ><a
                      yungle-slide="next"
                      href="#"
                      className="slider-main_button swiper-next w-inline-block"
                      ><div className="btn_icon-wpr">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          viewBox="0 0 25 24"
                          fill="none"
                          className="btn_icon"
                        >
                          <path
                            d="M23.8334 12.6666L15.167 21.333C14.9901 21.5099 14.7503 21.6092 14.5003 21.6092C14.2503 21.6092 14.0105 21.5099 13.8337 21.333C13.6569 21.1562 13.5575 20.9164 13.5575 20.6664C13.5575 20.4164 13.6569 20.1766 13.8337 19.9998L20.8909 12.9425L1.83403 12.9433C1.58385 12.9433 1.34392 12.8439 1.16702 12.667C0.990112 12.4901 0.890729 12.2502 0.890729 12C0.890729 11.7498 0.990113 11.5099 1.16702 11.333C1.34392 11.1561 1.58385 11.0567 1.83403 11.0567L20.8909 11.0575L13.8337 4.00025C13.6569 3.82344 13.5575 3.58364 13.5575 3.3336C13.5575 3.08356 13.6569 2.84376 13.8337 2.66695C14.0105 2.49015 14.2503 2.39082 14.5003 2.39082C14.7503 2.39082 14.9901 2.49015 15.167 2.66695L23.8334 11.3334C24.0102 11.5102 24.1095 11.75 24.1095 12C24.1095 12.25 24.0102 12.4898 23.8334 12.6666Z"
                            fill="currentColor"
                          ></path>
                        </svg></div
                    ></a>
                  </div>
                </div>
              </div>
              <div className="hide w-embed w-script">
                <script dangerouslySetInnerHTML={{ __html: `
                  var spaceBetween = 25;
                  yungle_slider();
                  function yungle_slider() {
                    // Create style sheet
                    createStyle();
                    sliders = document.querySelectorAll(
                      "[yungle-slider=slider]",
                    );
                    for (var i = 0; i < sliders.length; i++) {
                      // We get buttons and configure buttons
                      var next = sliders[i].parentNode.parentNode.querySelector(
                        "[yungle-slider=next]",
                      );
                      var prev = sliders[i].parentNode.parentNode.querySelector(
                        "[yungle-slider=prev]",
                      );
                      next.onclick = moveSliderNext;
                      prev.onclick = moveSliderPrev;

                      // We set max slides and current slides

                      sliders[i].setAttribute(
                        "max-slides",
                        sliders[i].childElementCount,
                      );
                      sliders[i].setAttribute("current-slide", 1);
                    }
                  }
                  function moveSliderNext(el) {
                    var targetSlider = el.target;
                    if (targetSlider.tagName == "svg") {
                      targetSlider = targetSlider.parentNode;
                    }

                    targetSlider =
                      targetSlider.parentNode.parentNode.parentNode.parentNode.querySelector(
                        "[yungle-slider=slider]",
                      );

                    slideSize =
                      targetSlider.querySelector("[yungle-slider=slide]")
                        .clientWidth - 10;
                    maxSlides = Number(targetSlider.getAttribute("max-slides"));
                    currentSlide = Number(
                      targetSlider.getAttribute("current-slide"),
                    );

                    if (currentSlide < maxSlides) {
                      var coords = (slideSize + spaceBetween) * currentSlide;
                      coords = coords * -1;
                      targetSlider.style.transform =
                        "translate3d(" + coords + "px,0,0)";
                      targetSlider.setAttribute(
                        "current-slide",
                        currentSlide + 1,
                      );
                    }
                  }
                  function moveSliderPrev(el) {
                    var targetSlider = el.target;
                    if (targetSlider.tagName == "svg") {
                      targetSlider = targetSlider.parentNode;
                    }

                    targetSlider =
                      targetSlider.parentNode.parentNode.parentNode.parentNode.querySelector(
                        "[yungle-slider=slider]",
                      );

                    slideSize =
                      targetSlider.querySelector("[yungle-slider=slide]")
                        .clientWidth - 10;
                    maxSlides = Number(targetSlider.getAttribute("max-slides"));
                    currentSlide = Number(
                      targetSlider.getAttribute("current-slide"),
                    );

                    if (currentSlide > 1) {
                      if (currentSlide <= 2) {
                        var coords = 0;
                      } else {
                        var coords =
                          (slideSize + spaceBetween) * (currentSlide - 2);
                        coords = coords * -1;
                      }

                      console.log(coords);
                      targetSlider.style.transform =
                        "translate3d(" + coords + "px,0,0)";
                      targetSlider.setAttribute(
                        "current-slide",
                        currentSlide - 1,
                      );
                    }
                  }
                  function createStyle() {
                    var style = document.createElement("style");
                    var css = \`[yungle-slider=slider]{
    transition: all 1s;
   }\`;
                    if (style.styleSheet) {
                      style.styleSheet.cssText = css;
                    } else {
                      style.appendChild(document.createTextNode(css));
                    }

                    document.getElementsByTagName("head")[0].appendChild(style);
                  }
                ` }} />
              </div>
            </div>
            <div className="u-container-inside">
              <div className="u-grid-autofit testimonial_grid">
                <div className="testimonial_dotted-card no-border">
                  <div>
                    <p className="u-text-style-h4 u-text-style-h5">
                      &quot;Our go-to team for web design &amp; seamless
                      automation.&quot;
                    </p>
                  </div>
                  <div className="testimonial_info is-vertical">
                    <img
                      src="https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/67f401de17cebdd1ff1a16fc_rebeca%20kaplan.webp"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="
                        https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/67f401de17cebdd1ff1a16fc_rebeca%20kaplan-p-500.webp   500w,
                        https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/67f401de17cebdd1ff1a16fc_rebeca%20kaplan-p-800.webp   800w,
                        https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/67f401de17cebdd1ff1a16fc_rebeca%20kaplan-p-1080.webp 1080w,
                        https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/67f401de17cebdd1ff1a16fc_rebeca%20kaplan.webp        1536w
                      "
                      className="testimonial_img"
                    />
                    <div className="testimonial_name">
                      <div>Rebeca Kaplan</div>
                      <div className="u-color-muted">
                        Head of marketing, Curated
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial_dotted-card no-border border-left">
                  <div>
                    <p className="u-text-style-h4 u-text-style-h5 u-max-width-30ch">
                      &quot;Yungle nailed our vision—great design &amp;
                      execution!&quot;
                    </p>
                  </div>
                  <div className="testimonial_info is-vertical">
                    <img
                      src="https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/67f401f004c94e3b4eee7123_Alfredo%20Guida.webp"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="
                        https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/67f401f004c94e3b4eee7123_Alfredo%20Guida-p-500.webp 500w,
                        https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/67f401f004c94e3b4eee7123_Alfredo%20Guida.webp       512w
                      "
                      className="testimonial_img"
                    />
                    <div className="testimonial_name">
                      <div>Alfredo Guida</div>
                      <div className="u-color-muted">
                        Head of marketing, Influur
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-wf--global-section-space--section-space="main"
              className="g_section_space w-variant-60a7ad7d-02b0-6682-95a5-2218e6fd1490"
            ></div>
          </div>
        </section>
        <section id="pricing" data-wf--section-pricing--styles-theme="inherit">
          <div className="u-container">
            <div
              data-wf--global-section-space--section-space="main"
              className="g_section_space w-variant-60a7ad7d-02b0-6682-95a5-2218e6fd1490"
            ></div>
            <div className="u-container-inside">
              <div className="u-grid-autofit u-vflex-center-top is-pricing">
                <div
                  id="w-node-_13b65903-d503-c54f-685f-d4b51ba3d360-1ba3d35b"
                  className="footer_left-top u-max-width-40ch"
                >
                  <h1 className="u-text-style-h2 u-mb-4">
                    Transparent
                    <span className="u-text-syle-secondary">pricing</span>
                  </h1>
                </div>
                <div
                  id="w-node-_13b65903-d503-c54f-685f-d4b51ba3d368-1ba3d35b"
                  className="pricing_tabs-wpr"
                >
                  <div
                    data-current="Tab 1"
                    data-easing="ease"
                    data-duration-in="300"
                    data-duration-out="100"
                    className="pricing_tabs w-tabs"
                  >
                    <div className="pricing_tabs-menu w-tab-menu">
                      <a
                        data-w-tab="Tab 1"
                        className="pricing_tab-link w-inline-block w-tab-link w--current"
                        ><div>Monthly</div>
                        <div className="u-color-muted">$2,100 USD/mo</div></a
                      ><a
                        data-w-tab="Tab 2"
                        className="pricing_tab-link w-inline-block w-tab-link"
                        ><div>One-time project</div>
                        <div className="u-color-muted">Starts at $4,250USD</div></a
                      >
                    </div>
                    <div className="pricing_tabs-content w-tab-content">
                      <div
                        data-w-tab="Tab 1"
                        className="pricing_tab-pane w-tab-pane w--tab-active"
                      >
                        <div className="pricing_tab-card">
                          <img
                            sizes="(max-width: 1232px) 100vw, 1232px"
                            srcSet="
                              https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/681176bb2936b547a7505ec7_yungle%20webflow%20bg-p-500.webp   500w,
                              https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/681176bb2936b547a7505ec7_yungle%20webflow%20bg-p-800.webp   800w,
                              https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/681176bb2936b547a7505ec7_yungle%20webflow%20bg-p-1080.webp 1080w,
                              https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/681176bb2936b547a7505ec7_yungle%20webflow%20bg.webp        1232w
                            "
                            alt=""
                            src="https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/681176bb2936b547a7505ec7_yungle%20webflow%20bg.webp"
                            loading="lazy"
                            className="cta_sticky-bg"
                          />
                          <div className="cta_sticky-window">
                            <h3 className="u-text-style-h3 u-mb-6">
                              Monthly CRO retainer
                            </h3>
                            <ul role="list" className="u-mb-8">
                              <li>
                                <div>
                                  User behavior analysis (heatmaps, scrollmaps,
                                  session recordings)
                                </div>
                              </li>
                              <li>
                                <div>
                                  Monthly A/B testing with clear hypotheses
                                </div>
                              </li>
                              <li>
                                <div>UX/UI design adjustments in Webflow</div>
                              </li>
                              <li>
                                <div>
                                  Development of new sections or landing pages
                                  (when needed)
                                </div>
                              </li>
                              <li>
                                <div>
                                  Monthly report with actionable insights &amp;
                                  next steps
                                </div>
                              </li>
                              <li>
                                <div>
                                  Weekly async updates + optional monthly
                                  check-in
                                </div>
                              </li>
                            </ul>
                            <div className="pricing_card-price">
                              <div className="pricing_number">$2,100 USD/mo</div>
                              <div
                                data-wf--btn-main--style="primary"
                                data-w-id="824b76d0-0ddb-5ed5-8ae6-09771aaa568a"
                                className="btn_main_wrap"
                              >
                                <div className="g_clickable_wrap">
                                  <a
                                    target=""
                                    href="https://www.yungle.com.mx/contact"
                                    className="g_clickable_link w-inline-block"
                                    ><span className="g_clickable_text u-sr-only"
                                      >Get started</span
                                    ></a
                                  ><button
                                    type="button"
                                    className="g_clickable_btn"
                                  >
                                    <span className="g_clickable_text u-sr-only"
                                      >Get started</span
                                    >
                                  </button>
                                </div>
                                <div aria-hidden="true" className="btn_main_text">
                                  Get started
                                </div>
                                <div className="btn_icon-wpr">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    viewBox="0 0 25 24"
                                    fill="none"
                                    className="btn_icon _1"
                                  >
                                    <path
                                      d="M23.8334 12.6666L15.167 21.333C14.9901 21.5099 14.7503 21.6092 14.5003 21.6092C14.2503 21.6092 14.0105 21.5099 13.8337 21.333C13.6569 21.1562 13.5575 20.9164 13.5575 20.6664C13.5575 20.4164 13.6569 20.1766 13.8337 19.9998L20.8909 12.9425L1.83403 12.9433C1.58385 12.9433 1.34392 12.8439 1.16702 12.667C0.990112 12.4901 0.890729 12.2502 0.890729 12C0.890729 11.7498 0.990113 11.5099 1.16702 11.333C1.34392 11.1561 1.58385 11.0567 1.83403 11.0567L20.8909 11.0575L13.8337 4.00025C13.6569 3.82344 13.5575 3.58364 13.5575 3.3336C13.5575 3.08356 13.6569 2.84376 13.8337 2.66695C14.0105 2.49015 14.2503 2.39082 14.5003 2.39082C14.7503 2.39082 14.9901 2.49015 15.167 2.66695L23.8334 11.3334C24.0102 11.5102 24.1095 11.75 24.1095 12C24.1095 12.25 24.0102 12.4898 23.8334 12.6666Z"
                                      fill="currentColor"
                                    ></path></svg
                                  ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    viewBox="0 0 25 24"
                                    fill="none"
                                    className="btn_icon _2"
                                  >
                                    <path
                                      d="M23.8334 12.6666L15.167 21.333C14.9901 21.5099 14.7503 21.6092 14.5003 21.6092C14.2503 21.6092 14.0105 21.5099 13.8337 21.333C13.6569 21.1562 13.5575 20.9164 13.5575 20.6664C13.5575 20.4164 13.6569 20.1766 13.8337 19.9998L20.8909 12.9425L1.83403 12.9433C1.58385 12.9433 1.34392 12.8439 1.16702 12.667C0.990112 12.4901 0.890729 12.2502 0.890729 12C0.890729 11.7498 0.990113 11.5099 1.16702 11.333C1.34392 11.1561 1.58385 11.0567 1.83403 11.0567L20.8909 11.0575L13.8337 4.00025C13.6569 3.82344 13.5575 3.58364 13.5575 3.3336C13.5575 3.08356 13.6569 2.84376 13.8337 2.66695C14.0105 2.49015 14.2503 2.39082 14.5003 2.39082C14.7503 2.39082 14.9901 2.49015 15.167 2.66695L23.8334 11.3334C24.0102 11.5102 24.1095 11.75 24.1095 12C24.1095 12.25 24.0102 12.4898 23.8334 12.6666Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-w-tab="Tab 2"
                        className="pricing_tab-pane w-tab-pane"
                      >
                        <div className="pricing_tab-card">
                          <img
                            sizes="100vw"
                            srcSet="
                              https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/681177f82e50324c71b9d6e1_card%20bg%20seo-p-500.webp   500w,
                              https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/681177f82e50324c71b9d6e1_card%20bg%20seo-p-800.webp   800w,
                              https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/681177f82e50324c71b9d6e1_card%20bg%20seo-p-1080.webp 1080w,
                              https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/681177f82e50324c71b9d6e1_card%20bg%20seo.webp        1232w
                            "
                            alt=""
                            src="https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/681177f82e50324c71b9d6e1_card%20bg%20seo.webp"
                            loading="lazy"
                            className="cta_sticky-bg"
                          />
                          <div className="cta_sticky-window">
                            <h3 className="u-text-style-h3 u-mb-6">
                              One-time project
                            </h3>
                            <ul role="list" className="u-mb-8">
                              <li>
                                <div>
                                  Dedicated designer and direct Slack access
                                </div>
                              </li>
                              <li><div>Custom development or no-code</div></li>
                              <li>
                                <div>
                                  CMS, analytics, 3rd party, AI-chabot
                                  implementation
                                </div>
                              </li>
                              <li><div>Custom illustrations</div></li>
                              <li><div>SEO audit and settings setup</div></li>
                              <li>
                                <div>
                                  Milestone-based delivery and clear
                                  deliverables
                                </div>
                              </li>
                            </ul>
                            <div className="pricing_card-price">
                              <div className="pricing_number">$4,250 USD</div>
                              <div
                                data-wf--btn-main--style="primary"
                                data-w-id="824b76d0-0ddb-5ed5-8ae6-09771aaa568a"
                                className="btn_main_wrap"
                              >
                                <div className="g_clickable_wrap">
                                  <a
                                    target=""
                                    href="https://www.yungle.com.mx/contact"
                                    className="g_clickable_link w-inline-block"
                                    ><span className="g_clickable_text u-sr-only"
                                      >Book a call</span
                                    ></a
                                  ><button
                                    type="button"
                                    className="g_clickable_btn"
                                  >
                                    <span className="g_clickable_text u-sr-only"
                                      >Book a call</span
                                    >
                                  </button>
                                </div>
                                <div aria-hidden="true" className="btn_main_text">
                                  Book a call
                                </div>
                                <div className="btn_icon-wpr">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    viewBox="0 0 25 24"
                                    fill="none"
                                    className="btn_icon _1"
                                  >
                                    <path
                                      d="M23.8334 12.6666L15.167 21.333C14.9901 21.5099 14.7503 21.6092 14.5003 21.6092C14.2503 21.6092 14.0105 21.5099 13.8337 21.333C13.6569 21.1562 13.5575 20.9164 13.5575 20.6664C13.5575 20.4164 13.6569 20.1766 13.8337 19.9998L20.8909 12.9425L1.83403 12.9433C1.58385 12.9433 1.34392 12.8439 1.16702 12.667C0.990112 12.4901 0.890729 12.2502 0.890729 12C0.890729 11.7498 0.990113 11.5099 1.16702 11.333C1.34392 11.1561 1.58385 11.0567 1.83403 11.0567L20.8909 11.0575L13.8337 4.00025C13.6569 3.82344 13.5575 3.58364 13.5575 3.3336C13.5575 3.08356 13.6569 2.84376 13.8337 2.66695C14.0105 2.49015 14.2503 2.39082 14.5003 2.39082C14.7503 2.39082 14.9901 2.49015 15.167 2.66695L23.8334 11.3334C24.0102 11.5102 24.1095 11.75 24.1095 12C24.1095 12.25 24.0102 12.4898 23.8334 12.6666Z"
                                      fill="currentColor"
                                    ></path></svg
                                  ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    viewBox="0 0 25 24"
                                    fill="none"
                                    className="btn_icon _2"
                                  >
                                    <path
                                      d="M23.8334 12.6666L15.167 21.333C14.9901 21.5099 14.7503 21.6092 14.5003 21.6092C14.2503 21.6092 14.0105 21.5099 13.8337 21.333C13.6569 21.1562 13.5575 20.9164 13.5575 20.6664C13.5575 20.4164 13.6569 20.1766 13.8337 19.9998L20.8909 12.9425L1.83403 12.9433C1.58385 12.9433 1.34392 12.8439 1.16702 12.667C0.990112 12.4901 0.890729 12.2502 0.890729 12C0.890729 11.7498 0.990113 11.5099 1.16702 11.333C1.34392 11.1561 1.58385 11.0567 1.83403 11.0567L20.8909 11.0575L13.8337 4.00025C13.6569 3.82344 13.5575 3.58364 13.5575 3.3336C13.5575 3.08356 13.6569 2.84376 13.8337 2.66695C14.0105 2.49015 14.2503 2.39082 14.5003 2.39082C14.7503 2.39082 14.9901 2.49015 15.167 2.66695L23.8334 11.3334C24.0102 11.5102 24.1095 11.75 24.1095 12C24.1095 12.25 24.0102 12.4898 23.8334 12.6666Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="testimonial_card u-max-width-55ch mobile-top-padding"
                >
                  <p className="u-text-style-large">
                    “I’ve engaged Yungle for over seven different client
                    projects, which have ranged from quick performance landing
                    pages to completely custom platforms. Their speed, attention
                    to detail, and quality of output have continually drawn me
                    back.”
                  </p>
                  <div className="testimonial_info">
                    <img
                      src="https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/67f01c2e3624b187b3bfa24e_Ryan%20webb%20ragu.ai.webp"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="
                        https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/67f01c2e3624b187b3bfa24e_Ryan%20webb%20ragu.ai-p-500.webp   500w,
                        https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/67f01c2e3624b187b3bfa24e_Ryan%20webb%20ragu.ai-p-800.webp   800w,
                        https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/67f01c2e3624b187b3bfa24e_Ryan%20webb%20ragu.ai-p-1080.webp 1080w,
                        https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/67f01c2e3624b187b3bfa24e_Ryan%20webb%20ragu.ai.webp        2400w
                      "
                      className="testimonial_img"
                    />
                    <div className="testimonial_name">
                      <div>Ryan Webb</div>
                      <div className="u-color-muted">COO, Curated</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-wf--global-section-space--section-space="main"
                className="g_section_space w-variant-60a7ad7d-02b0-6682-95a5-2218e6fd1490"
              ></div>
            </div>
          </div>
        </section>
        <section data-wf--section-faqs--styles-theme="inherit">
          <div className="u-container">
            <div
              data-wf--global-section-space--section-space="main"
              className="g_section_space w-variant-60a7ad7d-02b0-6682-95a5-2218e6fd1490"
            ></div>
            <div className="u-container-inside">
              <div className="u-grid-autofit u-gap-8">
                <div className="cta_sticky-wpr">
                  <div className="cta_sticky">
                    <img
                      src="https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/681182e39314ceec639d3855_hero%20yungle%20bg.webp"
                      loading="lazy"
                      sizes="(max-width: 1232px) 100vw, 1232px"
                      srcSet="
                        https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/681182e39314ceec639d3855_hero%20yungle%20bg-p-500.webp   500w,
                        https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/681182e39314ceec639d3855_hero%20yungle%20bg-p-800.webp   800w,
                        https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/681182e39314ceec639d3855_hero%20yungle%20bg-p-1080.webp 1080w,
                        https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/681182e39314ceec639d3855_hero%20yungle%20bg.webp        1232w
                      "
                      alt=""
                      className="cta_sticky-bg"
                    />
                    <div className="cta_sticky-window">
                      <img
                        src="https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/67f01211c41a722cac2f6213_jorge%20headshot.webp"
                        loading="lazy"
                        alt=""
                        className="cta_sticky-headshot u-mb-8"
                      />
                      <h3 className="u-text-style-h3 u-mb-6">
                        Book a 25-min intro call
                      </h3>
                      <div
                        data-wf--btn-main--style="primary"
                        data-w-id="824b76d0-0ddb-5ed5-8ae6-09771aaa568a"
                        className="btn_main_wrap u-width-full"
                      >
                        <div className="g_clickable_wrap">
                          <a
                            target=""
                            href="https://www.yungle.com.mx/contact"
                            className="g_clickable_link w-inline-block"
                            ><span className="g_clickable_text u-sr-only"
                              >Book now</span
                            ></a
                          ><button type="button" className="g_clickable_btn">
                            <span className="g_clickable_text u-sr-only"
                              >Book now</span
                            >
                          </button>
                        </div>
                        <div
                          aria-hidden="true"
                          className="btn_main_text u-width-full"
                        >
                          Book now
                        </div>
                        <div className="btn_icon-wpr">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            viewBox="0 0 25 24"
                            fill="none"
                            className="btn_icon _1"
                          >
                            <path
                              d="M23.8334 12.6666L15.167 21.333C14.9901 21.5099 14.7503 21.6092 14.5003 21.6092C14.2503 21.6092 14.0105 21.5099 13.8337 21.333C13.6569 21.1562 13.5575 20.9164 13.5575 20.6664C13.5575 20.4164 13.6569 20.1766 13.8337 19.9998L20.8909 12.9425L1.83403 12.9433C1.58385 12.9433 1.34392 12.8439 1.16702 12.667C0.990112 12.4901 0.890729 12.2502 0.890729 12C0.890729 11.7498 0.990113 11.5099 1.16702 11.333C1.34392 11.1561 1.58385 11.0567 1.83403 11.0567L20.8909 11.0575L13.8337 4.00025C13.6569 3.82344 13.5575 3.58364 13.5575 3.3336C13.5575 3.08356 13.6569 2.84376 13.8337 2.66695C14.0105 2.49015 14.2503 2.39082 14.5003 2.39082C14.7503 2.39082 14.9901 2.49015 15.167 2.66695L23.8334 11.3334C24.0102 11.5102 24.1095 11.75 24.1095 12C24.1095 12.25 24.0102 12.4898 23.8334 12.6666Z"
                              fill="currentColor"
                            ></path></svg
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            viewBox="0 0 25 24"
                            fill="none"
                            className="btn_icon _2"
                          >
                            <path
                              d="M23.8334 12.6666L15.167 21.333C14.9901 21.5099 14.7503 21.6092 14.5003 21.6092C14.2503 21.6092 14.0105 21.5099 13.8337 21.333C13.6569 21.1562 13.5575 20.9164 13.5575 20.6664C13.5575 20.4164 13.6569 20.1766 13.8337 19.9998L20.8909 12.9425L1.83403 12.9433C1.58385 12.9433 1.34392 12.8439 1.16702 12.667C0.990112 12.4901 0.890729 12.2502 0.890729 12C0.890729 11.7498 0.990113 11.5099 1.16702 11.333C1.34392 11.1561 1.58385 11.0567 1.83403 11.0567L20.8909 11.0575L13.8337 4.00025C13.6569 3.82344 13.5575 3.58364 13.5575 3.3336C13.5575 3.08356 13.6569 2.84376 13.8337 2.66695C14.0105 2.49015 14.2503 2.39082 14.5003 2.39082C14.7503 2.39082 14.9901 2.49015 15.167 2.66695L23.8334 11.3334C24.0102 11.5102 24.1095 11.75 24.1095 12C24.1095 12.25 24.0102 12.4898 23.8334 12.6666Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <p className="u-color-faded u-mt-6">
                        Prefer mail?
                        <a
                          href="mailto:hola@yungle.com.mx"
                          className="u-color-brand"
                          >hola@yungle.com.mx</a
                        >
                      </p>
                    </div>
                  </div>
                </div>
                <div className="u-align-self-center">
                  <h2 className="u-text-style-h2 u-mb-6">
                    Frequently asked
                    <span className="u-text-syle-secondary">questions</span>
                  </h2>
                  <div className="faqs_clw w-dyn-list">
                    <div role="list" className="faqs_cl w-dyn-items">
                      <div role="listitem" className="faqs_citem w-dyn-item">
                        <div
                          blocks-name="faq3_accordion"
                          className="faq3_accordion"
                        >
                          <div
                            data-w-id="0c6835d3-0c67-3905-1bee-efcf51ccd387"
                            className="faq3_question div-block"
                          >
                            <div>How does onboarding work?</div>
                            <div className="faq3_icon-wrapper">
                              <div className="icon-embed-small w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 32 32"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16.5303 20.8839C16.2374 21.1768 15.7626 21.1768 15.4697 20.8839L7.82318 13.2374C7.53029 12.9445 7.53029 12.4697 7.82318 12.1768L8.17674 11.8232C8.46963 11.5303 8.9445 11.5303 9.2374 11.8232L16 18.5858L22.7626 11.8232C23.0555 11.5303 23.5303 11.5303 23.8232 11.8232L24.1768 12.1768C24.4697 12.4697 24.4697 12.9445 24.1768 13.2374L16.5303 20.8839Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="faq3_answer">
                            <div className="margin-bottom margin-small">
                              <div className="u-rich-text w-richtext">
                                <p>
                                  We kick off with a 30-min strategy call to
                                  understand your goals, current setup, and main
                                  conversion challenges. Then, we audit your
                                  site and analytics, define key pages to
                                  optimize, and set our roadmap for the first
                                  30-60-90 days.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="faqs_citem w-dyn-item">
                        <div
                          blocks-name="faq3_accordion"
                          className="faq3_accordion"
                        >
                          <div
                            data-w-id="0c6835d3-0c67-3905-1bee-efcf51ccd387"
                            className="faq3_question div-block"
                          >
                            <div>What’s included in the monthly retainer?</div>
                            <div className="faq3_icon-wrapper">
                              <div className="icon-embed-small w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 32 32"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16.5303 20.8839C16.2374 21.1768 15.7626 21.1768 15.4697 20.8839L7.82318 13.2374C7.53029 12.9445 7.53029 12.4697 7.82318 12.1768L8.17674 11.8232C8.46963 11.5303 8.9445 11.5303 9.2374 11.8232L16 18.5858L22.7626 11.8232C23.0555 11.5303 23.5303 11.5303 23.8232 11.8232L24.1768 12.1768C24.4697 12.4697 24.4697 12.9445 24.1768 13.2374L16.5303 20.8839Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="faq3_answer">
                            <div className="margin-bottom margin-small">
                              <div className="u-rich-text w-richtext">
                                <p>
                                  Ongoing design &amp; development support,
                                  AI-powered conversion optimization, custom A/B
                                  tests, analytics integration, communication
                                  through Slack, async updates via Notion,
                                  weekly performance check-ins, and monthly
                                  reports on your website performance.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="faqs_citem w-dyn-item">
                        <div
                          blocks-name="faq3_accordion"
                          className="faq3_accordion"
                        >
                          <div
                            data-w-id="0c6835d3-0c67-3905-1bee-efcf51ccd387"
                            className="faq3_question div-block"
                          >
                            <div>How long does a typical redesign take?</div>
                            <div className="faq3_icon-wrapper">
                              <div className="icon-embed-small w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 32 32"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16.5303 20.8839C16.2374 21.1768 15.7626 21.1768 15.4697 20.8839L7.82318 13.2374C7.53029 12.9445 7.53029 12.4697 7.82318 12.1768L8.17674 11.8232C8.46963 11.5303 8.9445 11.5303 9.2374 11.8232L16 18.5858L22.7626 11.8232C23.0555 11.5303 23.5303 11.5303 23.8232 11.8232L24.1768 12.1768C24.4697 12.4697 24.4697 12.9445 24.1768 13.2374L16.5303 20.8839Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="faq3_answer">
                            <div className="margin-bottom margin-small">
                              <div className="u-rich-text w-richtext">
                                <p>
                                  Most redesigns take 2–6 weeks from design to
                                  development, depending on the scope. We move
                                  fast by working async and iterating with your
                                  feedback.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="faqs_citem w-dyn-item">
                        <div
                          blocks-name="faq3_accordion"
                          className="faq3_accordion"
                        >
                          <div
                            data-w-id="0c6835d3-0c67-3905-1bee-efcf51ccd387"
                            className="faq3_question div-block"
                          >
                            <div>
                              How do you measure conversion improvements?
                            </div>
                            <div className="faq3_icon-wrapper">
                              <div className="icon-embed-small w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 32 32"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16.5303 20.8839C16.2374 21.1768 15.7626 21.1768 15.4697 20.8839L7.82318 13.2374C7.53029 12.9445 7.53029 12.4697 7.82318 12.1768L8.17674 11.8232C8.46963 11.5303 8.9445 11.5303 9.2374 11.8232L16 18.5858L22.7626 11.8232C23.0555 11.5303 23.5303 11.5303 23.8232 11.8232L24.1768 12.1768C24.4697 12.4697 24.4697 12.9445 24.1768 13.2374L16.5303 20.8839Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="faq3_answer">
                            <div className="margin-bottom margin-small">
                              <div className="u-rich-text w-richtext">
                                <p>
                                  We set clear KPIs (sign-ups, purchases, form
                                  submissions) and track them using tools like
                                  Google Analytics, Hotjar, and A/B testing
                                  platforms. You&#x27;ll receive monthly reports
                                  showing the real impact.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="faqs_citem w-dyn-item">
                        <div
                          blocks-name="faq3_accordion"
                          className="faq3_accordion"
                        >
                          <div
                            data-w-id="0c6835d3-0c67-3905-1bee-efcf51ccd387"
                            className="faq3_question div-block"
                          >
                            <div>Do I need to bring my own copy/content?</div>
                            <div className="faq3_icon-wrapper">
                              <div className="icon-embed-small w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 32 32"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16.5303 20.8839C16.2374 21.1768 15.7626 21.1768 15.4697 20.8839L7.82318 13.2374C7.53029 12.9445 7.53029 12.4697 7.82318 12.1768L8.17674 11.8232C8.46963 11.5303 8.9445 11.5303 9.2374 11.8232L16 18.5858L22.7626 11.8232C23.0555 11.5303 23.5303 11.5303 23.8232 11.8232L24.1768 12.1768C24.4697 12.4697 24.4697 12.9445 24.1768 13.2374L16.5303 20.8839Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="faq3_answer">
                            <div className="margin-bottom margin-small">
                              <div className="u-rich-text w-richtext">
                                <p>
                                  Not at all. We write conversion-focused copy
                                  for you—based on your value prop, audience,
                                  and page goals. If you already have content,
                                  we’ll improve and align it with our strategy.
                                  For images and illustrations, it depends on
                                  your audience and objectives.
                                </p>
                                <p>‍</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="faqs_citem w-dyn-item">
                        <div
                          blocks-name="faq3_accordion"
                          className="faq3_accordion"
                        >
                          <div
                            data-w-id="0c6835d3-0c67-3905-1bee-efcf51ccd387"
                            className="faq3_question div-block"
                          >
                            <div>
                              Do I need traffic to benefit from conversion
                              optimization?
                            </div>
                            <div className="faq3_icon-wrapper">
                              <div className="icon-embed-small w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 32 32"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16.5303 20.8839C16.2374 21.1768 15.7626 21.1768 15.4697 20.8839L7.82318 13.2374C7.53029 12.9445 7.53029 12.4697 7.82318 12.1768L8.17674 11.8232C8.46963 11.5303 8.9445 11.5303 9.2374 11.8232L16 18.5858L22.7626 11.8232C23.0555 11.5303 23.5303 11.5303 23.8232 11.8232L24.1768 12.1768C24.4697 12.4697 24.4697 12.9445 24.1768 13.2374L16.5303 20.8839Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="faq3_answer">
                            <div className="margin-bottom margin-small">
                              <div className="u-rich-text w-richtext">
                                <p>
                                  Yes. While we can optimize structure and UX,
                                  data-driven decisions come from real user
                                  behavior. Ideally, your site should have at
                                  least 1,000 monthly visits to unlock the value
                                  of CRO.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="faqs_citem w-dyn-item">
                        <div
                          blocks-name="faq3_accordion"
                          className="faq3_accordion"
                        >
                          <div
                            data-w-id="0c6835d3-0c67-3905-1bee-efcf51ccd387"
                            className="faq3_question div-block"
                          >
                            <div>Is my user data safe with your AI tools?</div>
                            <div className="faq3_icon-wrapper">
                              <div className="icon-embed-small w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 32 32"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16.5303 20.8839C16.2374 21.1768 15.7626 21.1768 15.4697 20.8839L7.82318 13.2374C7.53029 12.9445 7.53029 12.4697 7.82318 12.1768L8.17674 11.8232C8.46963 11.5303 8.9445 11.5303 9.2374 11.8232L16 18.5858L22.7626 11.8232C23.0555 11.5303 23.5303 11.5303 23.8232 11.8232L24.1768 12.1768C24.4697 12.4697 24.4697 12.9445 24.1768 13.2374L16.5303 20.8839Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="faq3_answer">
                            <div className="margin-bottom margin-small">
                              <div className="u-rich-text w-richtext">
                                <p>
                                  Absolutely. We only use privacy-compliant
                                  tools (like GA4, Hotjar, or Webflow) that
                                  follow GDPR and other global standards. Your
                                  user data stays safe and anonymized.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="faqs_citem w-dyn-item">
                        <div
                          blocks-name="faq3_accordion"
                          className="faq3_accordion"
                        >
                          <div
                            data-w-id="0c6835d3-0c67-3905-1bee-efcf51ccd387"
                            className="faq3_question div-block"
                          >
                            <div>How do we communicate?</div>
                            <div className="faq3_icon-wrapper">
                              <div className="icon-embed-small w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 32 32"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16.5303 20.8839C16.2374 21.1768 15.7626 21.1768 15.4697 20.8839L7.82318 13.2374C7.53029 12.9445 7.53029 12.4697 7.82318 12.1768L8.17674 11.8232C8.46963 11.5303 8.9445 11.5303 9.2374 11.8232L16 18.5858L22.7626 11.8232C23.0555 11.5303 23.5303 11.5303 23.8232 11.8232L24.1768 12.1768C24.4697 12.4697 24.4697 12.9445 24.1768 13.2374L16.5303 20.8839Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="faq3_answer">
                            <div className="margin-bottom margin-small">
                              <div className="u-rich-text w-richtext">
                                <p>
                                  We run everything async via Slack, Figma,
                                  Notion and Bugherd. You get weekly updates,
                                  design previews, and monthly performance
                                  reports—without needing to micromanage
                                  anything.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="faqs_citem w-dyn-item">
                        <div
                          blocks-name="faq3_accordion"
                          className="faq3_accordion"
                        >
                          <div
                            data-w-id="0c6835d3-0c67-3905-1bee-efcf51ccd387"
                            className="faq3_question div-block"
                          >
                            <div>Can I pause or cancel the subscription?</div>
                            <div className="faq3_icon-wrapper">
                              <div className="icon-embed-small w-embed">
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 32 32"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16.5303 20.8839C16.2374 21.1768 15.7626 21.1768 15.4697 20.8839L7.82318 13.2374C7.53029 12.9445 7.53029 12.4697 7.82318 12.1768L8.17674 11.8232C8.46963 11.5303 8.9445 11.5303 9.2374 11.8232L16 18.5858L22.7626 11.8232C23.0555 11.5303 23.5303 11.5303 23.8232 11.8232L24.1768 12.1768C24.4697 12.4697 24.4697 12.9445 24.1768 13.2374L16.5303 20.8839Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="faq3_answer">
                            <div className="margin-bottom margin-small">
                              <div className="u-rich-text w-richtext">
                                <p>
                                  Yes. You can pause or cancel anytime directly
                                  through Stripe. No hard feelings, no hidden
                                  fees.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-wf--global-section-space--section-space="main"
              className="g_section_space w-variant-60a7ad7d-02b0-6682-95a5-2218e6fd1490"
            ></div>
          </div>
        </section>
        <section data-wf--section-footer--styles-theme="inherit" className="footer">
          <div className="u-container u-theme-dark">
            <div
              data-wf--global-section-space--section-space="even"
              className="g_section_space w-variant-41fc0c0a-cac3-53c9-9802-6a916e3fb342"
            ></div>
            <div className="u-container-inside">
              <div className="u-grid-autofit u-vflex-center-top is-footer">
                <div
                  id="w-node-c6a36fcd-e830-8b90-123f-1fae5493730d-54937308"
                  className="footer_left-top"
                >
                  <a
                    href="#"
                    className="footer_logo-link u-mb-10 w-inline-block"
                    ><img
                      src="https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/67f0027b3d6d5abe931d03f0_logo%20wpr.webp"
                      loading="lazy"
                      alt=""
                      className="footer_logo"
                  /></a>
                  <h1 className="u-text-style-h1 u-mb-4">
                    See if
                    <span className="u-text-syle-secondary">we’re a good fit</span>
                  </h1>
                  <div
                    className="g_paragraph w-richtext u-text-style-main u-mb-text u-max-width-50ch u-child-contain u-rich-text"
                  >
                    <p>
                      Schedule a quick, 25 minute guided tour through Yungle.
                      Prefer mail?
                      <a href="mailto:hola@yungle.com.mx">hola@yungle.com.mx</a>
                    </p>
                  </div>
                </div>
                <div
                  id="w-node-_8c5dc51d-5a53-528d-559b-767046b6e7fe-54937308"
                  className="footer_cal-wpr"
                >
                  <div className="footer_cal-window">
                    <div className="footer_cal-embed w-embed w-script">
                      
                      <div
                        style={{ width: "100%", height: "100%", overflow: "scroll" }}
                        id="my-cal-inline"
                      ></div>
                      <script type="text/javascript" dangerouslySetInnerHTML={{ __html: `
                        (function (C, A, L) {
                          let p = function (a, ar) {
                            a.q.push(ar);
                          };
                          let d = C.document;
                          C.Cal =
                            C.Cal ||
                            function () {
                              let cal = C.Cal;
                              let ar = arguments;
                              if (!cal.loaded) {
                                cal.ns = {};
                                cal.q = cal.q || [];
                                d.head.appendChild(
                                  d.createElement("script"),
                                ).src = A;
                                cal.loaded = true;
                              }
                              if (ar[0] === L) {
                                const api = function () {
                                  p(api, arguments);
                                };
                                const namespace = ar[1];
                                api.q = api.q || [];
                                if (typeof namespace === "string") {
                                  cal.ns[namespace] = cal.ns[namespace] || api;
                                  p(cal.ns[namespace], ar);
                                  p(cal, ["initNamespace", namespace]);
                                } else p(cal, ar);
                                return;
                              }
                              p(cal, ar);
                            };
                        })(
                          window,
                          "https://app.cal.com/embed/embed.js",
                          "init",
                        );
                        Cal("init", "discovery", { origin: "https://cal.com" });

                        Cal.ns.discovery("inline", {
                          elementOrSelector: "#my-cal-inline",
                          config: { layout: "month_view", theme: "dark" },
                          calLink: "yungle/discovery",
                        });

                        Cal.ns.discovery("ui", {
                          theme: "dark",
                          cssVarsPerTheme: {
                            light: { "cal-brand": "#171717" },
                            dark: { "cal-brand": "#E6EBE6" },
                          },
                          hideEventTypeDetails: true,
                          layout: "month_view",
                        });
                      ` }} />
                      
                    </div>
                  </div>
                  <div
                    className="g_visual_wrap u-position-relative u-cover-absolute"
                    style={{ objectPosition: "50% 50%" }}
                  >
                    <div className="g_visual_background u-cover-absolute"></div>
                    <img
                      src="https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/68117a1e29aacfbe04d562b1_yungle%20design%20bg.webp"
                      loading="lazy"
                      alt=""
                      sizes="(max-width: 1232px) 100vw, 1232px"
                      srcSet="
                        https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/68117a1e29aacfbe04d562b1_yungle%20design%20bg-p-500.webp   500w,
                        https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/68117a1e29aacfbe04d562b1_yungle%20design%20bg-p-800.webp   800w,
                        https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/68117a1e29aacfbe04d562b1_yungle%20design%20bg-p-1080.webp 1080w,
                        https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/68117a1e29aacfbe04d562b1_yungle%20design%20bg.webp        1232w
                      "
                      className="g_visual_img u-cover-absolute"
                    />
                  </div>
                </div>
                <div className="footer_legal-wpr">
                  <div className="footer_year">
                    ®<span className="this-year">this-year</span> Mexico City
                  </div>
                  <a
                    href="https://www.yungle.com.mx/privacy-policy"
                    className="footer_link w-inline-block"
                    ><div>Privacy Policy</div></a
                  ><a
                    href="https://www.yungle.com.mx/terms-of-service"
                    className="footer_link w-inline-block"
                    ><div>Terms of Service</div></a
                  >
                </div>
              </div>
              <div
                data-wf--global-section-space--section-space="even"
                className="g_section_space w-variant-41fc0c0a-cac3-53c9-9802-6a916e3fb342"
              ></div>
            </div>
          </div>
        </section>
      </main>
    </div>
    <script
      src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=67ec5bee56ec8dfb35026e2b"
      type="text/javascript"
      integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
      crossOrigin="anonymous"
    ></script>
    <script
      src="https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/js/webflow.schunk.36b8fb49256177c8.js"
      type="text/javascript"
    ></script>
    <script
      src="https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/js/webflow.schunk.db282b75b7c3a9d9.js"
      type="text/javascript"
    ></script>
    <script
      src="https://cdn.prod.website-files.com/67ec5bee56ec8dfb35026e2b/js/webflow.59b15c66.c2e5ca218d9958bc.js"
      type="text/javascript"
    ></script>
    <script dangerouslySetInnerHTML={{ __html: `
      $(function () {
        $(".this-year").text(new Date().getFullYear());
      });
    ` }} />

    <style dangerouslySetInnerHTML={{ __html: `
      body {
        overscroll-behavior: none;
      }
    ` }} />

    <style dangerouslySetInnerHTML={{ __html: `
      p,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      li,
      blockquote {
        text-wrap: balance;
      }
    ` }} />

    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Yungle",
        "alternateName": "Yungle Studio",
        "url": "https://yungle.com.mx",
        "logo": "https://yungle.com.mx/logo.png",
        "description": "Agencia de diseño y desarrollo web especializada en Webflow, branding y optimización de conversión (CRO). Transformamos sitios en máquinas de crecimiento para startups y negocios digitales.",
        "email": "hola@yungle.com.mx",
        "sameAs": [
          "https://www.linkedin.com/company/yungle",
          "https://www.instagram.com/yungle.mx"
        ],
        "founder": {
          "@type": "Person",
          "name": "Jorge Sahagún",
          "jobTitle": "Founder & Director",
          "url": "https://yungle.com.mx",
          "sameAs": ["https://www.linkedin.com/in/jorge-sahagun"]
        },
        "foundingDate": "2021",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Ciudad de México",
          "addressCountry": "MX"
        },
        "areaServed": {
          "@type": "Country",
          "name": "México"
        },
        "knowsAbout": [
          "Webflow",
          "CRO (Conversion Rate Optimization)",
          "Diseño UX/UI",
          "Branding",
          "Automatización con IA"
        ],
        "memberOf": {
          "@type": "ProgramMembership",
          "name": "Webflow Experts Program"
        }
      }
    ` }} />
    <style dangerouslySetInnerHTML={{ __html: `
      @media screen and (max-width: 991px) {
        .slider-main_component .swiper {
          padding-left: 1rem;
          padding-right: 1rem;
          overflow: visible !important;
        }

        .slider-main_component .swiper-slide {
          width: calc(100% - 2rem);
          flex-shrink: 0 !important;
        }

        .slider-main_component .swiper-wrapper {
          justify-content: flex-start !important;
        }
      }

      @media screen and (min-width: 992px) {
        .slider-main_component .swiper-slide {
          width: calc((100% - 2rem) / 3);
          flex-shrink: 0 !important;
        }

        .slider-main_component .swiper-wrapper {
          justify-content: space-between;
        }

        .slider-main_component .swiper {
          max-width: 1140px;
          margin: 0 auto;
          overflow: visible !important;
        }
      }

      .swiper-next.is-disabled,
      .swiper-prev.is-disabled {
        opacity: 0.3;
        pointer-events: none;
      }

      .swiper-next,
      .swiper-prev {
        opacity: 1;
        transition: opacity 0.3s ease;
      }
    ` }} />

    <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
    <script dangerouslySetInnerHTML={{ __html: `
      $(".slider-main_component").each(function (index) {
        let loopMode = $(this).attr("loop-mode") === "true";
        let sliderDuration =
          $(this).attr("slider-duration") !== undefined
            ? +$(this).attr("slider-duration")
            : 300;

        const swiper = new Swiper($(this).find(".swiper")[0], {
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
            forceToAxis: true,
          },
          keyboard: {
            enabled: true,
            onlyInViewport: true,
          },
          breakpoints: {
            480: {
              slidesPerView: "auto",
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
          },
          pagination: {
            el: $(this).find(".swiper-bullet-wrapper")[0],
            bulletActiveClass: "is-active",
            bulletClass: "swiper-bullet",
            bulletElement: "button",
            clickable: true,
          },
          navigation: {
            nextEl: $(this).find(".swiper-next")[0],
            prevEl: $(this).find(".swiper-prev")[0],
            disabledClass: "is-disabled",
          },
          scrollbar: {
            el: $(this).find(".swiper-drag-wrapper")[0],
            draggable: true,
            dragClass: "swiper-drag",
            snapOnRelease: true,
          },
          slideActiveClass: "is-active",
          slideDuplicateActiveClass: "is-active",
        });

        setTimeout(() => {
          $(this).find(".swiper").css("overflow", "visible");
        }, 100);
      });
    ` }} />
  
    </>
  );
}
