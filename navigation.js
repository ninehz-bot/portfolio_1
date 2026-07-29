const pageLinks = [...document.querySelectorAll('.nav-links a')];
const pages = [...document.querySelectorAll('.site-page')];
const refreshNavLabels = () => {
  const labels = document.documentElement.lang === 'zh-CN'
    ? ['关于我', '技能', '旅途', '手作', '经历', '教育']
    : ['about', 'skills', 'stories', 'making', 'work', 'education'];
  pageLinks.forEach((link, index) => { link.textContent = labels[index]; });
};
const showPage = (id) => {
  const target = id || 'home';
  pages.forEach((page) => page.classList.toggle('is-active', page.id === target));
  pageLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${target}`));
  window.scrollTo(0, 0);
};
pageLinks.forEach((link) => link.addEventListener('click', (event) => {
  event.preventDefault();
  const pageId = link.getAttribute('href').slice(1);
  window.location.hash = pageId;
  showPage(pageId);
}));
document.querySelector('.round-link').addEventListener('click', (event) => {
  event.preventDefault();
  window.location.hash = 'about';
  showPage('about');
});
document.querySelector('.logo').addEventListener('click', (event) => {
  event.preventDefault();
  history.replaceState(null, '', window.location.pathname);
  showPage('home');
});
window.addEventListener('hashchange', () => showPage(window.location.hash.slice(1)));
document.querySelector('.language-switch').addEventListener('click', () => refreshNavLabels());
refreshNavLabels();
showPage(window.location.hash.slice(1));
