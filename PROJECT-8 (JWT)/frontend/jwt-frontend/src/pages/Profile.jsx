// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Profile = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     if (!token) {
//       navigate("/");
//       return;
//     }

//     axios.get("http://localhost:2001/profile", {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     })
//     .then((res) => {
//       setUser(res.data.profile.user);
//     });

//   }, [navigate]);

//   const logout = () => {
//     localStorage.removeItem("token");
//     navigate("/");
//   };

//   return (
//     <div style={{ width: "300px", margin: "50px auto" }}>
//       <h2>Profile</h2>

//       {user ? (
//         <>
//           <p><b>Name:</b> {user.name}</p>
//           <p><b>Email:</b> {user.email}</p>
//           <button onClick={logout}>Logout</button>
//         </>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default Profile;






// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios'

// export default function Profile() {

//   const navigate = useNavigate()
//   const token = localStorage.getItem("token");

//   useEffect(()=>{
//     if(!token){
//       navigate("/")
//     }else{
//       fetchAllAdmin()
//     }
//   },[])


//   const fetchAllAdmin = async ()=>{
//     await axios.get("http://localhost:2001/profile",{
//       headers: {
//          Authorization: `Bearer ${token}`
//       }
//     }).then((res)=>{
//       console.log(res);
//     })
//   }

//   const logout = () => {
//      localStorage.removeItem("token");
//      navigate("/");
//    };

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <button onClick={()=> logout()}>LogOut</button>
//     </div>  
//   );
// }


import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Profile() {

  const navigate = useNavigate()
  const token = localStorage.getItem("token")

  // ✅ Added state to store profile data
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (!token) {
      navigate("/")
    } else {
      fetchProfile()   // ✅ corrected function name call
    }
  }, [token])   // ✅ added dependency


  // ✅ corrected function
  const fetchProfile = async () => {
    try {
      const res = await axios.get("http://localhost:2001/profile", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      console.log(res)

      // ✅ store response in state
      setUser(res.data.user)

    } catch (error) {
      console.log(error)
      navigate("/")
    }
  }


  const logout = () => {
    localStorage.removeItem("token")
    navigate("/")
  }

  return (
    <div>
      <h1>Dashboard</h1>

      {/* ✅ show user data */}
      {user && (
        <>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </>
      )}

      <button onClick={logout}>LogOut</button>
    </div>
  )
}
