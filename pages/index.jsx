// NextJS
import Link from "next/link";

// Next Auth
import { signIn, signOut, useSession } from "next-auth/client";

// React Boostrap Icons
import { ArrowLeftRight, Truck } from "react-bootstrap-icons";

import { BlankLayout } from "../components/Layout";

export default function home() {
  const [session, loading] = useSession();
  if (!session) {
    return <LandingPage />;
  } else {
    return <Dashboard />;
  }
}

export const LandingPage = () => {
  return (
    <BlankLayout>
      <div className="row">
        <div className="col-12 min80 d-flex flex-column align-items-center justify-content-center">
          <div className="row width100">
            <div className="col-md-1 col-lg-1"></div>
            <div className="col-md-5 col-lg-6" style={{ marginBottom: "30px" }}>
              <header>
                <h1>Hola! esto es</h1>
                <h1>NextJS Base App</h1>
                <p>
                  <strong>
                    <small style={{ color: "rgb(200,200,200)" }}>
                      Template para aplicaciones web que incluye manejo de
                      sesiones con next auth, social login, rutas protegidas y
                      base de datos sqlite
                    </small>
                  </strong>
                </p>
                <ArrowLeftRight color="royalblue" size={64} />
                <Truck color="royalblue" size={96} />
              </header>
              <div className="d-grid gap-2 col-6 mx-auto">
                <Link href="/">
                  <button
                    className="btn btn-dark"
                    type="button"
                    onClick={signIn}
                  >
                    Iniciar Sesión
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-md-5 col-lg-4"></div>
            <div className="col-md-1 col-lg-1"></div>
          </div>
        </div>
      </div>
    </BlankLayout>
  );
};

export const Dashboard = () => {
  return (
    <BlankLayout>
      <div className="row">
        <div className="col-12 min80 d-flex flex-column align-items-center justify-content-center">
          <div>
            <h1>Dashboard</h1>
          </div>
        </div>
      </div>
    </BlankLayout>
  );
};
