import React, { useState } from "react";
import PropTypes from "prop-types";
import Error from "./Error";
import shortid from "shortid";
export default function Formulario({
  guardarGasto,
  guardarCrearGasto,
  restante,
}) {
  const [nombre, guardarNombre] = useState("");
  const [cantidad, guardarCantidad] = useState(0);
  const [error, estadoError] = useState(false);
  const [validar, guardarValidar] = useState(false);

  const agregarGastos = (e) => {
    e.preventDefault();

    if (nombre.trim() === "" || cantidad <= 0 || isNaN(cantidad)) {
      estadoError(true);
      return;
    }
    const res = restante - cantidad;

    if (res < 0) {
      guardarValidar(true);
      return;
    }
    console.log(res);
    guardarValidar(false);
    estadoError(false);
    //creamos un objeto para enviar a componente principal
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate(),
    };
    guardarGasto(gasto);
    guardarCrearGasto(true);
    //Reseteamos los inputs
    guardarNombre("");
    guardarCantidad(0);
  };

  return (
    <form onSubmit={agregarGastos}>
      <h2> Agrega tus gastos aqui</h2>
      {error ? <Error mensaje={"Ambos campos son obligatorios"} /> : null}
      {validar ? (
        <Error mensaje={"La cantidad ingresada es mayor al resto"} />
      ) : null}

      <div className="campo">
        <label>Nombre gasto</label>
        <input
          type="text"
          className="u-full-widch"
          placeholder="Ej. Transporte"
          value={nombre}
          onChange={(e) => guardarNombre(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Cantidad Gasto</label>
        <input
          type="number"
          className="u-full-widch"
          placeholder="Ej. 300"
          value={cantidad}
          onChange={(e) => guardarCantidad(parseInt(e.target.value))}
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-widch"
        value="Agregar Gastos"
      />
    </form>
  );
}
Formulario.propTypes = {
  guardarGasto: PropTypes.func.isRequired,
  guardarCrearGasto: PropTypes.func.isRequired,
  restante: PropTypes.number.isRequired,
};
