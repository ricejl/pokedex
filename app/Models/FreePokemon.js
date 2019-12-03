export default class FreePokemon {
  constructor(data) {
    this.name = data.name;
    this.url = data.url;
  }

  get FreePokemonTemplate() {
    return /*html*/ `
    <p>${this.name}</p>`;
  }
}
