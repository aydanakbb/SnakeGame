class Item {
  public _element: HTMLElement;

  constructor(elementId: string){
  this._element=document.querySelector(`#${elementId}`)!;
  }
 
  get X(): number{
   return this._element.offsetLeft;
  }
  get Y(): number{
   return this._element.offsetTop;
  }
 
  updatePosition(){
   let randomLeft = Math.round(Math.random() * 28) * 10;
   let randomTop = Math.round(Math.random() * 28) * 10;
   this._element.style.left = randomLeft + "px";
   this._element.style.top = randomTop + "px";
  }
 }
 /*
 const item1 = new Item("item"); Biz F5'e bastıkça rastgele bir yere gitmesini istediğimiz için kullanmıştık.
 item1.updatePosition();
 console.log(item1.X, item1.Y);
 */
 
 export default Item;