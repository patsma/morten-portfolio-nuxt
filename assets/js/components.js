class HeaderComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    fetch("/components/header.html")
      .then((response) => response.text())
      .then((html) => {
        this.innerHTML = html;
        this.contentLoaded();
      });
  }

  contentLoaded() {
    // Custom event or callback to signal that the content is loaded
    this.dispatchEvent(new CustomEvent("contentloaded"));
  }
}

customElements.define("header-component", HeaderComponent);

class HeroComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    fetch("/components/hero.html")
      .then((response) => response.text())
      .then((html) => {
        this.innerHTML = html;
        this.contentLoaded();
      });
  }

  contentLoaded() {
    // Custom event or callback to signal that the content is loaded
    this.dispatchEvent(new CustomEvent("contentloaded"));
  }
}

customElements.define("hero-component", HeroComponent);

class ThemeToggleSVG extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    fetch("/partials/themeToggle.svg")
        .then((response) => response.text())
        .then((html) => {
          this.innerHTML = html;
          this.contentLoaded();
        });
  }

  contentLoaded() {
    // Custom event or callback to signal that the content is loaded
    this.dispatchEvent(new CustomEvent("contentloaded"));
  }
}

customElements.define("theme-toggle-svg", ThemeToggleSVG);
