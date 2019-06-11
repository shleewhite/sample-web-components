const htmlInputTmp = document.createElement('template');
htmlInputTmp.innerHTML = `
  <input id="html-wow" type="checkbox" />
  <label for="html-wow">Sign me up!</label>
`;

class InputHTMLAttr extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    this._shadowRoot.appendChild(htmlInputTmp.content.cloneNode(true));
  }

  connectedCallback() {
    this._shadowRoot.querySelector('input').setAttribute('aria-checked', this.getAttribute('aria-checked'));
  }
}

window.customElements.define('input-html-attr', InputHTMLAttr);
