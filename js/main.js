import { Game } from "./games-module.js";
import { displayGames, displayGameDetails } from "./ui-module.js";
import { GameDetails } from "./details-module.js";

const gamesApiUrl =
  "https://free-to-play-games-database.p.rapidapi.com/api/games";

// Initialize the Spin.js spinner
const loaderTarget = document.querySelector(".loader-container");

async function fetchGamesByCategory(category) {
  loaderTarget.style.display = "flex";

  const games = await Game.fetchGames(gamesApiUrl, category);
  displayGames(games);
  loaderTarget.style.display = "none";

  if (games) {
    const gameDetailsElements = document.querySelectorAll("#gameDetails"); // Get all elements with the ID gameDetails

    gameDetailsElements.forEach((gameDetailsElement) => {
      gameDetailsElement.addEventListener("click", async (event) => {
        event.preventDefault();

        const gameId = event.target.closest("a").getAttribute("data-id");

        fetchGameDetails(gameId).then(gameDetails => displayGameDetails(gameDetails));
        
      });
    });
  }
}

async function fetchGameDetails(gameId) {
  loaderTarget.style.display = "flex";

  const games = await GameDetails.fetchGameDetails(
    "https://free-to-play-games-database.p.rapidapi.com/api/game",
    gameId
  );
  loaderTarget.style.display = "none";

  displayGameDetails(games);
}

const navbarItems = document.querySelectorAll(".nav-item");
navbarItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    navbarItems.forEach((navItem) => navItem.classList.remove("active"));

    item.classList.add("active");

    const selectedCategory = item.id;
    fetchGamesByCategory(selectedCategory);
  });
});

fetchGamesByCategory("mmorpg");

document.querySelector(".btn-close").addEventListener("click", () => {
  modal.hide();
});


document.querySelectorAll('.navbar-nav .nav-link').forEach(item => {
  item.addEventListener('click', () => {
      const navbar = document.querySelector('#navbarSupportedContent');
      
      // Check if the navbar is currently collapsed
      if (window.getComputedStyle(navbar).getPropertyValue('display') === 'block') {
          const bootstrapCollapse = new bootstrap.Collapse(navbar, {
              toggle: true
          });
      }
  });
});