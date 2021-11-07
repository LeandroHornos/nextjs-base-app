import React from "react";

// NextJs
import { useRouter } from "next/router";
import Link from "next/dist/client/link";
import { useForm } from "react-hook-form";

// Componentes
import { InputErrorMessage } from "../components/FormComponents";

// Reglas de validación del formulario

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
    },
    msgs: {
      required: "Debes ingresar tu password",
    },
  },
};

export default function Login() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("esta es la data", data);
  };
  return (
    <div className="shadowed-box box-bg">
      <h1 className="title-1">Ingresar</h1>
      <form
        className="width100"
        onSubmit={handleSubmit(onSubmit)}
        style={{ marginBottom: "20px" }}
      >
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            placeholder="yourname@company.com"
            className="form-control"
            {...register("email", { ...val.email.rules })}
            aria-describedby="email"
          />
          <InputErrorMessage>
            {errors.email ? val.email.msgs[errors.email.type] : ""}
          </InputErrorMessage>
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
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
        <div class="d-grid gap-2 mx-auto">
          <button type="submit" className="btn btn-primary">
            Entrar
          </button>
        </div>
      </form>
      <div class="d-grid gap-2 mx-auto">
        <Link href="/register">
          <button className="btn btn-dark" type="button">
            Registro
          </button>
        </Link>
        <Link href="/recover">
          <button className="btn btn-link">Olvidé mi password</button>
        </Link>
      </div>
    </div>
  );
}
