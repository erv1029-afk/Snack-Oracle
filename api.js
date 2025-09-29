const API_KEY = '7c76e66ba7014fe6b0277fadb5908b92';
const BASE_URL = 'https://api.spoonacular.com';


// 🧁 Get one random snack
export async function getRandomSnack() {
  try {
    const response = await fetch(`${BASE_URL}/recipes/random?number=1&apiKey=${API_KEY}`);
    const data = await response.json();
    return data.recipes[0];
  } catch (error) {
    console.error('Snack fetch failed:', error);
    return {
      title: 'Snack not found',
      image: 'https://via.placeholder.com/300?text=No+Snack',
      summary: "We couldn't fetch a snack right now. Try again later! 🍪"
    };
  }
}

// 🧄 Search snack by ingredient
export async function getSnackByIngredient(ingredient) {
  try {
    const response = await fetch(
      `${BASE_URL}/recipes/findByIngredients?ingredients=${ingredient}&number=1&apiKey=${API_KEY}`
    );
    const data = await response.json();
    return {
      title: data[0].title,
      image: data[0].image,
      summary: `Made with ${ingredient}. A tasty choice! 🧄🍞`
    };
  } catch (error) {
    console.error('Ingredient search failed:', error);
    return {
      title: 'No snack found',
      image: 'https://via.placeholder.com/300?text=No+Snack',
      summary: 'Try a different ingredient! 🥕🍞'
    };
  }
}

// 🍰 Filter snack by category/tag
export async function getSnackByTag(tag) {
  try {
    const response = await fetch(
      `${BASE_URL}/recipes/random?number=1&tags=${tag}&apiKey=${API_KEY}`
    );
    const data = await response.json();
    return data.recipes[0];
  } catch (error) {
    console.error('Tag search failed:', error);
    return {
      title: 'No snack found',
      image: 'https://via.placeholder.com/300?text=No+Snack',
      summary: 'Try a different category! 🍰🥗'
    };
  }
}