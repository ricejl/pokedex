import store from "../store.js";
import FreePokemon from "../Models/FreePokemon.js";

let _pokemonApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  timeout: 3000
});
class PokemonService {
  constructor() {}

  async findPokemonAsync() {
    let res = await _pokemonApi.get("pokemon?limit=20");
    let freePokemon = res.data.results.map(p => new FreePokemon(p));
    store.commit("freePokemon", freePokemon);
  }
}

const service = new PokemonService();
export default service;
