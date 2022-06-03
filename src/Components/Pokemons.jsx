import axios from "axios";
import React, { useState, useEffect } from "react";
import Pokemon from "./Pokemon";
import { Button, CardGroup } from "reactstrap";

function Pokemons() {
  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=50&offset=50"
  );
  const [pokemons, setPokemons] = useState([]);

  const getPokemons = async () => {
    await axios
      .get(url)
      .then((res) => setPokemons(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPokemons();
  }, [url]);

  return pokemons.results ? (
    <div>
      <CardGroup>
        {pokemons.results.map((pokemon, index) => (
          <Pokemon key={index} poke={pokemon} />
        ))}
      </CardGroup>
      <Button
        color="primary"
        onClick={() => {
          setUrl(pokemons.previous);
        }}
        disabled={pokemons.previous != null ? false : true}
      >
        Previous
      </Button>
      <Button
        color="primary"
        onClick={() => {
          setUrl(pokemons.next);
        }}
        disabled={pokemons.next != null ? false : true}
      >
        Next
      </Button>
    </div>
  ) : (
    <></>
  );
}

export default Pokemons;
