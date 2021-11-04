import React from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

// Componentes
import { BlankLayout } from "../components/Layout";

export default function Login() {
  const router = useRouter();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("esta es la data", data);
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
            <form className="width100" onSubmit={handleSubmit(onSubmit)}>
              <div class="mb-3">
                <label class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  {...register("email")}
                  aria-describedby="email"
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  {...register("password")}
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Entrar
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
