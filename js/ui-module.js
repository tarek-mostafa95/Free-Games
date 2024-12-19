function displayGames(games) {
  const gamesContainer = document.getElementById("games-container");
  gamesContainer.innerHTML = "";
  games.forEach((game) => {
    const gameElement = document.createElement("div");
    gameElement.classList.add("col-md-6");
    gameElement.classList.add("col-lg-3");
    gameElement.innerHTML = `
        <a id="gameDetails" data-id="${game.id}">
                            <div class="game-card">
                                <div class="card bg-transparent p-2">
                                    <img class="card-img-top" src="${game.imageUrl}" alt="Game Thumbnail">
                                    <div class="card-body text-white">
                                        <div class="d-flex justify-content-between">
                                            <h3 class="card-title ">${game.title}</h3>
                                            <span class="badge free-color p-2">Free</span>
                                        </div>

                                        <p class="card-text  opacity-50 text-center mt-2">
                                        ${game.short_description}
                                        </p>
                                    </div>
                                    <div class="card-footer text-muted d-flex justify-content-between">
                                        <span class="badge  badge-gray"><small class="fa-xs">    ${game.category}</small></span>
                                        <span class="badge  badge-gray"><small class="fa-xs">Pc (Windows)</small></span>
                                    </div>
                                </div>
                            </div>
                        </a>

      `;
    gamesContainer.appendChild(gameElement);
  });
}

function displayGameDetails(gameDetails) {
    
  document.querySelector("#fullscreenModal .modal-body").innerHTML = `
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <img src="${gameDetails.thumbnail}" class="img-fluid" alt="Game Thumbnail">
        </div>
        <div class="col-md-8">
          <h2>Title: ${gameDetails.title}</h2>
          <p>
            Category:
            <span class="badge bg-primary">${gameDetails.genre}</span>
          </p>
          <p>
            Platform:
            <span class="badge bg-primary">${gameDetails.platform}</span>
          </p>
          <p>
            Status:
            <span class="badge bg-primary">${gameDetails.status}</span>
          </p>
          <p>${gameDetails.description}</p>
          <a class="btn btn-outline-warning text-white fw-bold" target="_blank" href="${gameDetails.game_url}">Show Game</a>
        </div>
      </div>
    </div>
  `;

  const modal = new bootstrap.Modal(
    document.getElementById("fullscreenModal")
  );
  modal.show();
}


export {displayGames , displayGameDetails}