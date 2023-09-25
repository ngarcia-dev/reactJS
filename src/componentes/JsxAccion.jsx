import React, {Fragment} from "react";

const JsxAccion = () => {
  const temperatura = 19;
  return (
    <Fragment>
      <h2>Frío o Calor?</h2>
      <p>{temperatura > 20 ? "Calor!" : "Frio!"}</p>
    </Fragment>
  );
};

export default JsxAccion;
