import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const CardInfo = ({ pokemon }) => {
  const { name, stats, src, types } = pokemon;

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/pokemon`);
  };
  return (
    <>
      <Card style={{ width: "20 rem" }} className="mt-4">
        <Card.Img height="250" src={src} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {stats?.map((stat, i) => (
              <li key={i}>
                {stat.name} : {stat.base}
              </li>
            ))}
          </Card.Text>
          <Card.Text>{types}</Card.Text>
        </Card.Body>
      </Card>
      <Button
        onClick={handleClick}
        variant="outline-secondary"
        className="mt-3"
      >
        Volver
      </Button>
    </>
  );
};

export default CardInfo;
