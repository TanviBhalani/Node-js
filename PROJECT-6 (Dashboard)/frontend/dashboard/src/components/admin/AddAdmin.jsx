// import React, { useEffect, useState } from 'react'
// import axios from "axios"
// import { useLocation, useNavigate } from 'react-router-dom'

// export default function AddAdmin() {
//   const [formData , setFormData] = useState({})

//   const location = useLocation()
//   const editData = location.state
//   const navigate = useNavigate()

//   useEffect(() => {
//     if(editData){
//       setFormData(editData)
//     }
//   },[editData])

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]:e.target.value
//     })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     console.log(formData)

//      if(!editData) {
//        await axios.post("http://localhost:2009/addData" , formData).then((res) => {
//         alert(res.data.msg)
//        })
//     }
//     else{
//       await axios.put(`http://localhost:2009/updateData/${editData._id}` , formData).then((res) => {
//       alert(res.data.msg)
//     })
//     }

//     navigate("/admin-table")
    

//     setFormData({
//       name : "",
//       age: "",
//       email : "",
//       password : ""
//     })

//   }


//   return (
//     <div className="card">
//       <h2>Add Admin</h2>

//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder='Enter your name' name='name'onChange={handleChange} value={formData.name} /><br /><br />
//         <input type="number" placeholder='Enter your age' name='age' onChange={handleChange} value={formData.age}/><br /><br />
//         <input type="text" placeholder='Enter your email' name='email' onChange={handleChange} value={formData.email} /><br /><br />
//         <input type="text" placeholder='Enter your password' name='password' onChange={handleChange} value={formData.password}/><br /><br /><br />
//         <button type='submit'>{editData ? "Update" : "Add Data"}</button>
//       </form>

//     </div>
//   )
// }









import React, { useEffect, useState } from "react"
import axios from "axios"
import { useLocation, useNavigate } from "react-router-dom"

export default function AddAdmin() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    city: "",
    phone: "",
    address: "",
    readonly: "Only Readable input ..."
  })

  const location = useLocation()
  const editData = location.state
  const navigate = useNavigate()

  useEffect(() => {
    if (editData) {
      setFormData(editData)
    }
  }, [editData])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!editData) {
      await axios.post("http://localhost:2009/addData", formData)
      alert("Data Added")
    } else {
      await axios.put(`http://localhost:2009/updateData/${editData._id}`, formData)
      alert("Data Updated")
    }

    navigate("/admin-table")
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6 ml-64 mt-16">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* BASIC FORM */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="font-bold text-lg mb-4">Basic Form Controls</h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Username */}
            <div>
              <label className="text-sm font-medium ml-3">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Enter Your Username"
                value={formData.username}
                onChange={handleChange}
                className="w-full border rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-purple-400 mt-1"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium ml-3">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-purple-400 mt-1"
              />
            </div>

            {/* City */}
            <div>
              <label className="text-sm font-medium ml-3">City</label>
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full border rounded-full px-4 py-2 mt-1"
              >
                <option>Select Your City</option>
                <option>Delhi</option>
                <option>Mumbai</option>
                <option>Ahmedabad</option>
                <option>Bangalore</option>
              </select>
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm font-medium ml-3">Contact</label>
              <div className="flex border rounded-full overflow-hidden mt-1">
                <span className="bg-gray-100 px-3 py-2">+91</span>
                <input
                  type="text"
                  name="phone"
                  placeholder="xxx-xxxxx-xxx"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 outline-none"
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="text-sm font-medium ml-3">Address</label>
              <textarea
                name="address"
                placeholder="Enter Your Address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-2 mt-1"
              ></textarea>
            </div>

            {/* Readonly */}
            
            <input className="w-full border rounded-full px-4 py-2 bg-gray-100"  name="readonly" type="text" placeholder="Only Readable input ..." />


            {/* Checkbox */}
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <span className="text-sm">Default checkbox</span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-full font-semibold"
            >
              Submit
            </button>

          </form>
        </div>

        {/* ROUNDED FORM (Second Card Same UI) */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="font-bold text-lg mb-4">Rounded Form Control</h2>

          {/* SAME FORM COPY (UI DEMO) */}
          <form className="space-y-4">

            <input className="w-full border rounded-full px-4 py-2" placeholder="Enter Your Username" />
            <input className="w-full border rounded-full px-4 py-2" placeholder="Enter Your Password" />
            <select className="w-full border rounded-full px-4 py-2">
              <option>Select Your City</option>
            </select>

            <div className="flex border rounded-full overflow-hidden">
              <span className="bg-gray-100 px-3 py-2">+91</span>
              <input className="w-full px-3 py-2 outline-none" placeholder="xxx-xxxxx-xxx" />
            </div>

            <textarea className="w-full border rounded-xl px-4 py-2" placeholder="Enter Your Address"></textarea>

            <input className="w-full border rounded-full px-4 py-2 bg-gray-100" placeholder="Only Readable input ..." />

            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <span>Default checkbox</span>
            </div>

            <button className="bg-purple-500 text-white px-6 py-2 rounded-full">
              Submit
            </button>

          </form>
        </div>

      </div>
    </div>
  )
}
