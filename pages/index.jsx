import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { BlankLayout } from "../components/Layout";

export default function LandingPage() {
  const router = useRouter();
  return (
    <BlankLayout>
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
    </BlankLayout>
  );
}
