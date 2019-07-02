class CustomListItem extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
  }

  connectedCallback() {
    let listItem;
    if (this.hasAttribute('isexplicit')) {
      listItem = document.createElement('div');
      listItem.setAttribute('role', 'listitem');
    } else listItem = document.createElement('li');

    listItem.innerHTML = `${this.getAttribute('content')}`

    this._shadowRoot.appendChild(listItem);
  }
}

window.customElements.define('custom-list-item', CustomListItem);