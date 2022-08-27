import React, { useState } from "react";
import Button from "../Button/Button";
import InputText from "../InputText/InputText";
import Select from "../Select/Select";

import "./Form.css";

const Form = (props) => {
  // const positions = ["Goalkeeper", "Defense", "Midfielders", "Offense"];

  const [name, setName] = useState("");
  const [team, setTeam] = useState("");
  const [image, setImage] = useState("");
  const [position, setPosition] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handlePlayer({
      name,
      team,
      image,
      position
    });
  };

  return (
    <section className="container-form">
      <form onSubmit={handleSubmit}>
        <h2>Enter your player data to create the card</h2>
        <InputText
          text={name}
          addInput={(text) => setName(text)}
          requiredField={true}
          label="Name:"
          placeholder="Enter player name"
        />
        <InputText
          text={team}
          addInput={text => setTeam(text)}
          requiredField={true}
          label="Team:"
          placeholder="Enter the team he/she plays for"
        />
        <InputText
          text={image}
          addInput={text => setImage(text)}
          requiredField={true}
          label="Image:"
          placeholder="Enter a URL player image"
        />
        <Select 
          text={position}
          addInput={text => setPosition(text)}
          requiredField={true} 
          label="Position:" 
          itens={props.positions} 
        />
        <Button>Create Card</Button>
      </form>
    </section>
  );
};

export default Form;
