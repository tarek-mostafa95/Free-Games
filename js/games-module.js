export class Game {
  constructor(id, title, imageUrl , short_description , category) {
    this.id = id;
    this.title =  this.truncateDescription(title, 20);
    this.imageUrl = imageUrl;
    this.short_description = this.truncateDescription(short_description, 80);
    this.category =  category;
  }

  truncateDescription(description, maxLength = 100) {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + '...';  
    }
    return description;
  }

  static async fetchGames(apiUrl, category) {
    const response = await fetch(`${apiUrl}?category=${category}`, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "e940418f22msh19e69ede0b188b9p1fb731jsnfd2737f42b5e",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    });
    const gamesData = await response.json();
    return gamesData.map(
      (game) => new Game(game.id, game.title, game.thumbnail , game.short_description , game.genre)
    );
 
  }
}
