const includeHTML = async () => {
  const placeholders = document.querySelectorAll("[data-component]");
  await Promise.all(
    Array.from(placeholders).map(async (el) => {
      const file = el.dataset.component;
      if (!file) return;
      try {
        const res = await fetch(`components/${file}.html`);
        if (!res.ok) return;
        el.innerHTML = await res.text();
      } catch (err) {
        console.error("Component load failed", err);
      }
    })
  );

  const currentPage = document.body.dataset.page;
  if (currentPage) {
    document.querySelectorAll(".tab-link").forEach((link) => {
      const isActive = link.dataset.page === currentPage;
      link.classList.toggle("bg-accent", isActive);
      link.classList.toggle("text-ink", isActive);
      link.classList.toggle("border", !isActive);
      link.classList.toggle("border-slate-300/60", !isActive);
      link.classList.toggle("dark:border-white/20", !isActive);
      link.classList.toggle("text-slate-500", !isActive);
      link.classList.toggle("dark:text-white/70", !isActive);
    });
  }

  document.body.classList.add("page-transition");
  requestAnimationFrame(() => {
    document.body.classList.add("is-ready");
  });

  document.querySelectorAll("a[href]").forEach((link) => {
    if (link.target === "_blank") return;
    const url = new URL(link.href, window.location.href);
    if (url.origin !== window.location.origin) return;
    link.addEventListener("click", (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      document.body.classList.remove("is-ready");
      window.setTimeout(() => {
        window.location.href = url.href;
      }, 250);
    });
  });
};

includeHTML();
