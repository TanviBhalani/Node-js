// import React from 'react'
// import axios from "axios"
// import { useState } from 'react'
// import { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'

// export default function App() {

//   const [formData , setFormData] = useState({})
//   const [record , setRecord] = useState([])
//   const [editIndex , setEditIndex] = useState(null)
//   const navigate = useNavigate()

//   useEffect(() => {
//   axios.get("http://localhost:2000/dashboard", { withCredentials: true })
//     .then(res => {
//       if (!res.data.auth) {
//         navigate("/login")
//       }
//     })
// }, [])


//   useEffect(() => {
//     fetchData()
//   },[])

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name] : e.target.value
//     })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     console.log(formData)

//     if(editIndex == null){
//          await axios.post("http://localhost:2000/addData" , formData).then((res) => {
//         alert(res.data.msg)
//        })
//     }
//     else{
//          await axios.put("http://localhost:2000/updateData" , formData).then((res) => {
//         alert(res.data.msg)
//        })
//     }

//     setFormData({
//       name : "",
//       password : "",
//       city : ""
//     })

//     setEditIndex(null)
//     fetchData()
// }

//   const fetchData = async () => {
//     await axios.get("http://localhost:2000/getData", {
//   withCredentials: true
// }).then((res) => {
//   setRecord(res.data.data)
// })

//   }

//   const handleDelete = async (id) => {
//     await axios.delete(`http://localhost:2000/deleteData?id=${id}`).then((res) => {
//       alert(res.data.msg)
//       let newData = record.filter((item) => item._id !== id)
//       setRecord(newData)
//     })
//   }



//   const handleEdit = async (id) => {
//     const singleData = record.find((item) => item._id === id)
//     setFormData({
//       _id : singleData._id,
//       name : singleData.name,
//       password : singleData.password,
//       city : singleData.city
//     })
//     setEditIndex(id)
//   }

//   const logout = async () => {
//   await axios.get("http://localhost:2000/logout", {
//     withCredentials: true
//   })
//   navigate("/login")
// }


//   return (
//     <div>
//       <h1>Crud in mern</h1>
//       <br />
//       <button onClick={() => logout()}>Logout</button>
//       <br /><br />
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder='Enter your name' name='name' onChange={handleChange} value={formData.name}/>
//         <input type="password" placeholder='Enter your password' name='password' onChange={handleChange} value={formData.password}/>
//         <input type="text" placeholder='Enter your city' name='city'  onChange={handleChange} value={formData.city}/>
//         <button type='submit'>{editIndex ? "Update" : "AddData"}</button>
//       </form>
//       <table width={"100%"} border={1}>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Password</th>
//             <th>City</th>
//             <th colSpan={2}>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {
//             record.map((e,i) => {
//              return <tr key={i}>
//                 <td>{e._id}</td>
//                 <td>{e.name}</td>
//                 <td>{e.password}</td>
//                 <td>{e.city}</td>
//                 <td><button onClick={() => handleEdit(e._id)} >Edit</button></td>
//                 <td><button onClick={() => handleDelete(e._id)}>Delete</button></td>
//               </tr>
//             })
//           }
//         </tbody>
//       </table>
//     </div>
//   )
// }











import React from 'react'
import axios from "axios"
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {

  const [formData, setFormData] = useState({
    name: "",
    password: "",
    city: ""
  })
  const [record, setRecord] = useState([])
  const [editIndex, setEditIndex] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:2000/dashboard", { withCredentials: true })
      .then(res => {
        if (!res.data.auth) {
          navigate("/login")
        }
      })
  }, [])

  useEffect(() => {
    fetchData()
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (editIndex == null) {
      await axios.post("http://localhost:2000/addData", formData).then((res) => {
        alert(res.data.msg)
      })
    } else {
      await axios.put("http://localhost:2000/updateData", formData).then((res) => {
        alert(res.data.msg)
      })
    }

    setFormData({
      name: "",
      password: "",
      city: ""
    })

    setEditIndex(null)
    fetchData()
  }

  const fetchData = async () => {
    await axios.get("http://localhost:2000/getData", {
      withCredentials: true
    }).then((res) => {
      setRecord(res.data.data)
    })
  }

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:2000/deleteData?id=${id}`).then((res) => {
      alert(res.data.msg)
      let newData = record.filter((item) => item._id !== id)
      setRecord(newData)
    })
  }

  const handleEdit = async (id) => {
    const singleData = record.find((item) => item._id === id)
    setFormData({
      _id: singleData._id,
      name: singleData.name,
      password: singleData.password,
      city: singleData.city
    })
    setEditIndex(id)
  }

  const logout = async () => {
    await axios.get("http://localhost:2000/logout", {
      withCredentials: true
    })
    navigate("/login")
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg hidden md:block">
        <div className="p-6 text-xl font-bold text-blue-600">
          Dashboard
        </div>
        <button
          onClick={logout}
          className="mx-6 mt-4 w-[calc(100%-3rem)] bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Logout
        </button>
      </aside>

      {/* Main */}
      <div className="flex-1 p-8">

        {/* Header */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Dashboard</h1>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-lg font-medium mb-4">
            {editIndex ? "Update User" : "Add User"}
          </h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
              value={formData.name || ""}
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={formData.password || ""}
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="City"
              name="city"
              onChange={handleChange}
              value={formData.city}
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              {editIndex ? "Update" : "Add"}
            </button>
          </form>
        </div>

        {/* Table Card */}
        <div className="bg-white rounded-2xl shadow overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="p-4">ID</th>
                <th>Name</th>
                <th>Password</th>
                <th>City</th>
                <th colSpan="2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {record.map((e, i) => (
                <tr key={i} className="border-t hover:bg-gray-50">
                  <td className="p-4 text-xs">{e._id}</td>
                  <td>{e.name}</td>
                  <td>{e.password}</td>
                  <td>{e.city}</td>
                  <td>
                    <button
                      onClick={() => handleEdit(e._id)}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-md"
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(e._id)}
                      className="px-3 py-1 bg-red-100 text-red-600 rounded-md"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}
