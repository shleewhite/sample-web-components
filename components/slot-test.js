let slotTmp = document.createElement('template');
slotTmp.innerHTML = `
  <div role="list">
    <slot name="items"></slot>
  </div>
`;

class SlotTest extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    this._shadowRoot.appendChild(slotTmp.content.cloneNode(true));
  }
}

window.customElements.define('slot-test', SlotTest);