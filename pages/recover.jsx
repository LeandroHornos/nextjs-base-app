import Head from "next/head";
import { BlankLayout } from "../components/Layout";

export default function Register() {
  return (
    <BlankLayout>
      <main>
        <div className="row min80">
          <div className="col-sm-2 col-lg-4"></div>
          <div className="col-sm-8 col-lg-4 d-flex flex-column justify-content-center align-items-center">
            <header>
              <h1>Recupera tu password</h1>
            </header>
            <form className="width100">
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
              <button type="submit" class="btn btn-primary">
                Recuperar Password
              </button>
            </form>
            <button className="btn btn-link">
              Ya tengo una cuenta y deseo loguearme
            </button>
          </div>
          <div className="col-sm-2 col-lg-4"></div>
        </div>
      </main>
    </BlankLayout>
  );
}
