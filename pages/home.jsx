// Componentes de NextJS
import { useRouter } from "next/router";

// Componentes
import { FlexRowLg10 } from "../components/Layout";
import { GeneralLayout } from "../components/Layout";

export default function homePage() {
  const router = useRouter();

  return (
    <GeneralLayout>
      <header>
        <div className="row">
          <div className="col-sm-2 col-lg-4"></div>
          <div className="col-sm-8 col-lg-4 d-flex flex-column justify-content-center align-items-center">
            <h1>Movimientos</h1>
            <p>
              <strong>
                <small>
                  Aquí puedes ver tus movimientos, tantos los activos como los
                  pasados
                </small>
              </strong>
            </p>
            <button
              className="btn btn-dark"
              onClick={() => {
                router.push("/new-movement");
              }}
            >
              Nuevo movimiento
            </button>
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
