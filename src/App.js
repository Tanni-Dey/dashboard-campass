import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/page/Signup/Signup";
import Login from "./components/page/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/shared/Header";
import RequiredAuth from "./components/shared/RequiredAuth";
import "react-day-picker/dist/style.css";
import AddBook from "./components/page/AddBook/AddBook";
import ViewBooks from "./components/page/ViewBooks/ViewBooks";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <RequiredAuth>
              <ViewBooks />
            </RequiredAuth>
          }
        />
        <Route
          path="/addbook"
          element={
            <RequiredAuth>
              <AddBook />
            </RequiredAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
