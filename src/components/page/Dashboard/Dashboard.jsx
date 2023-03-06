import React from "react";
import { DayPicker, useInput } from "react-day-picker";
import { Pie, PieChart, Tooltip } from "recharts";

const Dashboard = () => {
  const { inputProps, dayPickerProps } = useInput({
    defaultSelected: new Date(),
    fromYear: 2021,
    toYear: 2023,
    format: "PP",
    required: true,
  });

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
    const expert = e.target.expert.value;
    const date = e.target.date.value;
    const data = {
      expert: expert,
      date: date,
    };
    window.alert("Book Added");
    console.log(data);
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
                <label for="expert" class="form-label">
                  Expert
                </label>
                <select name="expert" id="expert" class="form-control">
                  <option value="">Select Expert</option>
                  <option value="monika">Monika</option>
                  <option value="trina">Trina</option>
                  <option value="tropa">Tropa</option>
                  <option value="mina">Mina</option>
                </select>
              </div>
              <div class="mb-3 text-start">
                <label for="date" class="form-label">
                  Date
                </label>
                <DayPicker {...dayPickerProps} />
                <input
                  {...inputProps}
                  type="text"
                  name="date"
                  required
                  placeholder="Enter Your Date"
                  class="form-control"
                  id="date"
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
