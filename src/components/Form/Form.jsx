import React from "react";
import Button from "../Button/Button";
import InputText from '../InputText/InputText'
import Select from "../Select/Select";

import "./Form.css";

const Form = () => {

  const positions = [
    'Goalkeeper',
    'Defense',
    'Midfielders',
    'Offense',
  ]

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <section className="container-form">
      <form onSubmit={handleSubmit}>
        <h2>Enter your player data to create the card</h2>
        <InputText label="Name:" placeholder="Enter player name" />
        <InputText label="Team:" placeholder="Enter the team he/she plays for" />
        <InputText label="Image:" placeholder="Enter a URL player image" />
        <Select label="Position:" itens={positions}/>
        <Button>Create Card</Button>
      </form>
    </section>
  );
};

export default Form;
