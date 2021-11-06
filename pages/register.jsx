import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import { BlankLayout } from "../components/Layout";
import { InputErrorMessage } from "../components/FormComponents";

export default function Register() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

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
    repassword: {
      msgs: {
        passNotEqual: "Los passwords no coinciden vo",
      },
    },
  };

  const onSubmit = (data) => {
    console.log("registrando...");
    console.log(data);
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
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  {...register("email", { ...val.email.rules })}
                  aria-describedby="emailHelp"
                />
                {errors.email && (
                  <InputErrorMessage>
                    {val.email.msgs[errors.email.type]}
                  </InputErrorMessage>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Elije un Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  {...register("password", { ...val.password.rules })}
                />
                {errors.password && (
                  <InputErrorMessage>
                    {val.password.msgs[errors.password.type]}
                  </InputErrorMessage>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="repassword" className="form-label">
                  Repite tu Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  {...register("repassword", {
                    validate: {
                      passNotEqual: (value) =>
                        value === getValues().password ||
                        "Los passwords no coinciden!",
                    },
                  })}
                />
                {errors.repassword && (
                  <InputErrorMessage>
                    {val.repassword.msgs[errors.repassword.type]}
                  </InputErrorMessage>
                )}
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
