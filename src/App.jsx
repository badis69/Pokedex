import MyTitle from "./components/MyTitle";
import "./App.css";
import MyPokemonCard from "./components/PokemonCard";

function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ]

  return (
    <div>
      {pokemonList.map(i => (<MyPokemonCard pokemonName={i} image= {i} />)
      )}
    </div>
  );
}



export default App;
