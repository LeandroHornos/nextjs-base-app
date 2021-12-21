import React from "react";

import Link from "next/link";

const Nav = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand" href="/">
            AppName
          </a>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link href="/dashboard">
                <a class="nav-link active" aria-current="page">
                  Dashboard
                </a>
              </Link>
            </li>
            <li class="nav-item">
              <Link href="/todos-example">
                <a class="nav-link active" aria-current="page">
                  ToDos
                </a>
              </Link>
            </li>
            <li class="nav-item">
              <Link href="/todos-example">
                <a class="nav-link disabled" tabindex="-1" aria-disabled="true">
                  Disabled
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <Link href="/api/auth/signout">
          <a class="nav-link active" aria-current="page">
            Salir
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
