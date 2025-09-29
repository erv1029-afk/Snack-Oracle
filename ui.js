export function renderSnack(snack) {
  const container = document.getElementById('snack-container');
  container.innerHTML = `
    <h2>${snack.title}</h2>
    <img src="${snack.image}" alt="${snack.title}" />
    <p>${snack.summary}</p>
    <div class="spice-trail">🌶️🧄🧂🍋</div>
  `;
}

const wisdoms = [
  "A good snack is a small act of self-love 🍫",
  "Balance flavor with feeling 🥢",
  "Even crumbs can be comforting 🍞",
  "The best snacks are shared 🍋",
  "Spices are tiny storytellers 🌶️",
  "Even the smallest bite can spark the biggest joy 🍪" ,
  "A well-timed treat is the universe saying, You’ve got this 🍫"

];

export function renderWisdom() {
  const text = document.getElementById('wisdom-text');
  const random = wisdoms[Math.floor(Math.random() * wisdoms.length)];
  text.textContent = random;
}