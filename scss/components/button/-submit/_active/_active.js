const submitBtn = document.querySelector(".button-submit_active");
const form = document.querySelector(".card-feedback__form");
const body = document.body;
let rate = null;

const displayOutput = () => {
  // check the current target
  // if the rate button is clicked get its value and store it in a variable
  // otherwise set the rate to null and return the function
  body.onclick = function(e) {
    if (
        e.target.nodeName === "INPUT" &&
        e.target.getAttributeNode("type").value === "button"
        ) {
      rate = e.target.value;
    } else {
      rate = null;
      return;
    }
  }

  submitBtn.addEventListener("click", getRate);

  // if the rate is null
  // exit the function
  // else replace card content
  function getRate() {
    if (rate === null) { return };
    replaceCardContent();
  }

  function replaceCardContent() {
    const card = document.getElementsByClassName("card-feedback")[0];
    const template = document.querySelector("[data-card-output]");
    const clon = template.content.cloneNode(true);

    // remove each child
    for (let i = card.childNodes.length; i > 0; i--) {
      card.removeChild(card.firstChild);
    }

    // add class with styles
    card.classList.add("card-feedback__greetings");

    // append the template
    card.appendChild(clon);

    // display selected value
    document.querySelector("[data-rate]").innerText = rate;
  }
}
displayOutput();

export { displayOutput };
