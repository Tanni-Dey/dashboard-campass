import React, { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [firebaseError, setFirebaseError] = useState("");
  const [cPassError, setCPassError] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const cPassword = e.target.cPass.value;
    if (password === cPassword) {
      await createUserWithEmailAndPassword(email, password);
      const { data } = await axios.post("http://localhost:5000/login", {
        email,
      });
      localStorage.setItem("accessToken", data.accessToken);
      setFirebaseError("");
      setCPassError("");
    } else {
      setCPassError("Confirm password is not matched");
    }
    // console.log(email);
  };
  useEffect(() => {
    if (!error) {
    } else {
      if (error.message.includes("email-already-in-use")) {
        setFirebaseError("This user email already taken");
      } else if (
        error.message.includes("Password should be at least 6 characters")
      ) {
        setFirebaseError("Please give at least 6 characters in password");
      }
    }
  }, [error]);

  if (user) {
    navigate("/");
  }

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <h2 className="mb-5 text-warning"> Sign Up</h2>
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
              </div>
              <div class="mb-3 text-start">
                <label for="cPass" class="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="cPassword"
                  required
                  placeholder="Enter Confirm Password"
                  class="form-control"
                  id="cPass"
                />
                <p className="text-danger"> {firebaseError}</p>
                <p className="text-danger"> {cPassError}</p>
              </div>
              <button type="submit" class="btn btn-warning">
                Sign Up
              </button>
            </form>
            <p className="mt-3 text-start">
              <span>Already Have An Account? Please </span>
              <Link className="text-warning" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
