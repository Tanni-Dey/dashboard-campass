import React from "react";
import { Pie, PieChart, Tooltip } from "recharts";

const Dashboard = () => {
  const data02 = [
    {
      book: "Book A",
      score: 400,
    },
    {
      book: "Book B",
      score: 300,
    },
    {
      book: "Book C",
      score: 300,
    },
    {
      book: "Book D",
      score: 200,
    },
    {
      book: "Book E",
      score: 278,
    },
    {
      book: "Book F",
      score: 189,
    },
  ];
  const data01 = [
    {
      name: "Test Done",
      value: 100,
    },
  ];

  const handleBooking = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="container">
        <h2 className="mb-5">Dashboard</h2>
        <div className="row justify-content-between">
          <div className="col-md-4">
            <PieChart width={350} height={250}>
              <Pie
                data={data01}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={50}
                fill="#8884d8"
              />
              <Pie
                data={data02}
                dataKey="score"
                nameKey="book"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#ffc107"
                label
              />
              <Tooltip />
            </PieChart>
            <h5 className="text-success">Test Taken Done</h5>
            <h5 className="text-success">Score Rating : Good</h5>
          </div>
          <div className="col-md-5">
            <form action="" onSubmit={handleBooking}>
              <div class="mb-3 text-start">
                <label for="exampleInputEmail1" class="form-label">
                  Expert
                </label>
                <input
                  type="text"
                  name="expert"
                  placeholder="Choose Expert"
                  required
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3 text-start">
                <label for="exampleInputPassword1" class="form-label">
                  Date
                </label>
                <input
                  type="text"
                  name="date"
                  required
                  placeholder="Enter Your Date"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button type="submit" class="btn btn-warning">
                Book
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
