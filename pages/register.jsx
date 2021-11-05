import Head from "next/head";

import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import { BlankLayout } from "../components/Layout";

export default function Register() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  F;

  const val = {
    email: {
      rules: {
        pattern: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
        required: true,
      },
      msgs: {
        pattern: "El formato del email ingresado no es válido",
        required: "Debes ingresar tu email",
      },
    },
    password: {
      rules: {
        required: true,
        minLength: 6,
        maxLength: 50,
      },
      msgs: {
        required: "Debes ingresar tu password",
        minLength: "Mínimo 6 caracteres",
        maxLength: "Máximo 50 caracteres",
      },
    },
  };

  const onSubmit = (data) => {
    console.log("Registrando...");
    console.log(data);
    // router.push("/home");
  };
  return (
    <BlankLayout>
      <main>
        <div className="row min80">
          <div className="col-sm-2 col-lg-4"></div>
          <div className="col-sm-8 col-lg-4 d-flex flex-column justify-content-center align-items-center">
            <header>
              <h1>Registro</h1>
            </header>
            <form className="width100" onSubmit={handleSubmit(onSubmit)}>
              <div class="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  {...register("email", { ...val.email.rules })}
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Elije un Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  {...register("password", { ...val.password.rules })}
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Repite tu Password
                </label>
                <input
                  type="repassword"
                  className="form-control"
                  {...register("repasword", { ...val.password.rules })}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Registrarse
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
