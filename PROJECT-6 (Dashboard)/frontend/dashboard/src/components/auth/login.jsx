import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {


  axios.defaults.withCredentials = true

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()


const handleLogin = async (e) => {
  e.preventDefault()

  const res = await axios.post("http://localhost:2009/login", {
    username,
    password
  }, { withCredentials: true })

  if(res.data.msg === "Login success"){
    navigate("/dashboard")
  }
}

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e6e0ff]">

      <div className="bg-white w-225 h-125 rounded-2xl shadow-lg flex overflow-hidden">

        {/* LEFT SIDE */}
        <div className="w-1/2 bg-[#f4f2ff] flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold text-purple-600 mb-5">Signin here!!</h2>
          <img src="/images/01.png" alt="login" className="w-80" />
        </div>

        {/* RIGHT SIDE */}
        <div className="w-1/2 p-10 flex flex-col justify-center">

          <h2 className="text-2xl font-bold text-purple-700">Welcome!</h2>
          <p className="text-gray-500 text-sm mb-6">
            Sign in with your registered data
          </p>

          <form onSubmit={handleLogin}>

            {/* NAME */}
            <label className="text-sm font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full border rounded-full px-4 py-2 mt-1 mb-4 outline-purple-400"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            {/* PASSWORD */}
            <div className="flex justify-between items-center text-sm">
              <label>Password</label>
              <a href="#" className="text-purple-600">Forgot Password?</a>
            </div>

            <input
              type="password"
              placeholder="Enter Your Password"
              className="w-full border rounded-full px-4 py-2 mt-1 mb-3 outline-purple-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* REMEMBER */}
            <div className="flex items-center gap-2 mb-4 text-sm">
              <input type="checkbox" />
              <span>Remember me</span>
            </div>

            {/* BUTTON */}
            <button type="submit" className="bg-purple-400 hover:bg-purple-500 text-white py-2 rounded-full font-semibold w-full">
              Sign In
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}
