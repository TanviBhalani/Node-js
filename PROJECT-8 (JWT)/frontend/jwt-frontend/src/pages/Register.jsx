import React, { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"

export default function Register() {

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleRegister = async () => {
    const res = await axios.post("http://localhost:2001/register", formData)
    alert(res.data.msg)
    navigate("/login")
  }

  return (
    <div>
      <h1>Register</h1>

      <input type="text" name="name" placeholder="Name" onChange={handleChange} />
      <br /><br />

      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <br /><br />

      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <br /><br />

      <button onClick={handleRegister}>Register</button>
      <br /><br />

      <Link to="/login">Login ?</Link>
    </div>
  )
}
