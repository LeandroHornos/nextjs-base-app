// NextJS
import Link from "next/link";
import { useRouter } from "next/router";

import { providers, signIn, getSession, csrfToken } from "next-auth/client";

// React Boostrap Icons
import { ArrowLeftRight, Truck } from "react-bootstrap-icons";

import { BlankLayout } from "../components/Layout";

export async function getServerSideProps(context) {
  const { req } = context;
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: { destination: "/" },
    };
  }

  return {
    props: {
      providers: await providers(context),
      csrfToken: await csrfToken(context),
    },
  };
}

export default function LandingPage({ providers }) {
  const router = useRouter();
  return (
    <BlankLayout>
      <div className="row">
        <div className="col-12 min80 d-flex flex-column align-items-center justify-content-center">
          <div className="row width100">
            <div className="col-md-1 col-lg-1"></div>
            <div className="col-md-5 col-lg-6" style={{ marginBottom: "30px" }}>
              <header>
                <h1>Hola! esto es</h1>
                <h1>My Camion</h1>
                <p>
                  <strong>
                    <small style={{ color: "rgb(200,200,200)" }}>
                      Gestiona envios entre locaciones
                    </small>
                  </strong>
                </p>
                <ArrowLeftRight color="royalblue" size={64} />
                <Truck color="royalblue" size={96} />
              </header>
              <div className="d-grid gap-2 col-6 mx-auto">
                <Link href="/">
                  <button className="btn btn-dark" type="button">
                    Conocer más
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-md-5 col-lg-4">
              <LogIn providers={providers} />
            </div>
            <div className="col-md-1 col-lg-1"></div>
          </div>
        </div>
      </div>
    </BlankLayout>
  );
}

// Este component muestra el login con los proveedores de NextJs

function LogIn(props) {
  const { providers } = props;
  return (
    <div className="shadowed-box box-bg">
      <h1 className="title-1">Ingresar</h1>
      <div className="w100 d-grid gap-2">
        {Object.values(providers).map((provider) => {
          return (
            <button
              key={provider.name}
              className="btn btn-outline-primary provider-btn"
              onClick={() => signIn(provider.id)}
            >
              Ingresar con {provider.name}
            </button>
          );
        })}
      </div>
      <div className="w100 d-grid gap-2">
        <Link href="/register">
          <button className="btn btn-dark" type="button">
            Registro
          </button>
        </Link>
      </div>
    </div>
  );
}
