import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/page/Signup/Signup";
import Login from "./components/page/Login/Login";
import Dashboard from "./components/page/Dashboard/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/shared/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
