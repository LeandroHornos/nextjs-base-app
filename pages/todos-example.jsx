import { getSession } from "next-auth/client";
import { GeneralLayout, CenteredColRow } from "../components/Layout";

export default function ToDo() {
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <GeneralLayout>
      <CenteredColRow
        breakpoint="md"
        centerColSize={8}
        centerColClasses="min80 d-flex flex-column justify-content-between align-items-center"
      >
        <h1>Nueva tarea</h1>
        <form action={onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" className="form-control" />
          </div>
        </form>
      </CenteredColRow>
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
