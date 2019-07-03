const examples = [
  {
    name: 'Input & Label: Accessible',
    html: `<custom-input cid="input-1" label="First Name"></custom-input>`,
    renderedHTML: `<custom-input>
  #shadow-root (open)
    <label for="input-1">First Name</label>
    <input id="input-1" type="text" />
</custom-input>`
  }, {
    name: 'Input Only: Inaccessible',
    html: `<label for="input-2" class="custom-label">Last Name</label>
<custom-input cid="input-2"></custom-input>`,
    renderedHTML: `<label for="input-2" class="custom-label">Last Name</label>
<custom-input>
  #shadow-root (open)
    <input id="input-1" type="text" />
</custom-input>`,
  }, {
    name: 'List with Explicit Roles: Accessible',
    html: `<div role="list">
  <custom-list-item content="Butter" isexplicit></custom-list-item>
  <custom-list-item content="Sugar" isexplicit></custom-list-item>
  <custom-list-item content="Eggs" isexplicit></custom-list-item>
</div>`,
    renderedHTML: `<div role="list">
  <custom-list-item content="Butter" isexplicit>
    #shadow-root (open)
      <div role="listitem">Butter</div>
  </custom-list-item>
  <custom-list-item content="Sugar" isexplicit>
    #shadow-root (open)
      <div role="listitem">Sugar</div>
  </custom-list-item>
  <custom-list-item content="Eggs" isexplicit>
    #shadow-root (open)
      <div role="listitem">Eggs</div>
  </custom-list-item>
</div>`,
  }, {
    name: 'List with Implicit Roles: Inaccessible',
    html: `<ul>
  <custom-list-item content="Flour"></custom-list-item>
  <custom-list-item content="Baking Soda"></custom-list-item>
  <custom-list-item content="Salt"></custom-list-item>
</ul>`,
    renderedHTML: `<ul>
  <custom-list-item content="Flour">
    #shadow-root (open)
      <li>Flour</li>
  </custom-list-item>
  <custom-list-item content="Baking Soda">
    #shadow-root (open)
      <li>Baking Soda</li>
  </custom-list-item>
  <custom-list-item content="Salt">
    #shadow-root (open)
      <li>Salt</li>
  </custom-list-item>
</ul>`,
  }, {
    name: 'Custom Element with Tab Index -1',
    html: `<custom-input cid="input-4" label="Favorite Color" tabindex="-1"></custom-input>`,
    renderedHTML: `<custom-input tabindex="-1">
  #shadow-root (open)
    <label for="input-4">Favorite Color</label>
    <input id="input-4" type="text" />
</custom-input>`,
  }, {
    name: 'Slot Test: Accessible',
    html: `<custom-list>
  <div role="listitem" slot="items">zumba 1</div>
  <div role="listitem" slot="items">zumba 2</div>
  <div role="listitem" slot="items">zumba 3</div>
</custom-list>`,
    renderedHTML: `<custom-list>
  #shadow-root
    <div role="list">
      <slot name="items">
        #div
        #div
        #div
      </slot>
    </div>
  <div role="listitem" slot="items">zumba 1</div>
  <div role="listitem" slot="items">zumba 2</div>
  <div role="listitem" slot="items">zumba 3</div> 
</custom-list>`,
  }, {
    name: 'Input Slot Test: Accessible',
    html: `<div>
  <label for="input-5" class="custom-label">City</label>
  <custom-input useslot>
    <input type="text" class="slds-input" id="input-5" slot="input-slot"/>
  </custom-input>
</div>`,
    renderedHTML: `<div>
  <label for="input-5" class="custom-label">City</label>
  <custom-input>
    #shadow-root
      <div>
        <slot name="input-slot">
          #input
        </slot>
      </div>
    <input type="text" class="slds-input" id="input-5" slot="input-slot">
  </custom-input>
</div>`,
  }, {
    name: 'Input w/ Shadow Boundary Slot Test: Inaccessible',
    html: `<div>
  <label for="input-3" class="custom-label" class="custom-label">State</label>
  <input-slot-test>
    <custom-input cid="input-3" slot="first-input"></custom-input>
  </input-slot-test>
</div>`,
    renderedHTML: `<div>
  <label for="input-3">State</label>
  <input-slot-test>
    #shadow-root (open)
      <div>
        <slot name="first-input">
          #custom-input
        </slot>
      </div>
    <custom-input>
      #shadow-root (open)
        <input id="input-3" type="text" />
    </custom-input>
  </input-slot-test>
</div>`,
  }, {
    name: 'List w/ Slot and Shadow Boundary: Accessible',
    html: `<custom-list>
  <custom-list-item content="Water" isexplicit slot="items"></custom-list-item>
  <custom-list-item content="Milk" isexplicit slot="items"></custom-list-item>
  <custom-list-item content="Juice" isexplicit slot="items"></custom-list-item>
</custom-list>`,
    renderedHTML: `<custom-list>
  #shadow-root
    <div role="list">
      <slot name="items">
        #custom-list-item
        #custom-list-item
        #custom-list-item
      </slot>
    </div>  
  <custom-list-item content="Water" isexplicit slot="items">
    #shadow-root (open)
      <div role="listitem">Water</div>
  </custom-list-item>
  <custom-list-item content="Milk" isexplicit slot="items">
    #shadow-root (open)
      <div role="listitem">Water</div>
  </custom-list-item>
  <custom-list-item content="Juice" isexplicit slot="items">
    #shadow-root (open)
      <div role="listitem">Juice</div>
  </custom-list-item>
</custom-list>`,
  }
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
