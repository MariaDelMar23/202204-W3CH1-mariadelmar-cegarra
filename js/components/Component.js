class Component {
  element;

  constructor (parentElement, tag, className) {
    this.element = document.createElement(tag);
    this.element.className = className;
    parentElement.appendChild(this.element);
  }
}

export default Component;
