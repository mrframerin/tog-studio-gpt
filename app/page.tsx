/* eslint-disable @next/next/no-sync-scripts */
import NavigationBehavior from "./components/navigation-behavior";
import WebflowRuntime from "./components/webflow-runtime";
import HeroSection from "./components/sections/hero-section";
import BadgesSection from "./components/sections/badges-section";
import IconFeaturesSection from "./components/sections/icon-features-section";
import ServicesSection from "./components/sections/services-section";
import TestimonialSection from "./components/sections/testimonial-section";
import FeaturesGridSection from "./components/sections/features-grid-section";
import ProjectsSliderSection from "./components/sections/projects-slider-section";
import PricingSection from "./components/sections/pricing-section";
import FaqSection from "./components/sections/faq-section";
import FooterSection from "./components/sections/footer-section";

export default function Home() {
  return (
    <>
    <WebflowRuntime />
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
        <HeroSection />
        <BadgesSection />
        <IconFeaturesSection />
        <ServicesSection />
        <TestimonialSection />
        <FeaturesGridSection />
        <ProjectsSliderSection />
        <PricingSection />
        <FaqSection />
        <FooterSection />
      
      </main>
    </div>
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

    </>
  );
}
