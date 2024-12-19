export class GameDetails {
    constructor(id, title, thumbnail, description, genre ,platform, status ,game_url) {
      this.id = id;
      this.title = title;
      this.thumbnail = thumbnail;
      this.description = description;
      this.genre = genre;
      this.platform = platform;
      this.status = status;
      this.game_url = game_url;
    }
  
    static async fetchGameDetails(apiUrl, id) {
      const response = await fetch(`${apiUrl}?id=${id}`, {
        method: "GET",
        headers: {
          "x-rapidapi-key": "e940418f22msh19e69ede0b188b9p1fb731jsnfd2737f42b5e",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      });
      const gameDetails = await response.json();
  
      console.log(gameDetails);
  
      // Return the game details directly, no need to map
      return new GameDetails(
        gameDetails.id,
        gameDetails.title,
        gameDetails.thumbnail,
        gameDetails.description,
        gameDetails.genre,
        gameDetails.platform,
        gameDetails.status,
        gameDetails.game_url
      );
    }
  }