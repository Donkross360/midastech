window.SnipcartSettings = {
    publicApiKey: "ZjdiNDdkYWQtM2JhOC00ZTQ0LThkOWQtMzU1YWVkNjAzOGQzNjM4NjM0NjAwMDY0NDg0Mjc0",
    loadStrategy: "on-user-interaction",
    modalStyle: "side",
  };
  
  (function () {
    let c, d;
    (d = (c = window.SnipcartSettings).version) != null || (c.version = "3.0");
    let s, S;
    (S = (s = window.SnipcartSettings).timeoutDuration) != null || (s.timeoutDuration = 2750);
    let l, p;
    (p = (l = window.SnipcartSettings).domain) != null || (l.domain = "cdn.snipcart.com");
    let w, u;
    (u = (w = window.SnipcartSettings).protocol) != null || (w.protocol = "https");
  
    let f =
      window.SnipcartSettings.version.includes("v3.0.0-ci") ||
      (window.SnipcartSettings.version !== "3.0" &&
        window.SnipcartSettings.version.localeCompare("3.4.0", undefined, {
          numeric: true,
          sensitivity: "base",
        }) === -1);
  
    const events = ["focus", "mouseover", "touchmove", "scroll", "keydown"];
    window.LoadSnipcart = loadSnipcart;
  
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", setupListeners);
    } else {
      setupListeners();
    }
  
    function setupListeners() {
      if (window.SnipcartSettings.loadStrategy === "on-user-interaction") {
        events.forEach(event => document.addEventListener(event, loadSnipcart));
        setTimeout(loadSnipcart, window.SnipcartSettings.timeoutDuration);
      } else {
        loadSnipcart();
      }
    }
  
    let initialized = false;
  
    function loadSnipcart() {
      if (initialized) return;
      initialized = true;
  
      const head = document.head;
      const snipcartDiv = document.getElementById("snipcart") || createSnipcartDiv();
      const scriptTag = document.querySelector(
        `script[src^="${window.SnipcartSettings.protocol}://${window.SnipcartSettings.domain}"][src$="snipcart.js"]`
      );
      const linkTag = document.querySelector(
        `link[href^="${window.SnipcartSettings.protocol}://${window.SnipcartSettings.domain}"][href$="snipcart.css"]`
      );
  
      if (!scriptTag) {
        const script = document.createElement("script");
        script.src = `${window.SnipcartSettings.protocol}://${window.SnipcartSettings.domain}/themes/v${window.SnipcartSettings.version}/default/snipcart.js`;
        script.async = true;
        head.appendChild(script);
      }
  
      if (!linkTag) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = `${window.SnipcartSettings.protocol}://${window.SnipcartSettings.domain}/themes/v${window.SnipcartSettings.version}/default/snipcart.css`;
        head.prepend(link);
      }
  
      events.forEach(event => document.removeEventListener(event, loadSnipcart));
    }
  
    function createSnipcartDiv() {
      const div = document.createElement("div");
      div.id = "snipcart";
      div.setAttribute("hidden", "true");
      document.body.appendChild(div);
      return div;
    }
  })();
  console.log("Snipcart script loaded");  