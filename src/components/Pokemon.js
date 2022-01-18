import React from "react";

export default function Pokemon() {
  let [char, setChar] = React.useState("");
  let [chosenPokemon, setChosenPokemon] = React.useState(true);
  // let [pokemon, setPokemon] = React.useState({});
  let [displayData, setDisplayData] = React.useState({
    name: "",
    species: "",
    height: "",
  });

  function getValues() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${char}`)
      .then((res) => res.json())
      .then((data) => {
        // setPokemon(data);
        setDisplayData({
          name: data.forms[0].name,
          species: data.species.name,
          height: data.height,
        });
      });
  }

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
            <>
              <h1 value={displayData.name}>
                {" "}
                Pokemon Name: {displayData.name}{" "}
              </h1>
              <h2 value={displayData.species}>
                {" "}
                Species: {displayData.species}{" "}
              </h2>
            </>
          )}{" "}
        </>
      </div>
    </main>
  );
}
