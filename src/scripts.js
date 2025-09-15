// Function to handle form submission and generate recipe
function generateRecipe() {
  event.preventDefault();

  new Typewriter("#recipe-result", {
    Strings: ["Generating your recipe..."],
    autoStart: true,
    delay: 1,
    cursor: "",
    loop: false,
  });
}

// Event listener for form submission
let recipeForm = document.querySelector("#recipe-form");
recipeForm.addEventListener("submit", generateRecipe);
