export const PokemonCard = ({pokemonData}) =>{
    return (
        
        <li className="pokemon-card">
        <figure>
            <img 
            src={pokemonData.sprites.other.home.front_shiny} 
            alt={pokemonData.name} 
            className="pokemon-image" />
        </figure>
        <h1 className="pokemon-name">{pokemonData.name}</h1>
        <div className="pokemon-info pokemon-highlight">
            <p>
                {pokemonData.types
                .map((curType) =>curType.type.name).join(" , ")}
            </p>
        </div>

        <div className="grid-three-cols">
            <p className="pokemon-info">
                <span>Height:</span>{pokemonData.height}
            </p>
            <p className="pokemon-info">
                <span>Weight:</span>{pokemonData.weight}
            </p>
            <p className="pokemon-info">
                <span>speed:</span>{pokemonData.stats[5].base_stat}
            </p>
        </div> 

        <div className="pokemon-info">
            <p>
                {pokemonData.abilities
                .map((abilityInfo) => abilityInfo.ability.name)
                .slice(0,1)
                .join(" , ")}
            </p>
            <span>Abilities:</span>
            </div> 
    </li>
);};

// src={pokemonData.sprites.other.home.front_shiny}
// src={pokemonData.sprites.other.dream_world.front_default} 