export default class FreePokemon {
  constructor(data) {
    this.name = data.name;
    this.url = data.url;
  }

  get FreePokemonTemplate() {
    return /*html*/ `
    <button onclick="app.pokemonController.viewPokemonAsync('${this.url}')" class="btn mb-1">${this.name}</button>`;
  }
}
