function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

// Function to handle form submission and generate recipe
function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "5fob4d70t464d3dd9fbffb3b3b705a8f";
  let context =
    "You are an expert chef and you are writing recipes. You mission is to generate a simple recipe in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Sign the receipe with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";
  let prompt = `User instructions: Generate a South African recipe about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let receipeElement = document.querySelector("#recipe");
  receipeElement.classList.remove("hidden");
  receipeElement.innerHTML = `<div class="generating"> Generating your recipe... ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayRecipe);
}

// Event listener for form submission
let recipeForm = document.querySelector("#recipe-form");
recipeForm.addEventListener("submit", generateRecipe);
