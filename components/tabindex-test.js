let tabTmp = document.createElement('template');
tabTmp.innerHTML = `
  <div>
    <a href="https://www.lightningdesignsystem.com/">Lightning Design System</a>
  </div>
`;

class TabIndexTest extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    this._shadowRoot.appendChild(tabTmp.content.cloneNode(true));


  }

  connectedCallback() {
    // this._shadowRoot.querySelector('div').textContent = this.getAttribute('content');
  }
}

window.customElements.define('tab-index-test', TabIndexTest);