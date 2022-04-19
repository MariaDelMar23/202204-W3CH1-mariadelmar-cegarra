import Component from "/js/components/Component.js";

class TitleComponent extends Component{
  text;

  constructor(parentElement, className, nombre, familia){
    super(parentElement, "h2", className);
    this.text = nombre + familia;
  }
}

export default TitleComponent;
