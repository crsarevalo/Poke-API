import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CardInfo from "../Components/CardInfo";
import { useState } from "react";

const MoreInfo = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState({});

  const url = "https://pokeapi.co/api/v2/pokemon";

  const getPokemon = async (name) => {
    try {
      const rest = await fetch(`${url}/${name}`);
      if (!rest.ok) {
        throw new Error("No Response");
      }
      const data = await rest.json();
      const src = data.sprites.other.dream_world.front_default;
      const stats = data.stats.map((stat) => ({
        name: stat.stat.name,
        base: stat.base_stat,
      }));
      const type = data.types.map(({ type }) => type.name).join("");
      setPokemon({ name, stats, src, type });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokemon(name);
  }, [name]);

  return <CardInfo pokemon={pokemon} />;
};

export default MoreInfo;
