const a11yInputTmp = document.createElement('template');
a11yInputTmp.innerHTML = `
  <input id="camel-wow" type="checkbox" />
  <label for="camel-wow">Sign me up!</label>
`;

class InputAttrA11y extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    this._shadowRoot.appendChild(a11yInputTmp.content.cloneNode(true));
  }

  connectedCallback() {
    this._shadowRoot.querySelector('input').onclick = function () {
      console.log('connectedCallback', this['aria-checked'])
      this['aria-checked'] = !this["aria-checked"];
    }
  }

  get ['aria-checked']() {
    return this._shadowRoot.querySelector('input').hasAttribute('aria-checked');
  }

  set ['aria-checked'](value) {
    console.log('set aria-checked')
    let input = this._shadowRoot.querySelector('input');
    if (input.hasAttribute('aria-checked')) {
      input.removeAttribute('aria-checked');
    } else {
      input.setAttribute('aria-checked', true);
      this['aria-checked'] = true;
      console.log('set aria-checked val', !this['aria-checked'])
    }
  }
}

window.customElements.define('input-attr-a11y', InputAttrA11y);
