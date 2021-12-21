import React, { useEffect } from "react";
import { BlankLayout, CenteredColRow } from "../components/Layout";

import { signIn, signOut, providers, getSession } from "next-auth/client";

import Router from "next/router";

const Login = ({ providers, session }) => {
  useEffect(() => {
    if (session) {
      return Router.push("/dashboard");
    }
  }, [session]);

  return (
    <BlankLayout>
      <CenteredColRow
        breakpoint="md"
        centerColSize={6}
        centerColClasses="min80 d-flex flex-column align-items-center justify-content-between"
      >
        <h1>Ingresar</h1>
        <p>
          Elige el método que te resulte más conveniente para ingresar. Si aún
          no tienes una cuenta, se creará una automáticamente.
        </p>

        <div className="width100">
          {Object.values(providers).map((provider) => (
            <div key={provider.name} className="d-grid gap-2 col-8 mx-auto">
              <button
                className="btn btn-dark"
                onClick={() => signIn(provider.id)}
              >
                Ingresar con {provider.name}
              </button>
            </div>
          ))}
        </div>
      </CenteredColRow>
    </BlankLayout>
  );
};

Login.getInitialProps = async (context) => {
  return {
    providers: await providers(context),
    session: await getSession(context),
  };
};

export default Login;
