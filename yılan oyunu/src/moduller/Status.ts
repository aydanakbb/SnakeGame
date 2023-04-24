class Status {
  private _scoreElement: HTMLElement;
  private _levelElement: HTMLElement;
  private _scoreValue: number = 0;
  private _levelValue: number = 1;
  private _scoreDivider: number = 5;

  constructor() {
    this._scoreElement = document.querySelector("#score")!;
    this._levelElement = document.querySelector("#level")!;
    this._scoreElement.innerHTML = this._scoreValue.toString();
    this._levelElement.innerHTML = this._levelValue.toString();
  }

  skoruArtir() {
    this._scoreValue++; //this._scoreValue = this._scoreValue+1;
    this._scoreElement.innerHTML = this._scoreValue.toString();
    if (this._scoreValue % this._scoreDivider == 0) {
      this.artirSeviyeyi();
    }
  }

  artirSeviyeyi() {
    this._levelValue++;
    this._levelElement.innerHTML = this._levelValue.toString();
  }
}export default Status;

/*const status1 = new Status(); İlgili blok bizim score ve level değişkenlerini kontrol etmemizi sağlamak amaçlı kurulmuştu.
  
  for (let i = 1; i < 11; i++) {
    status1.skoruArtir();
  }*/

