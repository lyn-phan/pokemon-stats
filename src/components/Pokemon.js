import React from "react";

export default function Pokemon() {
  let [char, setChar] = React.useState("");
  let [chosenPokemon, setChosenPokemon] = React.useState(true);
  let [pokemon, setPokemon] = React.useState({});
  let [displayData, setDisplayData] = React.useState({ name: "" });

  // function getValues() {
  //   // const charName = pokemon.forms[0].name;
  //   const charSpecies = pokemon.species;
  //   const charHeight = pokemon.height;
  //   setDisplayData([
  //     {
  //       // pokemonName: charName,
  //       species: charSpecies,
  //       height: charHeight,
  //     },
  //   ]);
  // // }

  function getValues() {
    const pName = pokemon;
    setDisplayData({ name: pName });
  }

  React.useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${char}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data.species.name));
  }, [char]);

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Pokemon Name"
          className="form--input"
          onChange={(e) => setChar(e.target.value)}
        />
        <button className="form--button" onClick={getValues}>
          Get Pokemon stats!{" "}
        </button>
      </div>
      <div className="displayStats">
        <>
          {" "}
          {!chosenPokemon ? (
            <h1> Please enter a Pokemon name </h1>
          ) : (
            <h1 value={displayData.name}>{displayData.name}</h1>
          )}{" "}
        </>
      </div>
    </main>
  );
}

// setPokemon({
//   name: char,
// species: data.species.name,
// img: data.sprites.front_default,
// hp: data.stats[0].base_stat,
// attack: data.stats[1].base_stat,
// defense: data.stats[2].base_stat,
// type: data.types[0].base_stat,
