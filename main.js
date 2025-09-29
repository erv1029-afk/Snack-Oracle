import { getRandomSnack, getSnackByIngredient, getSnackByTag } from "./api.js";

import { renderSnack, renderWisdom } from "./ui.js";

const loader = document.getElementById("loader");
const container = document.getElementById("snack-container");
const button = document.getElementById("get-snack-btn");
const ingredientBtn = document.getElementById("search-ingredient-btn");
const tagBtn = document.getElementById("search-tag-btn");

// 🍴 Reveal Random Snack
button.addEventListener("click", async () => {
  await handleSnackFetch(getRandomSnack);
});

// 🧄 Search by Ingredient
ingredientBtn?.addEventListener("click", async () => {
  const ingredientInput = document.getElementById("ingredient-input");
  const ingredient = ingredientInput?.value.trim();
  if (!ingredient) return;
  await handleSnackFetch(() => getSnackByIngredient(ingredient));
});

// 🍰 Filter by Category/Tag
tagBtn?.addEventListener("click", async () => {
  const tagSelect = document.getElementById("tag-select");
  const tag = tagSelect?.value;
  if (!tag) return;
  await handleSnackFetch(() => getSnackByTag(tag));
});

// 🍽️ Shared Fetch Handler
async function handleSnackFetch(fetchFunction) {
  loader.classList.remove("hidden");
  container.innerHTML = "";

  let bounceInterval = setInterval(() => {
    loader.classList.toggle("bounce");
  }, 400);

  try {
    const snack = await fetchFunction();
    renderSnack(snack);
    renderWisdom();
  } catch (error) {
    console.error("Snack fetch failed:", error);
    container.innerHTML = "<p>Oops! Couldn’t load your snack. Try again?</p>";
  } finally {
    clearInterval(bounceInterval);
    loader.classList.add("hidden");
  }

  renderSnack(snack);
  renderWisdom();
}
