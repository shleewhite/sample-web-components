let listItemTmp = document.createElement('template');
listItemTmp.innerHTML = `
  <li></li>
`;

class ListItemImplicit extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    this._shadowRoot.appendChild(listItemTmp.content.cloneNode(true));


  }

  connectedCallback() {
    this._shadowRoot.querySelector('li').textContent = this.getAttribute('content');
  }
}

window.customElements.define('list-item-implicit', ListItemImplicit);