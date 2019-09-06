let myTemplate = document.createElement('template');
myTemplate.innerHTML = `<button>Click me!</button>`;

class CustomButton extends HTMLElement {
  constructor() {
    super();
    let shadowRoot = this.attachShadow({ 'mode': 'open' });
    shadowRoot.appendChild(myTemplate.content.cloneNode(true));
  }

  get ['aria-checked']() {
    return this.shadowRoot.querySelector('button').getAttribute('aria-checked');
  }

  set ['aria-checked'](value) {
    this.shadowRoot.querySelector('button').setAttribute('aria-checked', value);
    if (this.hasAttribute('aria-checked')) this.removeAttribute('aria-checked');
  }

  connectedCallback() {
    this['aria-checked'] = this.getAttribute('aria-checked');
  }
}

window.customElements.define('custom-button', CustomButton);