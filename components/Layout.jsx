import { Fragment } from "react";

import Head from "next/head";

export const FlexRowLg10 = (props) => {
  {
    /*Este componente de */
  }
  return (
    <div className={"row" + " " + props.rowClasses}>
      <div className="col-lg-1"></div>
      <div className="col-lg-10">{props.children}</div>
      <div className="col-lg-1"></div>
    </div>
  );
};

export const FlexRow3ColLg = (props) => {
  {
    /*Este componente de */
  }
  return (
    <div className={"row" + " " + props.rowClasses}>
      <div className={"col-lg-" + props.col1 + " " + props.col1Classes}></div>
      <div className={"col-lg-" + props.col2 + " " + props.col2Classes}>
        {props.children}
      </div>
      <div className={"col-lg-" + props.col3 + " " + props.col3Classes}></div>
    </div>
  );
};

export const GeneralLayout = (props) => {
  const { children } = props;

  return (
    <div className="cointainer min100">
      <Head>
        <title>My Camion</title>
        <meta
          name="description"
          content="Aplicación web para la gestión de un flete entre dos ubicaciones"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
      <footer>
        <div className="row min20">
          <div className="col-12 d-flex flex-column justify-content-center align-items-center">
            <a
              href="https://www.leandrohornos.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              created by Leandro Hornos
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export const BlankLayout = (props) => {
  const { children } = props;

  return (
    <div className="cointainer min100">
      <Head>
        <title>My Camion</title>
        <meta
          name="description"
          content="Aplicación web para la gestión de un flete entre dos ubicaciones"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
  );
};
