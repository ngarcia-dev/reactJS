import React, { Fragment } from "react";

const Saludo = (props) => {
  return (
    <Fragment>
      <h2>Hola {props.name}</h2>
    </Fragment>
  );
};

export default Saludo;
