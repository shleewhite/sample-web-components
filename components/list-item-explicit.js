let listItemTmp2 = document.createElement('template');
listItemTmp2.innerHTML = `
  <div role="listitem"></div>
`;

class ListItemExplicit extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    this._shadowRoot.appendChild(listItemTmp2.content.cloneNode(true));


  }

  connectedCallback() {
    this._shadowRoot.querySelector('div').textContent = this.getAttribute('content');
  }
}

window.customElements.define('list-item-explicit', ListItemExplicit);