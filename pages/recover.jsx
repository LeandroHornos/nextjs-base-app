import Head from "next/head";

export default function Register() {
  return (
    <div className="cointainer min100">
      <Head>
        <title>My Camion</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="row min80">
          <div className="col-sm-2 col-lg-4"></div>
          <div className="col-sm-8 col-lg-4 d-flex flex-column justify-content-center align-items-center">
            <header>
              <h1>Recupera tu password</h1>
            </header>
            <form className="width100">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Recuperar Password
              </button>
            </form>
            <button className="btn btn-link">
              Ya tengo una cuenta y deseo loguearme
            </button>
          </div>
          <div className="col-sm-2 col-lg-4"></div>
        </div>
      </main>
      <footer>
        <div className="row min20">
          <div className="col-12 d-flex flex-column justify-content-center align-items-center">
            <a
              href="https://www.leandrohornos.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              created by Leandro Hornos
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}