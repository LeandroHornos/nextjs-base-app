import { useForm } from "react-hook-form";

import { getSession } from "next-auth/client";
import { GeneralLayout, CenteredColRow } from "../components/Layout";

import axios from "axios";

export default function ToDo() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      console.log("Salvando...");
      const res = await axios.post("/api/todo", { todo: data.name });
      console.log("Se ha guardado con exito en la base de datos", res);
      return;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <GeneralLayout>
      <main>
        <CenteredColRow
          breakpoint="md"
          centerColSize={6}
          centerColClasses="min80 d-flex flex-column justify-content-start align-items-center"
        >
          <h1>Nueva tarea</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="width100">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                {...register("name")}
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-dark">
              Guardar
            </button>
          </form>
        </CenteredColRow>
      </main>
    </GeneralLayout>
  );
}

// Ruta protegida: sólo se puede acceder estando logueado, si no estás logueado
// te redirecciona al login

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}
