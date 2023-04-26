import axios from "axios";
import React from "react";

const AddBook = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.book.value;
    const author = e.target.author.value;
    axios
      .post("https://empass-task-server.onrender.com/books", {
        name: name,
        author: author,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <h2 className="mb-5 text-indigo">ADD BOOK</h2>
            <form onSubmit={handleSubmit}>
              <div class="mb-3 text-start">
                <label for="name" class="form-label">
                  Book Name
                </label>
                <input
                  type="text"
                  name="book"
                  placeholder="Enter Book Name"
                  required
                  class="form-control"
                  id="name"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3 text-start">
                <label for="author" class="form-label">
                  Author
                </label>
                <input
                  type="text"
                  name="author"
                  required
                  placeholder="Enter Book Author"
                  class="form-control"
                  id="author"
                />
              </div>
              <button type="submit" class="btn btn-warning">
                Add Book
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBook;
