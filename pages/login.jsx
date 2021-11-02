import { useRouter } from "next/router";

// Componentes
import { BlankLayout } from "../components/Layout";

export default function Login() {
  const router = useRouter();

  const handleSubmit = () => {
    console.log("Logueado");
    router.push("/home");
  };
  return (
    <BlankLayout>
      <main>
        <div className="row min80">
          <div className="col-sm-2 col-lg-4"></div>
          <div className="col-sm-8 col-lg-4 d-flex flex-column justify-content-center align-items-center">
            <header>
              <h1>Ingresar</h1>
            </header>
            <form
              className="width100"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Enviar
              </button>
            </form>
            <button
              className="btn btn-link"
              onClick={(e) => {
                e.preventDefault();
                router.push("/recover");
              }}
            >
              Olvidé mi password
            </button>
            <button
              className="btn btn-link"
              onClick={(e) => {
                e.preventDefault();
                router.push("/register");
              }}
            >
              Deseo registrarme
            </button>
          </div>
          <div className="col-sm-2 col-lg-4"></div>
        </div>
      </main>
    </BlankLayout>
  );
}
