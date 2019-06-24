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
    this._upgradeProperty('checked')
    //if (document.querySelector('input-attr-a11y').hasAttribute('checked')) {
    //console.log('hasChecked')
    //this._shadowRoot.querySelector('input').checked = document.querySelector('input-attr-a11y').getAttribute('checked');
    // document.querySelector('input-attr-a11y').removeAttribute('aria-checked');
    //}
  }

  _upgradeProperty(prop) {
    if (this.hasOwnProperty(prop)) {
      let value = this[prop];
      console.log(this)
      delete this[prop];
      this[prop] = value;
      // this._shadowRoot.querySelector('input')[prop] = this[prop];
    }
  }

  attributeChangedCallback() {
    console.log('this.checked', this.checked)
    //console.log('somethin changed')
    //if (document.querySelector('input-attr-a11y').hasAttribute('checked')) {
    //console.log('hasChecked')
    // this._shadowRoot.querySelector('input').checked = document.querySelector('input-attr-a11y').getAttribute('checked');
    // document.querySelector('input-attr-a11y').removeAttribute('aria-checked');
    //}
    // if ()
  }

  get checked() {
    return this._shadowRoot.querySelector('input').hasAttribute('checked');
  }

  set checked(value) {
    let input = this._shadowRoot.querySelector('input');
    input.setAttribute('checked', value);
    // if (input.hasAttribute('checked')) {
    //   input.removeAttribute('checked');
    // } else {
    //   input.setAttribute('checked', true);
    //   this['checked'] = true;
    //   console.log('set checked val', !this['checked'])
    // }
  }
}

window.customElements.define('input-attr-a11y', InputAttrA11y);
