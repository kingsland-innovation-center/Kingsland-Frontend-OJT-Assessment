import React from "react";
import {
  Login,
  Welcome,
  Register,
  Dashboard,
  AddStudent,
  Students,
} from "./views";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";

const AppRoutes = () => {
  const authentication = JSON.parse(localStorage.getItem("Authentication"));

  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="*" element={<Welcome />} />
        <Route exact path="/" element={<Welcome />} />.
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={authentication ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          exact
          path="/students"
          element={authentication ? <Students /> : <Navigate to="/login" />}
        />
        <Route
          exact
          path="/students/add"
          element={authentication ? <AddStudent /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};
export default AppRoutes;
