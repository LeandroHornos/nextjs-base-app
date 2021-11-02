// React
import React, { useState } from "react";

// Componentes de NextJS
import Head from "next/head";

// Componentes
import { FlexRowLg10 } from "../components/Layout";
import { GeneralLayout } from "../components/Layout";

// Librerias
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import es from "date-fns/locale/es"; // the locale you want
registerLocale("es", es); // register it with the name you want

export default function Reception() {
  const [date, setDate] = useState();

  return (
    <GeneralLayout>
      <header>
        <div className="row">
          <div className="col-sm-2 col-lg-4"></div>
          <div className="col-sm-8 col-lg-4 d-flex flex-column justify-content-center align-items-center">
            <h1>Recepción</h1>
            <p>
              <strong>
                <small>
                  Recibe el transporte, marca los items que llegaron y cierra la
                  transacción.
                </small>
              </strong>
            </p>
          </div>
          <div className="col-sm-2 col-lg-4"></div>
        </div>
      </header>
      <main>
        <FlexRowLg10 rowClasses="min80">
          <h2>Activos</h2>
        </FlexRowLg10>
        <FlexRowLg10>
          <h2>Pasados</h2>
        </FlexRowLg10>
      </main>
    </GeneralLayout>
  );
}
