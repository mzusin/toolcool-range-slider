const initFixtures = (hooks, html) => {
  hooks.beforeEach(assert => {
    const fixture = `<div id="fixture">${ html }</div>`;
    document.body.insertAdjacentHTML(
      'afterbegin',
      fixture);
  });

  // This will run before the parent module's afterEach
  hooks.afterEach(assert => {
    document.body.removeChild(document.getElementById('fixture'));
  });
};