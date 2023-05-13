const words = ["Apple", "Banana", "Cherry", "Dog", "Elephant", "Frog", "Giraffe", "House", "Ice cream", "Jump"];
const randomWordElement = document.getElementById("random-word");
const generateBtn = document.getElementById("generate-btn");

function generateRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  randomWordElement.textContent = words[randomIndex];
}

generateBtn.addEventListener("click", generateRandomWord);