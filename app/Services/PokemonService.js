import store from "../store.js";
import FreePokemon from "../Models/FreePokemon.js";
import Pokemon from "../Models/Pokemon.js";

let _pokemonApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  timeout: 3000
});

let _pokemonDetailApi = axios.create({
  baseURL: "",
  timeout: 3000
});

let _sandBox = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/Jenny/pokemon",
  timeout: 3000
});

class PokemonService {
  constructor() {}

  async findPokemonAsync() {
    let res = await _pokemonApi.get("pokemon?limit=20");
    let freePokemon = res.data.results.map(p => new FreePokemon(p));
    store.commit("freePokemon", freePokemon);
  }

  async viewPokemonAsync(url) {
    let res = await _pokemonDetailApi.get(url);
    console.log(res);
    let selectedPokemon = [res.data].map(p => new Pokemon(p));
    store.commit("pokemon", selectedPokemon);
  }

  catchPokemon(id) {
    console.log(id);
    let desiredPokemon = store.State.pokemon.find(p => p._id == id);
    console.log("one to catch:", desiredPokemon);

    _sandBox
      .post("", desiredPokemon)
      .then(res => {
        let pokemon = [...store.State.pokemon, desiredPokemon];
        store.commit("pokemon", pokemon);
      })
      .catch(e => {
        throw e;
      });
  }
}

const service = new PokemonService();
export default service;
