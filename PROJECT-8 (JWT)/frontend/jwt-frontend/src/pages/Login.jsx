import React, { useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"

export default function Login() {

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await axios.post("http://localhost:2001/login", formData)

    if (res.data.token) {
      localStorage.setItem("token", res.data.token)
      navigate("/profile")
    } else {
      alert(res.data.msg)
    }
  }

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <br /><br />

        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <br /><br />

        <button type="submit">Login</button>
        <br /><br />

        <Link to="/">Register ?</Link>
      </form>
    </div>
  )
}
