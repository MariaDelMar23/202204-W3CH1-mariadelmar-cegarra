import Component from "/js/components/Component.js";

class ButtonComponent extends Component {
  text;

  constructor(parentElement, className, text, action) {
    super(parentElement, "button", className);
    this.element.textContent = text;

    this.element.addEventListener("click", action)
  }
} 

export default ButtonComponent;
