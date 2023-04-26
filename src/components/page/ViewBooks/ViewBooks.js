import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const ViewBooks = () => {
  const [user] = useAuthState(auth);
  const [books, setBooks] = useState([]);
  const [isToast, setisToast] = useState(false);
  const [searchText, setsearchText] = useState("");
  const [notFoundBook, setNotFoundBook] = useState("");
  useEffect(() => {
    const getBooks = async () => {
      const email = user.email;
      try {
        const { data } = await axios.get(
          `http://localhost:5000/books?search=${searchText}&email=${email}`,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        setBooks(data);
        setNotFoundBook("");
        if (data.length === 0) {
          setNotFoundBook("Not Book Found");
        }
      } catch (error) {
        console.error(error);
        setBooks([]);
      }
    };
    getBooks();
  }, [books, searchText, user]);

  const handleDelete = (id) => {
    if (window.confirm("Are You Delete this Book")) {
      axios.delete(`http://localhost:5000/book/${id}`, {
        params: { id: id },
      });
      setisToast(true);
    } else {
    }
  };

  return (
    <div className="container">
      <div class="position-fixed top-10 end-0 p-3" style={{ zIndex: 11 }}>
        <div
          id="liveToast"
          className={`toast fade ${isToast ? "show" : "hide"}`}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div class="toast-header d-flex me-auto">
            <div class="toast-body text-danger">
              <strong>Book Deleted</strong>
            </div>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
              onClick={() => setisToast(false)}
            ></button>
          </div>
        </div>
      </div>
      <div className="w-50 ms-auto me-auto">
        <form
          action=""
          className="d-flex mt-5 mb-5"
          onSubmit={(e) => {
            e.preventDefault();
            setsearchText(e.target.search.value);
          }}
        >
          <input
            type="text"
            className="form-control me-2"
            placeholder="Search by Name or Author"
            name="search"
          />
          <input type="submit" value="Search" className="btn btn-warning" />
        </form>
        <h4 className="text-danger">{notFoundBook}</h4>
      </div>
      <div className="row">
        {books.map((book) => (
          <div key={book._id} class="col-lg-4 col-md-6 col-sm-6 pb-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{book.name}</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  repellendus ut necessitatibus at tenetur cumque provident
                  fugiat totam possimus! Ullam reiciendis quam incidunt aliquam
                  asperiores ipsa nobis fuga animi hic?
                </p>
                <h6>Author By {book.author}</h6>
                <button
                  class="btn btn-danger"
                  onClick={() => handleDelete(book._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewBooks;
