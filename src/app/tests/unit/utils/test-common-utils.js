class TestCommonUtils {
  constructor(wrapper, expect) {
    this.wrapper = wrapper
    this.expect = expect
  }

  // find
  find(selector) {
    return this.wrapper.find(selector)
  }

  // text visibility
  see(text, selector) {
    let wrap = selector ? this.wrapper.find(selector) : this.wrapper
    this.expect(wrap.html()).toContain(text)
  }

  seeInWrappers(text, selector) {
    let wrappers = this.wrapper.findAll(selector);
    let html = '';
    for (let i in wrappers.wrappers){
      html += wrappers.wrappers[i].html();
    }
    this.expect(html).toContain(text);
  }

  doNotseeInWrappers(text, selector) {
    let wrappers = this.wrapper.findAll(selector);
    let html = '';
    for (let i in wrappers.wrappers){
      html += wrappers.wrappers[i].html();
    }
    this.expect(html).not.toContain(text);
  }
  doNotSee(text) {
    this.expect(this.wrapper.html()).not.toContain(text)
  }

  // element visibility
  isVisible(selector) {
    this.expect().not.toEqual('none')
  }
  isHidden(selector) {
    this.expect(this.find(selector).element.style.display).toEqual('none')
  }

  // existence
  domHas(selector) {
    this.expect(this.wrapper.contains(selector)).toBe(true)
  }
  domHasNot(selector) {
    this.expect(this.wrapper.contains(selector)).toBe(false)
  }

  // mouse
  click(selector) {
    this.wrapper.find(selector).trigger('click')
  }
  hover(selector) {
    this.wrapper.find(selector).trigger('mouseover')
  }

  // input
  type(text, input) {
    let node = this.wrapper.find(input)
    node.setValue(text)
    node.trigger('input')
  }
  inputChange(text, input) {
    let node = this.find(input)
    node.element.value = text
    node.trigger('input')
    this.wrapper.find(input).trigger('keyup');
  }
  inputBlur(text, input) {
    let node = this.find(input)
    node.element.value = text
    node.trigger('input')
    this.wrapper.find(input).trigger('blur');
  }
  inputValueIs(text, selector) {
    this.expect(this.find(selector).element.value).toBe(text)
  }
  inputValueIsNot(text, selector) {
    this.expect(this.find(selector).element.value).not.toBe(text)
  }
  domHasLength(selector, length) {
    this.expect(this.wrapper.findAll(selector).length).toBe(length)
  }

  // check class or attribute
  hasClass(selector, className) {
    return this.expect(this.wrapper.find(selector).classes()).toContain(className);
  }
  hasNotClass(selector, className) {
    return this.expect(this.wrapper.find(selector).classes()).not.toContain(className);
  }
  hasAttribute(selector, attribute) {
    return this.expect(this.wrapper.find(selector).attributes()[attribute]).toBeTruthy()
  }
  attributeEqualTo(selector, attribute, expected) {
    return this.expect(this.wrapper.find(selector).attributes()[attribute]).toBe(expected);
  }
}

export default TestCommonUtils
