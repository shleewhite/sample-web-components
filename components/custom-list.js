let list_template = document.createElement('template');
list_template.innerHTML = `
  <div role="list">
    <slot name="items"></slot>
  </div>
`;

class CustomList extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    this._shadowRoot.appendChild(list_template.content.cloneNode(true));
  }
}

window.customElements.define('custom-list', CustomList);