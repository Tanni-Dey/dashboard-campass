import React, { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  let location = useLocation();
  const [firebaseError, setFirebaseError] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  let from = location?.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post("http://localhost:5000/login", { email });
    localStorage.setItem("accessToken", data.accessToken);
    setFirebaseError("");
  };

  useEffect(() => {
    if (!error) {
    } else {
      if (error.message.includes("user-not-found")) {
        setFirebaseError("This user email not exist");
      } else if (error.message.includes("wrong-password")) {
        setFirebaseError("Password is wrong");
      } else if (error.message.includes("too-many-requests")) {
        setFirebaseError(
          "Your account has been temporary disable for many time request"
        );
      }
    }
  }, [error]);

  if (user) {
    navigate(from, { replace: true });
  }

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
                <p className="text-danger"> {firebaseError}</p>
              </div>
              <button type="submit" class="btn btn-warning">
                Login
              </button>
            </form>
            <p className="mt-3 text-start">
              <span>Create An Account. Please </span>
              <Link className="text-warning" to="/signup">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
