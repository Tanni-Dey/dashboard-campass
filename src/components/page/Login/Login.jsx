import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
    // console.log(email);
  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <h2 className="mb-5 text-warning">Login</h2>
            <form onSubmit={handleSubmit}>
              <div class="mb-3 text-start">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  required
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3 text-start">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="Enter Your Password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
                <p className="text-danger"> {error?.message}</p>
              </div>
              <button type="submit" class="btn btn-warning">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;