import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

function Pokemon(props) {
  const { poke } = props;
  const [pokemon, setPokemon] = useState([]);

  const getPokemon = async () => {
    await axios
      .get(poke.url)
      .then((res) => setPokemon(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div className="col-3">
      <Card>
        <CardImg
          alt="Card image cap"
          src={pokemon.sprites ? pokemon.sprites.front_default : ""}
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">{pokemon.name}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Height: {pokemon.height}
          </CardSubtitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default Pokemon;
