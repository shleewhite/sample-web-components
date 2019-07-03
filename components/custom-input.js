let input_template = document.createElement('template');
input_template.innerHTML = `<div>
  <style>
    input, label {
      margin: 1rem;
      margin-left: 0;
    }
    label { font-weight: bold; }
    input { 
      font-size: 0.825rem;
      line-height: 1.5;
      margin-right: 0; 
      padding: 0.25rem;
    }
    input:focus {
      outline: 4px solid purple;
    }
  </style>
</div>`

class CustomInput extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    this._shadowRoot.appendChild(input_template.content.cloneNode(true));
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
        this._shadowRoot.querySelector('div').appendChild(label)
      }
    }

    this._shadowRoot.querySelector('div').appendChild(input)
  }
}

window.customElements.define('custom-input', CustomInput);