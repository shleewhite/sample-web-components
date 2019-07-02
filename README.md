# Sample Web Components!

There are a lot of unknowns with web components and shadow DOM, but these test components are meant to help clear some stuff up.

## My Questions
### 1. Can you reference ID's from inside of an open shadow DOM?

No. The browser cannot associate elements across the shadow boundary, even if it is open shadow.

Tested this with the `open-input-only` and `open-input` components.

#### `open-input-only`: Not Accessible
```
<label for="wow">Name</label>
<open-input>
  #shadow-root (open)
    <input id="wow" type="text" />
</open-input>
```

#### `open-input`: Accessible
```
<open-input>
  #shadow-root (open)
    <label for="wow">Name</label>
    <input id="wow" type="text" />
</open-input>
```

### 2. Do implicit HTML roles work with custom elements?

No. Chrome reads the list properly, but Firefox and Safari do not. For now, it seems best to just set them explicitly.

Tested this with the `list-item-implicit` and `list-item-explicit` components.

#### `list-item-implicit`: Not Accessible
```
<ul>
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
</ul>
```

#### `list-item-explicit`: Accessible
```
<div role="list">
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
</div>
```

### 3. What does `tabindex="-1"` do to a custom element with shadow DOM?

Setting `tabindex="-1"` on the custom element, if shadow DOM is enabled, essentially gives everything within the shadow root `tabindex="-1"`.

This seems like an issue for times when you might want to programatically set focus on the custom element and still focus the contents within.

Screen readers and mouse users can still to get to the interactive element, but keyboard only users can't.

Tested with the `tabindex-test` component.

#### `tabindex-test`: Kind of not accessible
```
<tab-index-test tabindex="-1">
  #shadow-root
    <div>
      <a href="https://www.lightningdesignsystem.com/">Lightning Design System</a>
    </div>
</tab-index-test>
```

### 4. [WIP] Can you use global HTML attributes as names for attributes on a custom element to pass information to the shadow tree?

Tentative yes?

Tested with the `input-html-attr` and `input-attr-a11y` components.

### 5. What are HTML slots and templates? What are the differences? What do they do to the DOM and accessibility tree?

Slots and templates are ways of injecting HTML into the custom elements.

Templates put the HTML directly into the shadow DOM but slots put the HTML in the 'light DOM'. Meaning, you can access (with CSS and Javascript) components in slots, but not elements in templates.

Tested with the `slot-test` and `input-slot-test` components.

#### `slot-test`: Accessible
Even though it looks like the list items are outside of the list in the DOM, they are actually there and work.

```
<slot-test>
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
</slot-test>
```

#### `input-slot-test`: Accessible
Since the input is in the light DOM, the label is properly associated with the input.

Notice that I had to add the `slds-input` class to the input. When it is rendered, it had none of the default input styles because it inherited the SLDS styles from the page.

```
<div>
  <label for="custom-id-input">City</label>
  <input-slot-test>
    #shadow-root
      <div>
        <slot name="first-input"></slot>
      </div>
    <input type="text" class="slds-input" id="custom-id-input" slot="first-input">
  </input-slot-test>
</div>
```
