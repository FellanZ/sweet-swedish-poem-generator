function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Tadaa, your beautiful poem is here:",
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
