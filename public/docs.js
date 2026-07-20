(function () {
  const STORAGE_KEY = 'provider.webui.settings';

  function readSettings() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    } catch (err) {
      return {};
    }
  }

  function writeSettings(settings) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  }

  function applyTheme(theme) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const resolved = theme === 'auto' ? (prefersDark ? 'dark' : 'light') : theme;
    document.documentElement.setAttribute('data-theme', resolved);
  }

  function initTheme() {
    const settings = readSettings();
    const theme = settings.theme || 'auto';
    applyTheme(theme);
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.addEventListener('click', function () {
      const current = readSettings().theme || 'auto';
      const next = current === 'light' ? 'dark' : current === 'dark' ? 'auto' : 'light';
      const settingsNext = readSettings();
      settingsNext.theme = next;
      writeSettings(settingsNext);
      applyTheme(next);
      btn.textContent = next === 'auto' ? '主题·自动' : next === 'dark' ? '主题·暗' : '主题·亮';
    });
    const initial = settings.theme || 'auto';
    btn.textContent = initial === 'auto' ? '主题·自动' : initial === 'dark' ? '主题·暗' : '主题·亮';
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
      if ((readSettings().theme || 'auto') === 'auto') applyTheme('auto');
    });
  }

  function initSidebar() {
    const body = document.getElementById('docs-body');
    const toggle = document.getElementById('sidebar-toggle');
    if (!body || !toggle) return;
    toggle.addEventListener('click', function () {
      if (window.innerWidth <= 960) {
        body.classList.toggle('is-sidebar-open');
      } else {
        body.classList.toggle('is-collapsed');
      }
    });
  }

  function slugify(text) {
    return text.trim().toLowerCase().replace(/[^\w\u4e00-\u9fff]+/g, '-').replace(/^-+|-+$/g, '');
  }

  function initToc() {
    const article = document.querySelector('.docs-prose');
    const nav = document.getElementById('docs-toc-nav');
    if (!article || !nav) return;
    const headings = article.querySelectorAll('h2, h3, h4');
    if (!headings.length) {
      document.getElementById('docs-toc').style.display = 'none';
      return;
    }
    const links = [];
    headings.forEach(function (heading) {
      if (!heading.id) heading.id = slugify(heading.textContent || 'section');
      const level = heading.tagName.replace('H', '');
      const link = document.createElement('a');
      link.href = '#' + heading.id;
      link.textContent = heading.textContent;
      link.dataset.level = level;
      nav.appendChild(link);
      links.push({ link: link, heading: heading });
    });
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            links.forEach(function (item) {
              item.link.classList.toggle('is-active', item.heading === entry.target);
            });
          }
        });
      },
      { rootMargin: '-80px 0px -70% 0px', threshold: 0 }
    );
    headings.forEach(function (heading) {
      observer.observe(heading);
    });
  }

  function initSearch() {
    const input = document.getElementById('docs-search-input');
    const results = document.getElementById('docs-search-results');
    const index = window.__DOCS_SEARCH__ || [];
    if (!input || !results) return;
    const render = function (query) {
      results.innerHTML = '';
      if (!query) {
        results.classList.remove('is-open');
        return;
      }
      const q = query.toLowerCase();
      const matched = index.filter(function (item) {
        return item.text.toLowerCase().indexOf(q) >= 0;
      });
      if (!matched.length) {
        results.classList.add('is-open');
        const empty = document.createElement('div');
        empty.style.padding = '12px';
        empty.style.color = 'var(--muted)';
        empty.textContent = '无匹配结果';
        results.appendChild(empty);
        return;
      }
      matched.slice(0, 8).forEach(function (item) {
        const a = document.createElement('a');
        a.href = item.href;
        a.textContent = item.text;
        results.appendChild(a);
      });
      results.classList.add('is-open');
    };
    input.addEventListener('input', function () {
      render(input.value.trim());
    });
    document.addEventListener('click', function (event) {
      if (!results.contains(event.target) && event.target !== input) {
        results.classList.remove('is-open');
      }
    });
  }

  initTheme();
  initSidebar();
  initToc();
  initSearch();
})();
