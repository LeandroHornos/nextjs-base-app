// React
import React, { useState } from "react";

// Componentes de NextJS
import Head from "next/head";

// Componentes
import Modal from "../components/Modal";
import { GeneralLayout, CenteredColRow } from "../components/Layout";

// Datepicker
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es"; // the locale you want
registerLocale("es", es); // register it with the name you want

export default function movementItemsEditor() {
  const [showModal, setShowModal] = useState(false);

  const hideModal = () => {
    setShowModal(false);
  };

  return (
    <GeneralLayout>
      <header>
        <CenteredColRow rowClasses="" breakpoint="lg" centerColSize={8}>
          <h1>Editar items</h1>
          <p>
            <strong>
              <small>
                En esta ventana podrás agregar, modificar o eliminar los
                elementos que se moveran en el transporte
              </small>
            </strong>
          </p>
        </CenteredColRow>
      </header>
      <main>
        <Modal show={showModal} handleClose={hideModal}>
          <div className="shadowed-box bgwhite width100">
            <h2 className="title-1">Agregar item</h2>

            {/* FORM NUEVO ITEM ====================================================== */}

            <form>
              <div class="row">
                <div class="col-lg-3">
                  <label htmlFor="from">Desde</label>
                  <input
                    id="from"
                    type="text"
                    class="form-control"
                    placeholder="Lugar de origen"
                  />
                </div>
                <div class="col-lg-3">
                  <label htmlFor="goesto">Hasta</label>
                  <input
                    id="goesto"
                    type="text"
                    class="form-control"
                    placeholder="Lugar de destino"
                  />
                </div>
                <div class="col-lg-3">
                  <label htmlFor="receiver">Para</label>
                  <input
                    id="receiver"
                    type="text"
                    class="form-control"
                    placeholder="Ej: Juana Perez"
                  />
                </div>
                <div class="col-lg-3">
                  <label htmlFor="ammount">Cantidad</label>
                  <input id="ammount" type="number" class="form-control" />
                </div>
              </div>
              <div className="row">
                <div className="col-12"></div>
              </div>
              <div className="row">
                <div className="col-12">
                  <button type="submit" class="btn btn-primary">
                    Agregar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Modal>
        {/* TABLAS DE ITEMS ================================================================= */}

        <div className="row">
          <div className="col-lg-1"></div>

          <div className="col-lg-5 ptb10">
            <div className="shadowed-box bgwhite height100">
              <h2 className="title-1">Ida</h2>
              <button
                className="btn btn-sm btn-outline-dark"
                onClick={() => {
                  setShowModal(true);
                }}
              >
                + Agregar item
              </button>
              <h3>Desde: Ubicación 1</h3>
              <h3>Hasta: Ubicación 2</h3>
              <table className="table table-small-font">
                <thead>
                  <th>Descripción</th>
                  <th>Para</th>
                  <th>Unidades</th>
                </thead>
                <tbody>
                  <tr>
                    <td>Bidon</td>
                    <td>Pepito</td>
                    <td>4</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-lg-5 ptb10">
            <div className="shadowed-box bgwhite height100">
              <h2 className="title-1">Vuelta</h2>
              <button
                className="btn btn-sm btn-outline-dark"
                onClick={() => {
                  setShowModal(true);
                }}
              >
                + Agregar item
              </button>
              <h3>Desde: Ubicación 2</h3>
              <h3>Hasta: Ubicación 1</h3>
              <table className="table table-small-font">
                <thead>
                  <th>Descripción</th>
                  <th>Para</th>
                  <th>Unidades</th>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Bidon de solvente alifático al 70% para reprocesar de
                      solvente alifático al 70% para reprocesarde solvente
                      alifático al 70% para reprocesar
                    </td>
                    <td>
                      Pepito Manuel Horacio Gonzalez Fernandes de Chopitea
                    </td>
                    <td>4</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-lg-1"></div>
        </div>
        <CenteredColRow rowClasses="" breakpoint="lg" centerColSize={10}>
          <div className="shadowed-box bgwhite">
            <h2 className="title-1">Acciones</h2>
            <h3>
              <small>Programar Movimiento</small>
            </h3>
            <p>
              Esta acción <strong>cerrará la edición</strong> de la lista de
              items. Los usuarios ya no podrán cambiar el contenido de la lista.
              El movimiento pasa al estado <strong>activo</strong>
            </p>
            <button className="btn btn-warning">Programar movimiento</button>
            <hr />
            <h3>
              <small>Finalizar</small>
            </h3>
            <p>
              Esta acción <strong>dará por completada la operación.</strong>El
              movimiento pasa al estado de <strong>finalizado</strong> Podrá
              verse en la sección "movimientos anteriores".
            </p>
            <button className="btn btn-danger">Finalizar</button>
            <hr />
            <h3>
              <small>Cancelar</small>
            </h3>
            <p>
              Esta acción <strong> descartará el movimiento</strong>. La lista
              será borrada y este movimiento no aparecerá en los registros.
            </p>
            <button className="btn btn-danger">Cancelar</button>
          </div>
        </CenteredColRow>
      </main>
    </GeneralLayout>
  );
}
