/* ============================================================
   ACTUEL — Moteur de rendu (vanilla JS, sans dépendance)
   ------------------------------------------------------------
   data.js doit être chargé AVANT ce fichier.
   Ce script gère les trois pages :
   - index.html    : ticker + sections par rubrique
   - category.html : listing d'une rubrique (?cat=xxx)
   - article.html  : article complet (?id=xxx) + "à lire aussi"
   Plus le chrome commun : date du jour, menu burger,
   formulaire newsletter.
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Utilitaires ---------- */

  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $all(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function getParam(name) {
    var m = new RegExp("[?&]" + name + "=([^&#]*)").exec(window.location.search);
    return m ? decodeURIComponent(m[1].replace(/\+/g, " ")) : null;
  }

  function formatDate(iso) {
    try {
      var d = new Date(iso + "T12:00:00");
      return new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long", year: "numeric" }).format(d);
    } catch (e) { return iso; }
  }

  function catLabel(slug) {
    return (typeof CATEGORIES !== "undefined" && CATEGORIES[slug]) || slug;
  }

  function articleById(id) {
    id = parseInt(id, 10);
    for (var i = 0; i < ARTICLES.length; i++) {
      if (ARTICLES[i].id === id) return ARTICLES[i];
    }
    return null;
  }

  function articlesIn(slug) {
    return ARTICLES.filter(function (a) { return a.category === slug; });
  }

  function latest(n) {
    return ARTICLES.slice().sort(function (a, b) {
      return b.date.localeCompare(a.date) || b.id - a.id;
    }).slice(0, n);
  }

  /* ---------- Chrome commun ---------- */

  // Date du jour dans la barre utilitaire
  (function liveDate() {
    var el = $("#live-date");
    if (!el) return;
    var now = new Date();
    el.textContent = new Intl.DateTimeFormat("fr-FR", {
      weekday: "long", day: "numeric", month: "long", year: "numeric"
    }).format(now);
  })();

  // Menu burger / tiroir mobile
  (function drawer() {
    var burger = $("#burger"), panel = $("#drawer"), close = $("#drawer-close");
    if (!burger || !panel) return;
    function open() { panel.classList.add("open"); }
    function shut() { panel.classList.remove("open"); }
    burger.addEventListener("click", open);
    if (close) close.addEventListener("click", shut);
    panel.addEventListener("click", function (e) {
      if (e.target === panel || e.target.tagName === "A") shut();
    });
  })();

  // Lien actif dans la navigation
  (function activeNav() {
    var cat = getParam("cat");
    var id = getParam("id");
    var links = $all(".main-nav a, .drawer nav a");
    links.forEach(function (a) {
      a.classList.remove("active");
      var href = a.getAttribute("href") || "";
      if (cat && href.indexOf("cat=" + cat) !== -1) a.classList.add("active");
      else if (!cat && !id && href === "index.html") a.classList.add("active");
    });
  })();

  // Newsletter : confirmation sans backend (à brancher plus tard)
  (function newsletter() {
    var form = $("#newsletter-form");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var input = form.querySelector('input[type="email"]');
      var email = input ? input.value.trim() : "";
      form.innerHTML =
        '<p style="font-weight:600;">Merci ! L\'adresse <strong>' + esc(email) +
        '</strong> est bien enregistrée. À demain matin dans votre boîte mail.</p>';
    });
  })();

  /* ---------- Bandeau publicitaire ---------- */
  (function ads() {
    var track = document.getElementById("ads-track");
    if (!track || typeof ADS === "undefined" || !ADS.length) return;
    var html = ADS.map(function (ad) {
      return '<div class="ad-card">' +
        '<div class="ad-name">' + esc(ad.name) + '</div>' +
        '<div class="ad-text">' + esc(ad.text) + '</div>' +
        '<a class="ad-cta" href="' + esc(ad.link || "#") + '">' +
          esc(ad.cta || "En savoir plus") + ' &rarr;</a>' +
      '</div>';
    }).join("");
    track.innerHTML = html + html; /* doublé pour la boucle infinie */
  })();

  /* ---------- Blocs de rendu ---------- */

  function thumbHTML(a, cls) {
    if (a.image) {
      return '<div class="' + (cls || "thumb") + '"><img src="' + esc(a.image) +
             '" alt="' + esc(a.title) + '" loading="lazy"></div>';
    }
    return '<div class="' + (cls || "thumb") + '"></div>';
  }

  function cardHTML(a) {
    return '' +
      '<a class="card" href="article.html?id=' + a.id + '">' +
        thumbHTML(a) +
        '<div class="body">' +
          '<span class="badge">' + esc(catLabel(a.category)) + '</span>' +
          '<h3>' + esc(a.title) + '</h3>' +
          '<p>' + esc(a.excerpt) + '</p>' +
          '<div class="meta">' + esc(formatDate(a.date)) + ' &middot; ' + a.readTime + ' min de lecture</div>' +
        '</div>' +
      '</a>';
  }

  function sectionHTML(slug, articles, alt) {
    var cards = articles.map(cardHTML).join("");
    return '' +
      '<section class="cat-section' + (alt ? " alt" : "") + '">' +
        '<div class="container">' +
          '<div class="section-head">' +
            '<h2>' + esc(catLabel(slug)) + '</h2>' +
            '<a class="see-all" href="category.html?cat=' + esc(slug) + '">Tout voir &rarr;</a>' +
          '</div>' +
          '<div class="cards">' + cards + '</div>' +
        '</div>' +
      '</section>';
  }

  /* ---------- Page d'accueil ---------- */

  (function home() {
    var mount = $("#category-sections");
    if (!mount) return;

    // Ticker : les 4 derniers titres
    var ticker = $("#ticker-items");
    if (ticker) {
      ticker.innerHTML = latest(4).map(function (a) {
        return "<span>" + esc(a.title) + "</span>";
      }).join("");
    }

    // Le hero codé en dur montre déjà les ids 1 à 5 : on les exclut des sections
    var heroIds = {};
    $all(".hero-main, .hero-card").forEach(function (el) {
      var m = /article\.html\?id=(\d+)/.exec(el.getAttribute("href") || "");
      if (m) heroIds[m[1]] = true;
    });

    var html = "";
    var slugs = Object.keys(CATEGORIES);
    var alt = false;
    slugs.forEach(function (slug) {
      var list = articlesIn(slug).filter(function (a) { return !heroIds[a.id]; }).slice(0, 3);
      if (!list.length) return;
      html += sectionHTML(slug, list, alt);
      alt = !alt;
    });
    mount.innerHTML = html;
  })();

  /* ---------- Page rubrique ---------- */

  var CAT_DESCRIPTIONS = {
    politique:     "Institutions, élections et vie publique au Togo.",
    economie:      "Affaires, agriculture, fintech et grands projets.",
    societe:       "Le quotidien des Togolais, éducation et cadre de vie.",
    culture:       "Arts, traditions, cinéma et événements culturels.",
    sport:         "Football, basketball et tous les terrains du Togo.",
    technologie:   "Numérique, IA, télécoms et innovation.",
    international: "L'Afrique de l'Ouest et le monde, vus depuis Lomé.",
    diaspora:      "Les Togolais d'ici et d'ailleurs.",
    sante:         "Santé publique, prévention et système de soins."
  };

  (function categoryPage() {
    var mount = $("#cat-cards");
    if (!mount) return;

    var slug = getParam("cat");
    var label = catLabel(slug);

    var title = $("#cat-title");
    var desc = $("#cat-desc");
    if (title) title.textContent = label;
    if (desc) desc.textContent = CAT_DESCRIPTIONS[slug] || "Tous les articles de cette rubrique.";
    document.title = label + " — ACTUEL";

    // Pastilles de navigation entre rubriques
    var chips = $("#filter-chips");
    if (chips) {
      chips.innerHTML = Object.keys(CATEGORIES).map(function (s) {
        var cls = s === slug ? ' class="active"' : "";
        return '<a href="category.html?cat=' + esc(s) + '"' + cls + '>' + esc(catLabel(s)) + '</a>';
      }).join("");
    }

    var list = slug ? articlesIn(slug) : [];
    mount.innerHTML = list.length
      ? list.map(cardHTML).join("")
      : '<p>Aucun article dans cette rubrique pour le moment.</p>';
  })();

  /* ---------- Page article ---------- */

  (function articlePage() {
    var mount = $("#article-content");
    if (!mount) return;

    var a = articleById(getParam("id"));
    if (!a) {
      mount.innerHTML = '<p>Article introuvable. <a href="index.html">Retour à l\'accueil</a>.</p>';
      return;
    }

    document.title = a.title + " — ACTUEL";

    var paras = a.body.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");

    var tags = (a.tags || []).map(function (t) {
      return '<span class="badge">' + esc(t) + "</span>";
    }).join("");

    var pageUrl = encodeURIComponent(window.location.href);
    var shareText = encodeURIComponent(a.title);

    mount.innerHTML = '' +
      '<nav class="breadcrumb"><a href="index.html">Accueil</a> &rsaquo; ' +
        '<a href="category.html?cat=' + esc(a.category) + '">' + esc(catLabel(a.category)) + '</a> &rsaquo; Article</nav>' +
      '<span class="badge">' + esc(catLabel(a.category)) + '</span>' +
      '<h1>' + esc(a.title) + '</h1>' +
      '<div class="byline">' +
        '<span class="author">Par ' + esc(a.author) + '</span>' +
        '<span class="meta">' + esc(formatDate(a.date)) + ' &middot; ' + a.readTime + ' min de lecture</span>' +
      '</div>' +
      '<div class="article-hero">' + thumbHTML(a, "article-image") + '</div>' +
      '<div class="article-body">' + paras + '</div>' +
      (tags ? '<div class="tags">' + tags + '</div>' : "") +
      '<div class="share-row">' +
        '<span>Partager :</span> ' +
        '<a href="https://wa.me/?text=' + shareText + '%20' + pageUrl + '" target="_blank" rel="noopener">WhatsApp</a> ' +
        '<a href="https://www.facebook.com/sharer/sharer.php?u=' + pageUrl + '" target="_blank" rel="noopener">Facebook</a> ' +
        '<a href="https://twitter.com/intent/tweet?text=' + shareText + '&url=' + pageUrl + '" target="_blank" rel="noopener">X</a>' +
      '</div>';

    // À lire aussi : même rubrique, autres articles
    var rel = $("#related-cards");
    if (rel) {
      var others = articlesIn(a.category).filter(function (x) { return x.id !== a.id; }).slice(0, 3);
      rel.innerHTML = others.map(cardHTML).join("");
    }
  })();

})();
