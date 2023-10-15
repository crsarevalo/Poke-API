import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import { usePokemonContext } from "../Components/Context/PokemonContext";

const Pokemon = () => {
  const { pokemon, clickedPokemon, setClickedPokemon, wayToMoreInfo } =
    usePokemonContext();

  const handleSelectChange = ({ target }) => {
    const selectedValue = target.value;

    if (selectedValue === "Selecciona tu Pokemon" || !selectedValue) {
      Swal.fire({
        title: "Selecciona un Pokemon",
        icon: "error",
        customClass: {
          closeButton: "custom-close-button",
        },
      });
    } else {
      setClickedPokemon(selectedValue);
    }
  };

  return (
    <>
      <Form.Select
        className="mt-3"
        aria-label="Default select example"
        value={clickedPokemon}
        onChange={handleSelectChange}
      >
        <option>Selecciona tu Pokemon</option>

        {pokemon.map(({ name }, i) => (
          <option key={i} value={name}>
            {name}
          </option>
        ))}
      </Form.Select>
      <Button
        variant="outline-secondary"
        className="mt-3"
        onClick={wayToMoreInfo}
      >
        Detalles
      </Button>
    </>
  );
};

export default Pokemon;
