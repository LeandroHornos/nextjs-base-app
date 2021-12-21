import { getSession } from "next-auth/client";
import { GeneralLayout, CenteredColRow } from "../components/Layout";

export default function ToDo() {
  return (
    <GeneralLayout>
      <CenteredColRow
        breakpoint="md"
        centerColSize={8}
        centerColClasses="min80 d-flex flex-column justify-content-between align-items-center"
      ></CenteredColRow>
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