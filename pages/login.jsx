import { GeneralLayout, CenteredColRow } from "../components/Layout";

const login = () => {
  return (
    <GeneralLayout>
      <CenteredColRow breakpoint="md" centerColSize={8}>
        <h1>Ingresar</h1>
        <p>
          Elige el método que te resulte más conveniente para ingresar. Si aún
          no tienes una cuenta, se creará una automáticamente. 
        </p>
      </CenteredColRow>
    </GeneralLayout>
  );
};

export default login;
