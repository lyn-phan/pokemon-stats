import React from "react";

export default function Pokemon() {
  const [char, setChar] = React.useState("");
  const [pokemon, setPokemon] = React.useState({});

  // when we type in input box, it will save to state
  function handleChange(event) {
    setChar((prevChar) => {
      return {
        ...prevChar,
        [event.target.name]: event.target.value,
      };
    });
  }

  function getPokemon() {
    console.log(pokemon);
    // setPokemon({
    //   name: char,
    // species: data.species.name,
    // img: data.sprites.front_default,
    // hp: data.stats[0].base_stat,
    // attack: data.stats[1].base_stat,
    // defense: data.stats[2].base_stat,
    // type: data.types[0].base_stat,
  }

  React.useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${char}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data.results.name));
  }, []);

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Pokemon Name"
          className="form--input"
          onChange={handleChange}
        />

        <button className="form--button" onClick={getPokemon}>
          {" "}
          Get Pokemon stats!{" "}
        </button>

        <ul className="pokemonList">
          {pokemon.map(({ name, url }) => (
            <li key={url}>(name)</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
