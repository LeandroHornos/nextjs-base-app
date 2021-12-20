// NextJS

// Next Auth
import { signIn, signOut, useSession } from "next-auth/client";

import Link from "next/link";

// React Boostrap Icons
import { ArrowLeftRight, Truck } from "react-bootstrap-icons";

import { BlankLayout, CenteredColRow } from "../components/Layout";

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
      <CenteredColRow
        centerColSize={6}
        breakpoint="md"
        centerColClasses="d-flex min80 flex-column justify-content-between align-items-center"
      >
        <div className="text-center">
          <h2>Hola! esto es</h2>
          <h1>NextJS Base App</h1>
        </div>
        <p>
          <strong>
            <small style={{ color: "rgb(200,200,200)" }}>
              Template para aplicaciones web que incluye manejo de sesiones con
              next auth, social login, rutas protegidas y base de datos sqlite
            </small>
          </strong>
        </p>

        <div className="d-grid gap-2 col-12 mx-auto">
          <button className="btn btn-dark" type="button" onClick={signIn}>
            Iniciar Sesión
          </button>
          <Link href="/protected">Ver página protegida</Link>
        </div>
      </CenteredColRow>
    </BlankLayout>
  );
};

export const Dashboard = () => {
  return (
    <BlankLayout>
      <CenteredColRow centerColSize={8} breakpoint="md">
        <div className="min80 d-flex flex-column justify-content-between align-items-center">
          <h1 className="text-center">Dashboard</h1>
          <Link href="/protected">Ver página protegida</Link>
          <div className="d-grid gap-2 col-12 mx-auto w100">
            <button className="btn btn-dark" type="button" onClick={signOut}>
              Salir
            </button>
          </div>
        </div>
      </CenteredColRow>
    </BlankLayout>
  );
};
