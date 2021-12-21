import React from "react";

import Link from "next/link";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Inicio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/todos-example">
                <a className="nav-link active" aria-current="page">
                  ToDos
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/dashboard">
                <a className="nav-link">Dashboard</a>
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul>
        </div>
        <Link href="/api/auth/signout">
          <a className="nav-link">Salir</a>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
