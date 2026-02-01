import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login() {
  axios.defaults.withCredentials = true
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    password: ""
  })

  const handleChange = (e) => {
    setFormData({
       ...formData, 
       [e.target.name]: e.target.value 
      })
  }

 const handleLogin = async (e) => {
  e.preventDefault()

  const res = await axios.post("http://localhost:2000/login",formData,
    { validateStatus: () => true }
  )

  const message = res.data.msg === "Login Successfully" ? "Login Successfully!!" : "User not found!!"

  alert(message)

  if (res.data.msg === "Login Successfully") {
    navigate("/dashboard")
  } 
  else {
    setFormData({
      name: "",
      password: ""
    })
  }
}



  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">

      {/* Login Card */}
      <div className="w-full max-w-md bg-blue-50 rounded-3xl shadow-xl p-10">

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-blue-200 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-blue-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M12 8v6m0 0l-3-3m3 3l3-3" />
            </svg>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-center text-blue-700 mb-6">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Username */}
          <input  type="text" name="name" value={formData.name || ""} onChange={handleChange} placeholder="Username" className="w-full px-4 py-3 rounded-lg bg-white border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Password */}
          <input type="password" name="password" value={formData.password || ""} onChange={handleChange} placeholder="Password" className="w-full px-4 py-3 rounded-lg bg-white border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"/>

          {/* Button */}
          <button type="submit" className="w-full py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition">Login</button>
        </form>

        {/* Forgot */}
        <div className="text-center mt-4">
          <span className="text-sm text-blue-600 hover:underline cursor-pointer">Forgot password?</span>
        </div>

      </div>
    </div>
  )
}
