import { BrowserRouter, Routes, Route } from "react-router-dom";
import Table from "./components/admin/Table";
import ViewAdmin from "./components/admin/ViewAdmin";
import AddAdmin from "./components/admin/AddAdmin";
import Dashboard from "./components/admin/Dashboard";
import Layout from "./components/layout/Layout";
import Login from "./components/auth/login";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function App() {
   const [auth, setAuth] = useState(null)

  useEffect(() => {
    const checkAuth = async () => {
      const res = await axios.get("http://localhost:2009/dashboard", {
        withCredentials: true,
        validateStatus: () => true
      })

      if (res.status === 200 && res.data.auth) {
        setAuth(true)
      } else {
        setAuth(false)
      }
    }
    checkAuth()
  }, [])

  if (auth === null) return <h1>Loading...</h1>

  return (
    <BrowserRouter>
      <Routes>

        {/* LOGIN PAGE */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        {/* ADMIN PANEL */}
        <Route  element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-admin" element={<AddAdmin />} />
          <Route path="/view-admin" element={<ViewAdmin />} />
          <Route path="/admin-table" element={<Table />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;

