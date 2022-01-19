import React from "react";

export default function Pokemon() {
  let [char, setChar] = React.useState("");
  let [chosenPokemon, setChosenPokemon] = React.useState(true);
  let [displayData, setDisplayData] = React.useState({});

  function getValues() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${char}`)
      .then((res) => res.json())
      .then((data) => {
        setDisplayData({
          name: data.forms[0].name,
          species: data.species.name,
          height: data.height,
          img: data.sprites.front_default,
          hp: data.stats[0].base_stat,
          attack: data.stats[1].base_stat,
          defense: data.stats[2].base_stat,
          type: data.types[0].type.name,
        });
      });
  }

  return (
    <main className="flexbox-container">
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
              <h1 value={displayData.name}> {displayData.name} </h1>
              <img src={displayData.img}></img>
              <p value={displayData.species}>
                {" "}
                Species: {displayData.species}{" "}
              </p>
              <p value={displayData.type}> Type: {displayData.type} </p>
              <p value={displayData.height}> Height: {displayData.height} </p>
              <p value={displayData.hp}> HP: {displayData.hp} </p>
              <p value={displayData.attack}> Attack: {displayData.attack} </p>
              <p value={displayData.defense}>
                {" "}
                Defense: {displayData.defense}{" "}
              </p>
            </>
          )}{" "}
        </>
      </div>
    </main>
  );
}
