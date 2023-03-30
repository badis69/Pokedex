function MyPokemonCard({pokemonName, image}) {
   /* const pokemon = pokemonList[0]*/
    return( 
<figure>
{image.imgSrc ? <img src={image.imgSrc} alt={pokemonName.name}/> : <p>"???"</p>} 
<figcaption>{pokemonName.name}</figcaption>
</figure>
);
}

export default MyPokemonCard

