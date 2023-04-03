import App from "../App";


function NavBar ({pokemonIndex,setPokemonIndex}) {
  const incrementPokemon = () => setPokemonIndex (pokemonIndex +1);
  const decrementPokemon = () => setPokemonIndex (pokemonIndex -1);
    return (
        <div>
             <button onClick= {decrementPokemon}> Precedent</button>
      <button onClick= {incrementPokemon}> Suivant</button>
        </div>
    )
}

export default NavBar