// import { Link } from "react-router-dom";
// import "./layout.css";

// export default function Sidebar() {
//   return (
//     <div className="sidebar">
//       <h3 className="logo">Soft UI</h3>

//       <Link to="/dashboard">Dashboard</Link>

//       <p className="menu-title">ADMIN</p>
//       <Link to="/add-admin">Add Admin</Link>
//       <Link to="/view-admin">View Admin</Link>
//       <Link to="/admin-table">Admin Table</Link>

//       <Link to="/" className="logout">Logout</Link>
//     </div>
//   );
// }


import { Link } from "react-router-dom"
import { useState } from "react"
import {
  FaTachometerAlt,
  FaLayerGroup,
  FaChartBar,
  FaWpforms,
  FaTable,
  FaFileAlt,
  FaBars,
  FaChevronDown,
} from "react-icons/fa"

export default function Sidebar() {

  // Dropdown states
  const [uiOpen, setUiOpen] = useState(false)
  const [chartOpen, setChartOpen] = useState(false)
  const [formOpen, setFormOpen] = useState(false)
  const [pageOpen, setPageOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="w-64 h-screen bg-white border-r p-4 text-gray-700 fixed left-0 overflow-y-auto mt-18">

      {/* LOGO */}
     

      {/* NAVIGATION */}
      <p className="text-blue-500 text-xs font-semibold mb-2">--- Navigation</p>

      <Link to="/dashboard" className="flex items-center gap-3 py-2 px-2 hover:bg-gray-100 rounded">
        <FaTachometerAlt /> Dashboard
      </Link>

      {/* COMPONENTS */}
      <p className="text-blue-500 text-xs font-semibold mt-4 mb-2">--- Components</p>

      {/* UI ELEMENTS */}
      <div
        onClick={() => setUiOpen(!uiOpen)}
        className="flex items-center justify-between py-2 px-2 hover:bg-gray-100 rounded cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <FaLayerGroup /> UI Elements
        </div>
        <FaChevronDown className={`${uiOpen ? "rotate-180" : ""} transition`} />
      </div>

      {uiOpen && (
        <div className="ml-6 text-sm space-y-1">
          <Link className="block hover:text-blue-500">Buttons</Link>
          <Link className="block hover:text-blue-500">Cards</Link>
          <Link className="block hover:text-blue-500">Alerts</Link>
        </div>
      )}

      {/* CHARTS */}
      <div
        onClick={() => setChartOpen(!chartOpen)}
        className="flex items-center justify-between py-2 px-2 hover:bg-gray-100 rounded cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <FaChartBar /> Charts & Maps
          <span className="bg-green-500 text-white text-xs px-1 rounded ml-2">New</span>
        </div>
        <FaChevronDown className={`${chartOpen ? "rotate-180" : ""} transition`} />
      </div>

      {chartOpen && (
        <div className="ml-6 text-sm space-y-1">
          <Link className="block hover:text-blue-500">Bar Chart</Link>
          <Link className="block hover:text-blue-500">Pie Chart</Link>
          <Link className="block hover:text-blue-500">Maps</Link>
        </div>
      )}

      {/* FORMS */}
      <div
        onClick={() => setFormOpen(!formOpen)}
        className="flex items-center justify-between py-2 px-2 hover:bg-gray-100 rounded cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <FaWpforms /> Forms
        </div>
        <FaChevronDown className={`${formOpen ? "rotate-180" : ""} transition`} />
      </div>

      {formOpen && (
        <div className="ml-6 text-sm space-y-1">
          <Link className="block hover:text-blue-500">Basic Form</Link>
          <Link className="block hover:text-blue-500">Validation</Link>
        </div>
      )}

      {/* TABLE */}
      <Link to="/admin-table" className="flex items-center gap-3 py-2 px-2 hover:bg-gray-100 rounded">
        <FaTable /> Table
      </Link>

      {/* MORE */}
      <p className="text-blue-500 text-xs font-semibold mt-4 mb-2">--- More</p>

      {/* PAGES */}
      <div
        onClick={() => setPageOpen(!pageOpen)}
        className="flex items-center justify-between py-2 px-2 hover:bg-gray-100 rounded cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <FaFileAlt /> Pages
        </div>
        <FaChevronDown className={`${pageOpen ? "rotate-180" : ""} transition`} />
      </div>

      {pageOpen && (
        <div className="ml-6 text-sm space-y-1">
          <Link className="block hover:text-blue-500">Login</Link>
          <Link className="block hover:text-blue-500">Register</Link>
        </div>
      )}

      {/* MENU LEVEL */}
      <p className="text-blue-500 text-xs font-semibold mt-4 mb-2">--- Menu Level</p>

      <div
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex items-center justify-between py-2 px-2 hover:bg-gray-100 rounded cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <FaBars /> Menu Level 1
        </div>
        <FaChevronDown className={`${menuOpen ? "rotate-180" : ""} transition`} />
      </div>

      {menuOpen && (
        <div className="ml-6 text-sm space-y-1">
          <Link className="block hover:text-blue-500">Level 2</Link>
          <Link className="block hover:text-blue-500">Level 3</Link>
        </div>
      )}

      {/* ADMIN */}
      <p className="text-blue-500 text-xs font-semibold mt-4 mb-2">--- Admin</p>
      <Link to="/add-admin" className="block py-2 px-2 hover:bg-gray-100 rounded">Add Admin</Link>
      <Link to="/view-admin" className="block py-2 px-2 hover:bg-gray-100 rounded">View Admin</Link>

      {/* LOGOUT */}
      <Link to="/" className="block mt-6 text-red-500 font-semibold">Logout</Link>

    </div>
  )
}
