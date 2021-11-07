// NextJS
import Link from "next/link";
import { useRouter } from "next/router";

// React Boostrap Icons
import { ArrowLeftRight, Truck } from "react-bootstrap-icons";

// Components
import Login from "../components/Login";
import { BlankLayout } from "../components/Layout";

export default function LandingPage() {
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
              <div class="d-grid gap-2 col-6 mx-auto">
                <Link href="/">
                  <button className="btn btn-dark" type="button">
                    Conocer más
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-md-5 col-lg-4">
              <Login />
            </div>
            <div className="col-md-1 col-lg-1"></div>
          </div>
        </div>
      </div>
    </BlankLayout>
  );
}



