import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { BlankLayout } from "../components/Layout";

export default function LandingPage() {
  const router = useRouter();
  return (
    <BlankLayout>
      <main>
        <div className="row min80">
          <div className="col-sm-2 col-lg-4"></div>
          <div className="col-sm-8 col-lg-4 d-flex flex-column justify-content-center align-items-center">
            <header>
              <h1>Hola! esto es</h1>
              <h1>My Camion</h1>
              <p>
                <strong>
                  <small>Gestiona envios entre locaciones</small>
                </strong>
              </p>
            </header>
            <div class="d-grid width100 gap-3">
              <Link href="/login">
                <button className="btn btn-primary" type="button">
                  Entrar
                </button>
              </Link>
              <Link href="/register">
                <button className="btn btn-dark" type="button">
                  Registro
                </button>
              </Link>
            </div>
          </div>
          <div className="col-sm-2 col-lg-4"></div>
        </div>
      </main>
    </BlankLayout>
  );
}
