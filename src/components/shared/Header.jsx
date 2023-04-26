import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { useSignOut } from "react-firebase-hooks/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const [signOut, loading, error] = useSignOut(auth);
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary bg-warning p-2 mb-3">
        <div class="container">
          <Link class="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Books
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="/addbook">
                  Add Book
                </Link>
              </li>
              <li class="nav-item">
                {user ? (
                  <Link onClick={signOut} class="nav-link" to="/login">
                    Log Out
                  </Link>
                ) : (
                  <Link class="nav-link" to="/login">
                    Login
                  </Link>
                )}
              </li>
              <li class="nav-item">
                {user ? null : (
                  <Link class="nav-link" to="/signup">
                    Sign Up
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
