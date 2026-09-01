(function () {
  "use strict";

  var STORAGE_KEY = "wemakeyoufast-lang";
  var currentLang = localStorage.getItem(STORAGE_KEY) || "de";

  // Bildpfade ohne Endung, in der Reihenfolge der Ablauf-Schritte. Der vierte
  // Schritt (Report) hat kein Foto und bekommt eine dekorative Fläche.
  var STEP_IMAGES = [
    "img/testing/handschlag-karl",
    "img/testing/ergometer-laptop",
    "img/testing/blutabnahme-karl",
    null
  ];

  // 1920er Fassung plus 960er für schmale Viewports.
  function responsiveImg(base, alt, sizes, opts) {
    opts = opts || {};
    return (
      '<img src="' + base + '.jpg"' +
      ' srcset="' + base + '-960.jpg 960w, ' + base + '.jpg 1920w"' +
      ' sizes="' + sizes + '"' +
      ' width="1920" height="1280" decoding="async"' +
      (opts.eager ? ' fetchpriority="high"' : ' loading="lazy"') +
      ' alt="' + alt + '">'
    );
  }

  function getPath(obj, path) {
    return path.split(".").reduce(function (acc, key) {
      return acc && acc[key] !== undefined ? acc[key] : undefined;
    }, obj);
  }

  function icon(name) {
    var icons = {
      check:
        '<svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.6 5.6 8.3 14 3.4 9.2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      pin:
        '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="9.5" r="2.4" stroke="currentColor" stroke-width="1.6"/></svg>',
      mail:
        '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" stroke-width="1.6"/><path d="m4 7 8 6 8-6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
      phone:
        '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 4h3l1.5 4.5L9.5 10a10 10 0 0 0 4.5 4.5l1.5-2L20 14v3a2 2 0 0 1-2.2 2A16 16 0 0 1 5 6.2 2 2 0 0 1 7 4Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
      chevron:
        '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="m7 10 5 5 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      mapPin:
        '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="9.5" r="2.4" stroke="currentColor" stroke-width="1.6"/></svg>'
    };
    return icons[name] || "";
  }

  function telLink(number) {
    return '<a href="tel:' + number.replace(/[^\d+]/g, "") + '">' + number + "</a>";
  }

  function mailLink(address) {
    return '<a href="mailto:' + address + '">' + address + "</a>";
  }

  // Eine Zeile pro Kontaktperson: Name + verlinkter Wert (E-Mail bzw. Telefon).
  function peopleLines(dict, linkFn, field) {
    return dict.contact.info.people
      .map(function (p) {
        return '<span class="contact-person">' + p.name + "</span>" + linkFn(p[field]);
      })
      .join("<br>");
  }

  function renderStaticText(dict) {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var value = getPath(dict, el.getAttribute("data-i18n"));
      if (value !== undefined) el.textContent = value;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var value = getPath(dict, el.getAttribute("data-i18n-placeholder"));
      if (value !== undefined) el.setAttribute("placeholder", value);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var value = getPath(dict, el.getAttribute("data-i18n-alt"));
      if (value !== undefined) el.setAttribute("alt", value);
    });
  }

  function renderHeroChips(dict) {
    var wrap = document.querySelector("[data-hero-chips]");
    if (!wrap) return;
    wrap.innerHTML = dict.hero.chips
      .map(function (c) {
        return '<span class="chip">' + c + "</span>";
      })
      .join("");
  }

  function renderFaq(dict) {
    var wrap = document.querySelector("[data-faq]");
    if (!wrap) return;
    wrap.innerHTML = dict.faq.items
      .map(function (item, i) {
        var list = item.list
          ? "<ul>" + item.list.map(function (li) { return "<li>" + li + "</li>"; }).join("") + "</ul>"
          : "";
        return (
          '<div class="faq-item" data-reveal>' +
          '<h3 class="faq-question">' +
          '<button type="button" class="faq-trigger" aria-expanded="false"' +
          ' id="faq-trigger-' + i + '" aria-controls="faq-panel-' + i + '">' +
          "<span>" + item.q + "</span>" +
          '<span class="faq-chevron">' + icon("chevron") + "</span>" +
          "</button></h3>" +
          '<div class="faq-panel" id="faq-panel-' + i + '" role="region" aria-labelledby="faq-trigger-' + i + '">' +
          '<div class="faq-panel-inner"><p>' + item.a + "</p>" + list + "</div>" +
          "</div></div>"
        );
      })
      .join("");
    observeReveal(wrap.querySelectorAll("[data-reveal]"));
  }

  function renderSteps(dict) {
    var wrap = document.querySelector("[data-steps]");
    if (!wrap) return;
    wrap.innerHTML = dict.how.steps
      .map(function (step, i) {
        var media = STEP_IMAGES[i]
          ? '<div class="step-media">' +
            responsiveImg(STEP_IMAGES[i], step.alt, "(max-width: 760px) 100vw, (max-width: 980px) 46vw, 24vw") +
            "</div>"
          : '<div class="step-media step-media-blank" aria-hidden="true">' + icon("check") + "</div>";
        return (
          '<div class="step-card" data-reveal>' +
          media +
          '<div class="step-body">' +
          '<div class="step-number">' + (i + 1) + "</div>" +
          "<h3>" + step.title + "</h3>" +
          "<p>" + step.desc + "</p>" +
          "</div></div>"
        );
      })
      .join("");
    observeReveal(wrap.querySelectorAll("[data-reveal]"));
  }

  function renderUeberUns(dict) {
    var stats = document.querySelector("[data-ueber-uns-stats]");
    if (stats) {
      stats.innerHTML = dict.ueberUns.stats
        .map(function (s) {
          return (
            '<div class="stat-card" data-reveal>' +
            '<div class="stat-value">' + s.value + "</div>" +
            '<div class="stat-label">' + s.label + "</div>" +
            "</div>"
          );
        })
        .join("");
      observeReveal(stats.querySelectorAll("[data-reveal]"));
    }

    var text = document.querySelector("[data-ueber-uns-text]");
    if (text) {
      text.innerHTML = dict.ueberUns.paragraphs
        .map(function (p) { return "<p>" + p + "</p>"; })
        .join("");
    }
  }

  function renderPricing(dict) {
    var wrap = document.querySelector("[data-pricing]");
    if (wrap) {
      wrap.innerHTML = dict.pricing.plans
        .map(function (plan) {
          var badge = plan.highlighted
            ? '<span class="price-badge">' + dict.pricing.popularLabel + "</span>"
            : "";
          var features = plan.features
            .map(function (f) {
              return "<li>" + icon("check") + "<span>" + f + "</span></li>";
            })
            .join("");
          return (
            '<div class="price-card' + (plan.highlighted ? " highlighted" : "") + '" data-reveal>' +
            badge +
            "<h3>" + plan.name + "</h3>" +
            '<div class="price-value"><span class="amount">' + plan.price + '</span><span class="period">' + plan.period + "</span></div>" +
            '<p class="price-desc">' + plan.desc + "</p>" +
            '<ul class="price-features">' + features + "</ul>" +
            '<a href="#contact" class="btn btn-primary btn-block">' + plan.cta + "</a>" +
            "</div>"
          );
        })
        .join("");
      observeReveal(wrap.querySelectorAll("[data-reveal]"));
    }

    var addon = document.querySelector("[data-pricing-addon]");
    if (addon) {
      addon.innerHTML =
        '<div class="pricing-addon-text"><h3>' + dict.pricing.addon.title + "</h3><p>" + dict.pricing.addon.desc + "</p></div>" +
        '<div class="amount">' + dict.pricing.addon.price + "</div>";
    }
  }

  function renderTestimonials(dict) {
    var wrap = document.querySelector("[data-testimonials]");
    if (!wrap) return;
    wrap.innerHTML = dict.testimonials.items
      .map(function (t) {
        var initials = t.name
          .split(" ")
          .map(function (p) { return p.charAt(0); })
          .join("");
        return (
          '<div class="testimonial-card" data-reveal>' +
          '<p class="testimonial-quote">' + t.quote + "</p>" +
          '<div class="testimonial-author">' +
          '<div class="testimonial-avatar">' + initials + "</div>" +
          '<div><div class="name">' + t.name + '</div><div class="role">' + t.role + "</div></div>" +
          "</div></div>"
        );
      })
      .join("");
    observeReveal(wrap.querySelectorAll("[data-reveal]"));
  }

  function renderContactInfo(dict) {
    var wrap = document.querySelector("[data-contact-info]");
    if (wrap) {
      wrap.innerHTML =
        '<div class="contact-info-row"><div class="contact-info-icon">' + icon("pin") + '</div><div><div class="label">' + dict.contact.info.addressLabel + '</div><div class="value">' + dict.contact.info.address + "</div></div></div>" +
        '<div class="contact-info-row"><div class="contact-info-icon">' + icon("mail") + '</div><div><div class="label">' + dict.contact.info.emailLabel + '</div><div class="value">' + peopleLines(dict, mailLink, "email") + "</div></div></div>" +
        '<div class="contact-info-row"><div class="contact-info-icon">' + icon("phone") + '</div><div><div class="label">' + dict.contact.info.phoneLabel + '</div><div class="value">' + peopleLines(dict, telLink, "phone") + "</div></div></div>";
    }

    var map = document.querySelector("[data-map]");
    if (map) {
      map.innerHTML =
        '<div class="map-grid"></div>' +
        '<div class="map-placeholder-content">' + icon("mapPin") +
        '<div class="map-title">' + dict.contact.map.title + "</div>" +
        '<div class="map-note">' + dict.contact.map.note + "</div></div>";
    }
  }

  function renderLegal(dict) {
    var impressum = document.querySelector("[data-legal-impressum]");
    if (impressum) {
      var l = dict.legal.impressum;
      impressum.innerHTML =
        '<h1>' + l.title + "</h1>" +
        '<p class="updated">' + l.updated + "</p>" +
        '<div class="legal-note">' + dict.legal.placeholderNote + "</div>" +
        "<h2>" + l.mediaOwnerTitle + "</h2>" +
        "<p>" + l.mediaOwner.replace(/\n/g, "<br>") + "</p>" +
        "<h2>" + l.contactTitle + "</h2>" +
        dict.contact.info.people.map(function (p) {
          return "<p><strong>" + p.name + "</strong><br>" +
            l.contactEmailLabel + ": " + mailLink(p.email) + "<br>" +
            l.contactPhoneLabel + ": " + telLink(p.phone) + "</p>";
        }).join("") +
        "<h2>" + l.regTitle + "</h2>" +
        "<ul>" + l.regItems.map(function (i) { return "<li>" + i + "</li>"; }).join("") + "</ul>" +
        "<h2>" + l.disputeTitle + "</h2>" +
        "<p>" + l.disputeText + "</p>";
    }

    var datenschutz = document.querySelector("[data-legal-datenschutz]");
    if (datenschutz) {
      var d = dict.legal.datenschutz;
      datenschutz.innerHTML =
        '<h1>' + d.title + "</h1>" +
        '<p class="updated">' + d.updated + "</p>" +
        '<div class="legal-note">' + dict.legal.placeholderNote + "</div>" +
        "<h2>" + d.introTitle + "</h2>" +
        "<p>" + d.introText + "</p>" +
        "<h2>" + d.controllerTitle + "</h2>" +
        "<p>" + d.controllerAddress + " — " + mailLink(d.controllerEmail) + "</p>" +
        "<h2>" + d.formTitle + "</h2>" +
        "<p>" + d.formText + "</p>" +
        "<h2>" + d.cookiesTitle + "</h2>" +
        "<p>" + d.cookiesText + "</p>" +
        "<h2>" + d.rightsTitle + "</h2>" +
        "<p>" + d.rightsText + "</p>";
    }

    document.querySelectorAll("[data-legal-back]").forEach(function (el) {
      el.textContent = dict.legal.backToHome;
    });
  }

  function updateLangToggle(lang) {
    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang-btn") === lang);
    });
  }

  var revealObserver =
    "IntersectionObserver" in window
      ? new IntersectionObserver(
          function (entries) {
            entries.forEach(function (entry) {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                revealObserver.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
        )
      : null;

  function observeReveal(nodeList) {
    if (!revealObserver) {
      nodeList.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    nodeList.forEach(function (el) { revealObserver.observe(el); });
  }

  function applyLanguage(lang) {
    var dict = translations[lang];
    if (!dict) return;
    currentLang = lang;
    document.documentElement.lang = dict.meta.htmlLang;
    renderStaticText(dict);
    renderHeroChips(dict);
    renderSteps(dict);
    renderUeberUns(dict);
    renderPricing(dict);
    renderTestimonials(dict);
    renderFaq(dict);
    renderContactInfo(dict);
    renderLegal(dict);
    updateLangToggle(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  }

  function initLangToggle() {
    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLanguage(btn.getAttribute("data-lang-btn"));
      });
    });
  }

  function initHeaderScroll() {
    var header = document.querySelector(".site-header");
    if (!header) return;
    function update() {
      header.classList.toggle("scrolled", window.scrollY > 8);
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  function initMobileNav() {
    var toggle = document.querySelector("[data-nav-toggle]");
    var nav = document.querySelector("[data-main-nav]");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.classList.toggle("open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Delegiert, damit die Handler einen Sprachwechsel (der die Liste neu rendert) überleben.
  function initFaqAccordion() {
    var list = document.querySelector("[data-faq]");
    if (!list) return;
    list.addEventListener("click", function (e) {
      var trigger = e.target.closest(".faq-trigger");
      if (!trigger || !list.contains(trigger)) return;
      var item = trigger.closest(".faq-item");
      var isOpen = item.classList.toggle("open");
      trigger.setAttribute("aria-expanded", String(isOpen));
    });
  }

  function initContactForm() {
    var form = document.querySelector("[data-contact-form]");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var success = form.querySelector("[data-form-success]");
      var error = form.querySelector("[data-form-error]");
      if (error) error.hidden = true;

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      })
        .then(function (res) {
          if (!res.ok) throw new Error("Request failed");
          if (success) success.classList.add("visible");
          form.reset();
        })
        .catch(function () {
          if (error) error.hidden = false;
        });
    });
  }

  function initStaticReveal() {
    observeReveal(document.querySelectorAll("section [data-reveal]:not([data-steps] *):not([data-pricing] *):not([data-testimonials] *):not([data-faq] *):not([data-ueber-uns-stats] *)"));
  }

  function initFooterYear() {
    var el = document.querySelector("[data-year]");
    if (el) el.textContent = String(new Date().getFullYear());
  }

  document.addEventListener("DOMContentLoaded", function () {
    initLangToggle();
    initHeaderScroll();
    initMobileNav();
    initFaqAccordion();
    initContactForm();
    initFooterYear();
    applyLanguage(currentLang);
    initStaticReveal();
  });
})();
