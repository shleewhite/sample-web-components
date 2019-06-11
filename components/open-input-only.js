let tmp = document.createElement('template');
tmp.innerHTML = `
  <input id="wow" type="text" />
`;

class OpenInputOnly extends HTMLElement {
  constructor() {
    super();
    let shadowRoot = this.attachShadow({ 'mode': 'open' });
    shadowRoot.appendChild(tmp.content.cloneNode(true));
  }
}

window.customElements.define('open-input-only', OpenInputOnly);