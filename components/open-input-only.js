let tmp = document.createElement('template');
tmp.innerHTML = `
  <input id="wow" type="text" />
`;

class OpenInputOnly extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    this._shadowRoot.appendChild(tmp.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ['str'];
  }

  get str() {
    return this._shadowRoot.querySelector('input').getAttribute('id');
  }

  set str(val) {
    this._shadowRoot.querySelector('input').setAttribute('id', val);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'str') {
      this.str = newValue;
    }
  }
}

window.customElements.define('open-input-only', OpenInputOnly);