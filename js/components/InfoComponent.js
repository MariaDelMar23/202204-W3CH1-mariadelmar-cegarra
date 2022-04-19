import Component from "/js/components/Component.js";

class InfoComponent extends Component {
  edad;
  vivo = true;

  constructor(parentElement, edad, vivo) {
    super(parentElement, "ul", "list-unstyled");

    const age = document.createElement("li");
    age.text = `Edad: ${edad} años`;
    const status = document.createElement("li");

    let vivoStatus = vivo;
    const thumbs = document.createElement("i");

    if (vivoStatus === true) {
      thumbs.className = "fas fa-thumbs-up";
    } else {
      thumbs.className = "fas fa-thumbs-down";
    }

    status.appendChild(thumbs);
  }
}

export default InfoComponent 
