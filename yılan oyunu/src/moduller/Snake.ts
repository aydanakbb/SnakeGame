class Snake {
  govde: HTMLCollection;
  bas: HTMLElement;
  //neden birisi Element iken diğeri Collection internetten araştır bakalım.

  private _minX: number = 0;//neden 0 ? deneme yanılmayla bul bakalım.
  private _maxX: number = 280;//neden 280 ? deneme yanılmayla bul bakalım.
  private _minY: number = 0;
  private _maxY: number = 280;

  constructor() {
    this.govde = document.getElementById("snake")!.getElementsByTagName("div");
    this.bas = this.govde[0] as HTMLElement;
  }
  get X(): number {
    return this.bas.offsetLeft;
  }
  get Y(): number {
    return this.bas.offsetTop;
  }
  set X(value: number) {
    if (value < this._minX || value > this._maxX) {
      throw new Error("Sınır dışına çıkıldı.");
    }
    this.hareketEt(); //eksik yazılmış, burayı ekledim. Yapılan işlemde hareket ettirilmesi sağlanıyor.
    this.bas.style.left = value + "px";
  }
  set Y(value: number) {
    if (value < this._minY || value > this._maxY) {
      throw new Error("Sınır dışına çıkıldı.");
    }
    this.hareketEt(); //eksik yazılmış, burayı ekledim. Yapılan işlemde hareket ettirilmesi sağlanıyor.
    this.bas.style.top = value + "px";
  }

  ekleVucut() {
    document
      .getElementById("snake")!
      .insertAdjacentHTML("beforeend", "<div></div>");
  }

  hareketEt() { //Bu fonksiyon olmasa ne olacak? Tamam hareket etmeyecek diye düşünebilirsin fakat sen olsan nasıl yazardın? 
                //Burada kritik bir durum var onu görmeni istiyorum. Göremezsen gelecek hafta sorabilirsin.
    for (let i = this.govde.length - 1; i > 0; i--) {
      let tempPositionX = (this.govde[i - 1] as HTMLElement).offsetLeft;
      let tempPositionY = (this.govde[i - 1] as HTMLElement).offsetTop;
      (this.govde[i] as HTMLElement).style.left = tempPositionX + "px";
      (this.govde[i] as HTMLElement).style.top = tempPositionY + "px";
    }
  }
}export default Snake;
