import PokemonService from "../Services/PokemonService.js";
import store from "../store.js";

//Private
function _drawFreePokemon() {
  let template = "";
  let pokemon = store.State.freePokemon;
  console.log("free pokemon:", pokemon);
  pokemon.forEach(p => (template += p.FreePokemonTemplate));
  document.getElementById("free-pokemon").innerHTML = template;
}

function _drawSelectedPokemon() {
  let template = "";
  let pokemon = store.State.pokemon;
  pokemon.forEach(p => (template = p.Template));
  document.getElementById("selected-pokemon").innerHTML = template;
}

//Public
export default class PokemonController {
  constructor() {
    store.subscribe("freePokemon", _drawFreePokemon);
    store.subscribe("pokemon", _drawSelectedPokemon);
  }

  async findPokemonAsync() {
    event.preventDefault();
    try {
      await PokemonService.findPokemonAsync();
    } catch (e) {
      console.error(e);
    }
  }

  async viewPokemonAsync(url) {
    event.preventDefault();
    console.log(url);
    try {
      await PokemonService.viewPokemonAsync(url);
    } catch (e) {
      console.error(e);
    }
  }

  catchPokemon(id) {
    event.preventDefault();
    PokemonService.catchPokemon(id);
  }
}
