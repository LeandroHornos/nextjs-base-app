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

export const CenteredColRow = (props) => {
  {
    /*Este componente devuelve una Row de bootstrap, con 3 cols,
    una central que lleva el contenido y dos laterales que hacen de borde.
    centerColSize= número de columnas de ancho de la columna central
    */
  }
  const { centerColSize, rowClasses } = props;
  const bp = props.breakpoint;
  const left = Math.floor((12 - centerColSize) / 2);
  const right = 12 - centerColSize - left;

  return (
    <div className={"row" + " " + rowClasses}>
      <div className={`col-${bp}-${left}`}></div>
      <div className={`col-${bp}-${centerColSize}`}>{props.children}</div>
      <div className={`col-${bp}-${right}`}></div>
    </div>
  );
};

export const GeneralLayout = (props) => {
  /* Estuctura general para las páginas del sitio */

  const { children } = props;

  return (
    <div className="cointainer min100">
      <Head>
        <title>NextJs Base App</title>
        <meta
          name="description"
          content="Aplicacion de NextJS base para ser usada en proyectos diversos. Aporta maneo de sesiones via oauth con nextauth y provee una base de datos sencilla en sqlite"
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
        <title>NextJs Base App</title>
        <meta
          name="description"
          content="Aplicacion de NextJS base para ser usada en proyectos diversos. Aporta maneo de sesiones via oauth con nextauth y provee una base de datos sencilla en sqlite"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
  );
};
