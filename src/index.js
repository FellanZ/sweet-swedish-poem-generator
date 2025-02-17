function displayPoem(response) {
  console.log("poem generated");

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "5bcao04ebt34f334cf40357bad5b3bd0";
  let context =
    "You are a fancy and poetic poem writer and love to write short poems. Your mission is to write a 4 line poem in and seperate each line with a <br />, but not after the last sentence. Make sure to follow the user instructions.";
  let prompt = `User instructions: Generate a fancy swedish poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⌛ Generating a sweet Swedish poem about ${instructionsInput.value}...`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
