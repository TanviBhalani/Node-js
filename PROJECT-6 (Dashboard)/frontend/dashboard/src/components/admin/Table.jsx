import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'


export default function Table() {
    const [record , setRecord] = useState([])
    const navigate = useNavigate()
  
    useEffect(() => {
      fetchData()
    },[])

  const fetchData = async () => {
      await axios.get("http://localhost:2009/getData").then((res) => {
        setRecord(res.data.data)
      })
    }


  const handleDelete = async(id) => {
    await axios.delete(`http://localhost:2009/deleteData?id=${id}`).then((res) => {
      alert(res.data.msg)
      let newData = record.filter((item) => item._id !== id)
      setRecord(newData)
    })
  } 
  
  const handleEdit = (data) => {
    navigate("/add-Admin", {state:data})
  } 
  return (
    <div className="card ml-68 mt-25">
      <h2 className='text-2xl font-medium my-5'>Admin Table</h2>

      <table className="w-full text-sm border-collapse">
  <thead>
    <tr className="border-b text-left text-gray-600">
      <th className="py-3">Username</th>
      <th>City</th>
      <th>Contact</th>
      <th>Address</th>
      <th colSpan={2}>Actions</th>
    </tr>
  </thead>

  <tbody>
    {record.map((e, i) => (
      <tr key={i} className="border-b border-dashed hover:bg-gray-50">

        <td className="py-3 font-medium">{e.username}</td>
        <td>{e.city}</td>
        <td>{e.phone}</td>
        <td>{e.address}</td>

        {/* EDIT BUTTON */}
        <td>
          <button
            onClick={() => handleEdit(e)}
            className="bg-green-200 text-green-700 p-2 rounded hover:bg-green-300"
          >
            ✏️
          </button>
        </td>

        {/* DELETE BUTTON */}
        <td>
          <button
            onClick={() => handleDelete(e._id)}
            className="bg-pink-200 text-pink-700 p-2 rounded hover:bg-pink-300"
          >
            🗑️
          </button>
        </td>

      </tr>
    ))}
  </tbody>
</table>

    </div>
  )
}
