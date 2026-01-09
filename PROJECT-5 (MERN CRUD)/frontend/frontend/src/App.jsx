import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function App() {
  const [formData, setFormData] = useState({})
  const [record , setRecord] = useState([])
  const [editIndex , setEditIndex] = useState(null)


  useEffect(() => {
     fetchData()
  },[])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (editIndex === null) {
    await axios.post("http://localhost:2000/addData", formData);
  } 
  else {
    await axios.put("http://localhost:2000/updateData", formData).then((res) => {
      alert(res.data.msg)
    })
  }

    setFormData({
        name : "",
        age: "",
        city : ""
      })

      setEditIndex(null)
      fetchData()
    // console.log(formData)
  }

  const handleDelete = async (id)=> {
    await axios.delete(`http://localhost:2000/deleteData?id=${id}`).then((res) => {
      alert(res.data.msg)
      let newData = record.filter((item) => item._id != id)
      setRecord(newData)
    })
  }

  const handleEdit = async (id) => {
    const singleData = record.find((item) => item._id === id)
    setFormData({
       _id: singleData._id,
      name : singleData.name,
      age : singleData.age,
      city : singleData.city,
    })
    setEditIndex(id)
  }

  const fetchData = async () => {
    await axios.get("http://localhost:2000/getData").then((res) => {
      setRecord(res.data.data)
    })
  }
 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter your name' name='name' onChange={handleChange} value={formData.name} />
        <input type="number" placeholder='Enter your age' name='age' onChange={handleChange} value={formData.age} />
        <input type="text" placeholder='Enter your city' name='city' onChange={handleChange} value={formData.city} />
        <button type='submit'>AddData</button>
      </form>

      {
        record.map((e,i) => {
          return <ul key={i}>
            <li>{e._id}</li>
            <li>{e.name}</li>
            <li>{e.age}</li>
            <li>{e.city}</li>
            <li><button onClick={() => handleEdit(e._id)}>Edit</button></li>
            <li><button onClick={() => handleDelete(e._id)}>Delete</button></li>
          </ul>
        })
      }
    </div>
  )
}
