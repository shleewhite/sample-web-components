let slot2Tmp = document.createElement('template');
slot2Tmp.innerHTML = `
  <div>
    <slot name="first-input"></slot>
  </div>
`;

class InputSlotTest extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    this._shadowRoot.appendChild(slot2Tmp.content.cloneNode(true));
  }
}

window.customElements.define('input-slot-test', InputSlotTest);