
// dynamically makes table cells

const examples = [
  {
    name: 'Input & Label: Accessible',
    html: `<open-input></open-input>`,
    renderedHTML: `<open-input>
  #shadow-root (open)
    <label for="open-wow">Name</label>
    <input id="open-wow" type="text" />
</open-input>`
  }, {
    name: 'Input Only: Inaccessible',
    html: `<label for="wow">Name</label>
<open-input-only></open-input-only>`,
    renderedHTML: `<label for="wow">Name</label>
<open-input>
  #shadow-root (open)
    <input id="wow" type="text" />
</open-input>`,
  }, {
    name: 'List with Explicit Roles: Accessible',
    html: `<div role="list">
  <list-item-explicit content="Butter"></list-item-explicit>
  <list-item-explicit content="Sugar"></list-item-explicit>
  <list-item-explicit content="Eggs"></list-item-explicit>
</div>`,
    renderedHTML: `<div role="list">
  <list-item-explicit content="Butter">
    #shadow-root (open)
      <div role="listitem">Butter</div>
  </list-item-explicit>
  <list-item-explicit content="Sugar">
    #shadow-root (open)
      <div role="listitem">Sugar</div>
  </list-item-explicit>
  <list-item-explicit content="Eggs">
    #shadow-root (open)
      <div role="listitem">Eggs</div>
  </list-item-explicit>
</div>`,
  }, {
    name: 'List with Implicit Roles: Inaccessible',
    html: `<ul>
  <list-item-implicit content="Flour"></list-item-implicit>
  <list-item-implicit content="Baking Soda"></list-item-implicit>
  <list-item-implicit content="Salt"></list-item-implicit>
</ul>`,
    renderedHTML: `<ul>
  <list-item-implicit content="Flour">
    #shadow-root (open)
      <li>Flour</li>
  </list-item-implicit>
  <list-item-implicit content="Baking Soda">
    #shadow-root (open)
      <li>Baking Soda</li>
  </list-item-implicit>
  <list-item-implicit content="Salt">
    #shadow-root (open)
      <li>Salt</li>
  </list-item-explicit>
</ul>`,
  }, {
    name: 'Input with Global HTML Attribute Property (no getter/setter): Inaccessible',
    html: `<input-html-attr aria-checked="true"></input-html-attr>`,
    renderedHTML: `<input-html-attr aria-checked="true">
  #shadow-root
    <input type="checkbox" id="html-wow" aria-checked="true"></input>
    <label for="html-wow">Sign me up!</label>
</input-html-attr>`,
  }, {
    name: 'WIP - Input with Camel Case Property: Accessible',
    html: `<input-attr-a11y></input-attr-a11y>`,
    renderedHTML: `<input-attr-a11y ariaChecked="true">
  #shadow-root
    <input type="checkbox" id="camel-wow" aria-checked="true"></input>
    <label for="camel-wow">Sign me up!</label>
</input-attr-a11y>`,
  },
]

$(document).ready(() => {
  let removeTags = (str) => {
    return String(str).replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  for (let i = 0; i < examples.length; i++) {
    $('#table-body').append(`<tr id="row-${i}"></tr>`);
    let row = $(`#row-${i}`);

    row.append(`<th scope="row">${examples[i].name}</th>`);
    row.append(`<td>${examples[i].html}</td>`);
    row.append(`<td>
      <pre><code>${removeTags(examples[i].html)}</code></pre>
    </td>`);
    row.append(`<td>
      <pre><code>${removeTags(examples[i].renderedHTML)}</code></pre>
    </td>`);
  }
});
