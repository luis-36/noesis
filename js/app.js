/* Noesis — shared helpers (localStorage profile) */
(function () {
  const KEY = "noesis_profile_v1";

  function load() {
    try {
      return JSON.parse(localStorage.getItem(KEY) || "{}");
    } catch {
      return {};
    }
  }

  function save(data) {
    localStorage.setItem(KEY, JSON.stringify(data));
  }

  window.NoesisStore = {
    get() {
      return load();
    },
    setName(name) {
      const d = load();
      d.name = (name || "").trim();
      save(d);
    },
    getName() {
      return load().name || "";
    },
    setResult(slug, result) {
      const d = load();
      d.results = d.results || {};
      d.results[slug] = {
        traitId: result.trait.id,
        traitName: result.trait.name,
        kicker: result.trait.kicker,
        portrait: result.trait.portrait,
        lines: result.trait.lines,
        score: result.score,
        at: Date.now(),
      };
      save(d);
    },
    getResult(slug) {
      return (load().results || {})[slug] || null;
    },
    completedCount() {
      const r = load().results || {};
      return ["vinculo", "mente", "esfera"].filter((s) => r[s]).length;
    },
    clear() {
      localStorage.removeItem(KEY);
    },
  };

  // Update header profile counter on every page
  function updateHeader() {
    const el = document.querySelector("[data-perfil-count]");
    if (el) el.textContent = NoesisStore.completedCount() + " / 3";
  }

  document.addEventListener("DOMContentLoaded", updateHeader);
})();
