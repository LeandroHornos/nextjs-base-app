import React from "react";

// NextJs
import { useRouter } from "next/router";
import Link from "next/dist/client/link";
import { useForm } from "react-hook-form";

// Componentes
import { InputErrorMessage } from "../components/FormComponents";
import SignIn from "../pages/login";

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
      <div class="d-grid gap-2 mx-auto">
        <Link href="/recover">
          <button className="btn btn-link">Olvidé mi password</button>
        </Link>
      </div>
    </div>
  );
}
