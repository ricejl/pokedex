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

//Public
export default class PokemonController {
  constructor() {
    store.subscribe("freePokemon", _drawFreePokemon);
  }

  async findPokemonAsync() {
    event.preventDefault();
    try {
      await PokemonService.findPokemonAsync();
    } catch (e) {
      console.error(e);
    }
  }
}
