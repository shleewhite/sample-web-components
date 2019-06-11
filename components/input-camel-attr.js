const camelInputTmp = document.createElement('template');
camelInputTmp.innerHTML = `
  <input id="camel-wow" type="checkbox" />
  <label for="camel-wow">Sign me up!</label>
`;

class InputCamelAttr extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    this._shadowRoot.appendChild(camelInputTmp.content.cloneNode(true));
  }

  connectedCallback() {
    this._shadowRoot.querySelector('input').setAttribute('aria-checked', this.getAttribute('ariaChecked'));
  }
}

window.customElements.define('input-camel-attr', InputCamelAttr);
