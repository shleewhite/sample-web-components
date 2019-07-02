class CustomInput extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
  }

  connectedCallback() {
    let input;
    if (this.hasAttribute('useslot')) {
      input = document.createElement('div');
      let slot = document.createElement('slot');
      slot.setAttribute('name', 'input-slot');
      input.appendChild(slot);
    } else {
      input = document.createElement('input');
      input.setAttribute('type', 'text');

      if (this.hasAttribute('cid')) {
        input.setAttribute('id', this.getAttribute('cid'));
      }

      if (this.hasAttribute('label')) {
        let label = document.createElement('label');
        label.innerHTML = `${this.getAttribute('label')}`
        label.htmlFor = this.getAttribute('cid');
        this._shadowRoot.appendChild(label)
      }
    }

    this._shadowRoot.appendChild(input)
  }
}

window.customElements.define('custom-input', CustomInput);