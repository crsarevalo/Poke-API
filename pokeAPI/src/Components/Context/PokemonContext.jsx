import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const PokemonContext = createContext();

export const usePokemonContext = () => {
  return useContext(PokemonContext);
};

const PokemonProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState([]);
  const [clickedPokemon, setClickedPokemon] = useState("");
  const navigate = useNavigate();
  const url = "https://pokeapi.co/api/v2/pokemon";

  const getPokemon = async () => {
    try {
      const response = await axios.get(url);
      const { results } = response.data;
      setPokemon(results);
    } catch (error) {
      console.error("No Response", error);
    }
  };

  useEffect(() => {
    getPokemon();
  }, []);

  const wayToMoreInfo = async () => {
    clickedPokemon
      ? navigate(`/pokemon/${clickedPokemon}`)
      : Swal.fire({
          title: "Selecciona un Pokemon",
          icon: "error",
          customClass: {
            closeButton: "custom-close-button",
          },
        });
  };

  const contextValue = {
    pokemon,
    clickedPokemon,
    setClickedPokemon,
    wayToMoreInfo,
  };

  return (
    <PokemonContext.Provider value={contextValue}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
