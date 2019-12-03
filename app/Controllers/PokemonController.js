import PokemonService from "../Services/PokemonService.js";
import store from "../store.js";

//Private
function _draw() {
  let pokemon = store.State.pokemon;
  console.log(pokemon);
}

//Public
export default class PokemonController {
  constructor() {
    store.subscribe("pokemon", _draw);
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
