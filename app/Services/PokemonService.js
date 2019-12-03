import Store from "../store.js";
import store from "../store.js";

let _pokemonApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  timeout: 3000
});
class PokemonService {
  constructor() {}

  async findPokemonAsync() {
    let res = await _pokemonApi.get("pokemon?limit=20");
    store.commit("pokemon", res.data);
  }
}

const service = new PokemonService();
export default service;
