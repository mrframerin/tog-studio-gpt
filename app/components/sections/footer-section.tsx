export default function FooterSection() {
  return (
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
              src="/images/67f0027b3d6d5abe931d03f0_logo-wpr--f12d7795.webp"
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
              src="/images/68117a1e29aacfbe04d562b1_yungle-design-bg--df93499c.webp"
              loading="lazy"
              alt=""
              sizes="(max-width: 1232px) 100vw, 1232px"
              srcSet="
                /images/68117a1e29aacfbe04d562b1_yungle-design-bg-p-500--f5e381ea.webp   500w,
                /images/68117a1e29aacfbe04d562b1_yungle-design-bg-p-800--c1cfa93b.webp   800w,
                /images/68117a1e29aacfbe04d562b1_yungle-design-bg-p-1080--ddf0ab07.webp 1080w,
                /images/68117a1e29aacfbe04d562b1_yungle-design-bg--df93499c.webp        1232w
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
  );
}
