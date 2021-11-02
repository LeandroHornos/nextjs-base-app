// React
import React, { useState } from "react";

// Componentes de NextJS
import Head from "next/head";
import { useRouter } from "next/router";

// Componentes
import { GeneralLayout } from "../components/Layout";

// Librerias
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import es from "date-fns/locale/es"; // the locale you want
registerLocale("es", es); // register it with the name you want

export default function NewMovement() {
  const [date, setDate] = useState();

  const router = useRouter();

  const handleSubmit = () => {
    console.log("Submit");
    router.push("/movement-items-editor");
  };

  return (
    <GeneralLayout>
      <header>
        <div className="row">
          <div className="col-sm-2 col-lg-4"></div>
          <div className="col-sm-8 col-lg-4 d-flex flex-column justify-content-center align-items-center">
            <h1>Nuevo Movimiento</h1>
            <p>
              <strong>
                <small>
                  Crea un nuevo movimiento de paquetes entre dos puntos
                </small>
              </strong>
            </p>
          </div>
          <div className="col-sm-2 col-lg-4"></div>
        </div>
      </header>
      <main>
        <div className="row min80">
          <div className="col-sm-2 col-lg-4"></div>
          <div className="col-sm-8 col-lg-4 d-flex flex-column justify-content-center align-items-center">
            <form
              className="width100"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <h2>Recorrido</h2>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-text">
                  Ubicación 1
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="Ej: Depósito 1"
                  aria-describedby="textHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-text">
                  Ubicación 2
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="Ej: Depósito 2"
                  aria-describedby="textHelp"
                />
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Ida y vuelta
                </label>
              </div>
              <div class="mb-3">
                <label for="date" class="form-text">
                  Fecha
                </label>
                <DatePicker
                  locale={es}
                  dateFormat="dd/MM/yyyy"
                  selected={date}
                  onChange={(d) => setDate(d)}
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Crear
              </button>
            </form>
          </div>
          <div className="col-sm-2 col-lg-4"></div>
        </div>
      </main>
    </GeneralLayout>
  );
}
