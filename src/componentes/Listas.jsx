import React, { Fragment, useState } from "react";

const Listas = () => {
  const [numeros, setNumero] = useState([1, 2, 3, 4, 5, 6]);

  const [tiempo, setTiempo] = useState(1);

  const aumentar = () => {
    setTiempo(tiempo + 1);
    setNumero([...numeros, tiempo + 6]);
  };

  return (
    <Fragment>
      <ul>
        <button className="btn btn-success" onClick={aumentar}>Aumentar</button>
        <p>Tiempo: {tiempo}</p>
        {
          numeros.map((item, index) => 
            <li key={index}>
              {item} - {index}
            </li>
          )
        }
      </ul>
    </Fragment>
  );
};

export default Listas;
