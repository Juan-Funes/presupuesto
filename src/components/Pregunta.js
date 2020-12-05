import React, { Fragment, useState } from "react";
import PropTypes from 'prop-types'
import Error from "./Error";
export default function Pregunta({guardarPresupuesto,guardarRestante,mostrarComponente}) {
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false); 
  const definirPresupuesto = (e) => {
    guardarCantidad(parseInt(e.target.value));
  };
  const agregarPresupuesto = (e) => {
    e.preventDefault();
    if (cantidad <= 0 || isNaN(cantidad)) {
      guardarError(true);
      return;
    }

    guardarError(false);
    guardarPresupuesto(cantidad)
    guardarRestante(cantidad)
    mostrarComponente(false)
  };
  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error mensaje={"El presupuesto no es valido"} /> : null}

      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="coloca tu prespuesto"
          onChange={definirPresupuesto}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir Presupuesto"
        />
      </form>
    </Fragment>
  );
}
Pregunta.propTypes={
  guardarPresupuesto : PropTypes.func.isRequired , 
  guardarRestante : PropTypes.func.isRequired,
  mostrarComponente : PropTypes.func.isRequired
}