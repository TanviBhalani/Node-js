// import "./layout.css";

// export default function Header() {
//   return (
//     <div className="header">
//       <h2>Soft UI Dashboard</h2>
//       <span className="signin">Sign In</span>
//     </div>
//   );
// }



import { useState } from "react"
import {
  FaBars,
  FaBell,
  FaEnvelope,
  FaExpand,
  FaUserCircle,
  FaChevronDown,
  FaCog,
  FaUser,
  FaLock,
  FaSignOutAlt
} from "react-icons/fa"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed top-0 left-0 right-0 h-16 bg-slate-700 text-white flex items-center justify-between px-6 shadow z-50">

      {/* LEFT SECTION */}
      <div className="flex items-center gap-4">
        <FaBars className="text-xl cursor-pointer" />
        <h2 className="font-bold text-lg text-orange-400">QUANTUM ABLE</h2>

        <div className="flex items-center gap-6 ml-6">
          <span className="cursor-pointer">Files</span>
          <span className="cursor-pointer flex items-center gap-1">
            Dropdown <FaChevronDown />
          </span>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-6">

        {/* Search */}
        <input
          type="text"
          placeholder="Search..."
          className="bg-slate-600 px-3 py-1 rounded outline-none text-sm"
        />

        {/* Upgrade Button */}
        <button className="bg-blue-500 px-4 py-1 rounded text-sm font-bold hover:bg-blue-600">
          UPGRADE TO PRO
        </button>

        {/* Notifications */}
        <div className="relative">
          <FaBell className="text-lg cursor-pointer" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-1 rounded-full">9</span>
        </div>

        {/* Messages */}
        <div className="relative">
          <FaEnvelope className="text-lg cursor-pointer" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-1 rounded-full">5</span>
        </div>

        {/* Fullscreen */}
        <FaExpand className="text-lg cursor-pointer" />

        {/* PROFILE */}
        <div className="relative">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <FaUserCircle className="text-2xl" />
            <span>John Doe</span>
            <FaChevronDown />
          </div>

          {/* DROPDOWN MENU */}
          {open && (
            <div className="absolute right-0 mt-3 bg-white text-gray-700 rounded shadow-lg w-48">

              <div className="p-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
                <FaCog /> Settings
              </div>

              <div className="p-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
                <FaUser /> Profile
              </div>

              <div className="p-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
                <FaEnvelope /> My Messages
              </div>

              <hr />

              <div className="p-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
                <FaLock /> Lock Screen
              </div>

              <div className="p-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer text-red-500">
                <FaSignOutAlt /> Logout
              </div>

            </div>
          )}
        </div>

      </div>

    </div>
  )
}
