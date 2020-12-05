import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { revisarPresupuesto } from "../Helpers";
export default function ControlPresuouesto({ presupuesto, restante }) {
  
  return (
    <Fragment>
      <div className="alert alert-primary"> Presupuesto : {presupuesto}</div>

      <div className={revisarPresupuesto(presupuesto, restante)}>
        Restante : {restante}
      </div>
    </Fragment>
  );
}
ControlPresuouesto.propTypes = {
  presupuesto: PropTypes.number.isRequired,
  restante: PropTypes.number.isRequired,
};
