import Component from "/js/components/Component.js";

class ImageComponent extends Component {
  alt;
  src;

  constructor(parentComponent, className, alt, src) {
    super(parentComponent, "img", className);
    this.element.src = src;
    this.element.alt = alt;
  }
}

export default ImageComponent;
