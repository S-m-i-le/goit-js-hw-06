class Storage {
  #items;
  constructor(items) {
    this.#items = items;
    this.newItems = this.newItems;
  }
  // }
  // повертає масив поточних товарів у приватній властивості items.
  getItems() {
    return this.#items;
  }
  //  приймає новий товар newItem і додає його до масиву товарів у приватну властивість items об'єкта.
  addItem(newItem) {
    this.#items.push(newItem);
    return this.#items;
  }
  //  приймає рядок з назвою товару itemToRemove і видаляє його з масиву товарів у приватній властивості items об'єкта.
  removeItem(itemToRemove) {
    this.#items = this.#items.filter(item => item !== itemToRemove);
    return this.#items;
  }
}
const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
