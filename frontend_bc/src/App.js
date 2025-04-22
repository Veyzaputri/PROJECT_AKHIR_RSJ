// src/App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

// User components
import LoginUser from "./components/LoginUser";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

// Pasien components
import PasienList from "./components/PasienList";
import AddPasien from "./components/AddPasien";
import EditPasien from "./components/EditPasien";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* User Routes */}
        <Route path="/" element={<LoginUser />} />
        <Route path="/register" element={<AddUser />} />
        <Route path="/users" element={<UserList />} />

        {/* Pasien Routes */}
        <Route path="/pasien" element={<PasienList />} />
        <Route path="/add-pasien" element={<AddPasien />} />
        <Route path="/edit-pasien/:id" element={<EditPasien />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
