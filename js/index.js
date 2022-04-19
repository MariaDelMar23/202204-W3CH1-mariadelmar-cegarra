import personajes from "/js/personajes.js";
import Component from "/js/components/Component.js";
import ImageComponent from "/js/components/ImageComponent.js"
import InfoComponent from "/js/components/InfoComponent.js";
import ButtonComponent from "/js/components/ButtonComponent.js";

const container = document.querySelector(".container");
const charactersList = new Component(
  container,
  "ul",
  "characters-list row list-unstyled"
);
container.appendChild(charactersList.element);

personajes.forEach((personaje) => {
  const card = new Component(charactersList.element, "div", "app container");
  const characterCol = new Component(card.element, "li", "character col");

  const characterCard = new Component(
    characterCol.element,
    "div",
    "card character__card"
  );

  const imageCard = new ImageComponent(
    characterCard.element,
    "character__picure card-img-top",
    `${personaje.nombre} ${personaje.familia}`,
    `img/'${personaje.nombre}'.jpg`
  );

  const cardBody = new Component(characterCard.element, "div", "card-body");

  const characterInfo = new Component(cardBody.element, "div", "character__info");

  const infoList = new InfoComponent(characterInfo.element, personaje.edad, personaje.vivo);

  const overlay = new Component(cardBody.element, "div", "character__overlay");

  const listOverlay = new Component(overlay.element, "ul", "list-unstyled");

  const emoji = new Component(characterCard, "i", "emoji")
  if (personajes.constructor.name === "Rey"){
    const años = new Component(listOverlay.element, "li", "");
    años.text = `Años de reinado: ${personaje.anyosReinado}`;
    emoji.text = "👑"
  }
  if (personajes.constructor.name === "Luchador"){
    const arma = new Component(listOverlay.element, "li", "");
    const destreza = new Component(listOverlay.element, "li", "");
    arma.text = `Arma: ${personaje.arma}`;
    destreza.text = `Destreza: ${personaje.destreza}`
    emoji.text = "🗡"
  }
  if (personajes.constructor.name === "Escudero"){
    const sirveA = new Component(listOverlay.element, "li", "");
    const pelotismo = new Component(listOverlay.element, "li", "");
    años.sirveA = `Sirve a: '${personaje.sirveA.nombre}' '${personaje.sirveA.familia}'`;
    años.pelotismo= `Peloteo: ${personaje.pelotismo}`;
    emoji.text = "🛡"
  }
  if (personajes.constructor.name === "Asesor"){
    const asesorado = new Component(listOverlay.element, "li", "");
    años.asesorado = `Sirve a: ${personaje.asesorado}`;
    emoji.text = "🎓"
  }

  const actions = new Component (overlay, "div", "character__actions");

  const buttonHabla = new ButtonComponent(actions.element, "character__action btn", "Habla", comunicar)
  const buttonMuere = new ButtonComponent(actions.element, "character__action btn", "Muere", matar)

  

});
