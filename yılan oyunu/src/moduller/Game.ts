import Item from "./Item";
import Snake from "./Snake";
import Status from "./Status";

class Game {
  //Oyun ayarlarının / kurallarının vb. yapıldığı yer.
  gamePlayer: Snake;
  gameItem: Item;
  gameStatus: Status;
  direction: string;
  isGameOver: boolean;

  constructor() {
    this.gamePlayer = new Snake();
    this.gameItem = new Item("item");
    this.gameStatus = new Status();
    this.direction = "";
    this.isGameOver = false;
    this.kontrol();
  }

  kontrol() {
    document.addEventListener("keydown", this.keydownHandler);
  }
  keydownHandler = (event: KeyboardEvent): void => {
    this.direction = event.key;
    !this.isGameOver && this.oyun();
  };

  oyun() {
    try {
      switch (this.direction) {
        case "ArrowLeft":
          this.gamePlayer.X -= 10;
          break;
        case "ArrowRight":
          this.gamePlayer.X += 10;
          break;
        case "ArrowUp":
          this.gamePlayer.Y -= 10;
          break;
        case "ArrowDown":
          this.gamePlayer.Y += 10;
          break;
      }
      console.log(
        this.gamePlayer.X,
        this.gamePlayer.Y,
        this.gameItem.X,
        this.gameItem.Y
      );
    } catch (error) {
      this.isGameOver = true;
      alert("Game is over!");
    }
    this.ustUsteGeldimi(this.gamePlayer.X, this.gamePlayer.Y);
  }
  ustUsteGeldimi(oyuncuPozisyonuX: number, oyuncuPozisyonuY: number) {
    if (
      this.gameItem.X === oyuncuPozisyonuX &&
      this.gameItem.Y === oyuncuPozisyonuY
    ) {
      console.log("Üst üste geldiler.");
      this.gameItem.updatePosition();
      this.gameStatus.skoruArtir();
      this.gamePlayer.ekleVucut();
    }
  }
}
export default Game;