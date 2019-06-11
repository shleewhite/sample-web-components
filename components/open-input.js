const openTmp = document.createElement('template');
openTmp.innerHTML = `
  <label for="open-wow">Name</label>
  <input id="open-wow" type="text" />
`;

class OpenInput extends HTMLElement {
  constructor() {
    super();
    let shadowRoot = this.attachShadow({ 'mode': 'open' });
    shadowRoot.appendChild(openTmp.content.cloneNode(true));
  }
}

window.customElements.define('open-input', OpenInput);
