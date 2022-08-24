import React from "react";
import InputText from '../InputText/InputText'

import "./Form.css";

const Form = () => {
  return (
    <section className="container-form">
      <form>
        <h2>Enter your player data to create the card</h2>
        <InputText label="Name:" placeholder="Enter player name" />
        <InputText label="Position:" placeholder="Enter player position" />
        <InputText label="Image:" placeholder="Enter a URL player image" />
      </form>
    </section>
  );
};

export default Form;
