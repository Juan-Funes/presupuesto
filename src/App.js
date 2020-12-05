import React, { useState, useEffect } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [cargarcomponente, mostrarComponente] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [creargasto, guardarCrearGasto] = useState(false);
  useEffect(() => {
    if (creargasto) {
      guardarGastos([...gastos, gasto]);

      //Restamos del presupuesto
      const PresupuestoRestante = restante - gasto.cantidad;

      guardarRestante(PresupuestoRestante);
      guardarCrearGasto(false);
      //console.log(PresupuestoRestante)
    }
  }, [gasto, creargasto, gastos, restante]);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {cargarcomponente ? (
            <Pregunta
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              mostrarComponente={mostrarComponente}
            />
          ) : (
            <div className="row">
              <div className="one-half column ">
                <Formulario
                  guardarGasto={guardarGasto}
                  guardarCrearGasto={guardarCrearGasto}
                  restante={restante}
                />
              </div>
              <div className="one-half column ">
                <Listado gastos={gastos} />
                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
