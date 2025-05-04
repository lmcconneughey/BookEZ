'use client'

import SocialLogin from "../social-login/SocialLogin";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState, useEffect } from "react";

const RegistrationForm = () => {
    const router = useRouter()
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({ name: '', email: '' });
    const [updateUser, setUpdateUser] = useState({ id: '', name: '', email: '' });
  
    //fetch users
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:8080/users');
          console.log(response.data)
          setUsers(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    //create user
    const createUser = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post(`http://localhost:8080/users/add`, newUser);
        setUsers([response.data, ...users]);
        setNewUser({ name: '', email: '' , password: ''});
        response.status === 200 && router.push('/store/login')
      } catch (error) {
        console.error('Error creating user:', error);
      }
    };

    return (
      <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
        <div className="space-y-4 w-full max-w-2xl">
          <h1 className="text-2xl font-bold text-gray-800 text-center">Registration Form</h1>
  
          {/* Create user */}
          <form onSubmit={createUser} className="p-4 bg-blue-100 rounded shadow">
            <input
              placeholder="Name"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              className="text-black mb-2 w-full p-2 border border-gray-300 rounded"
            />
            <input
              placeholder="Email"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              className="text-black mb-2 w-full p-2 border border-gray-300 rounded"
            />
            <input
              placeholder="password"
              value={newUser.password}
              onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
              className="text-black mb-2 w-full p-2 border border-gray-300 rounded"
            />
            <button type="submit" className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600">
              Register
            </button>
          </form>
        </div>
        <SocialLogin/>
      </main>
            );

}

export default RegistrationForm

// const RegistrationForm = () => {
//     const router = useRouter()
//     async function handleSubmit (event) {
//         event.preventDefault()  
//            const formData = {
//                 name: event.target.name.value,
//                 email: event.target.email.value,
//                 password: event.target.email.password
//             }  
//         try { 
//             console.log(email);
//             const registerUser = await axios.post("http://localhost:8080/users", newUser)

//             registerUser.status === 201 && router.push('/store/login')// if req success direct to user home

//         } catch (error) {
//             console.log(error.message);
            
//         }
//     }

//     return (
//         <div>
//             <form 
//                 onSubmit={handleSubmit}
//                 className="my-5 flex flex-col items-center border p-3 border-gray-200 rounded-md">
//                 <div className="my-2">
//                     <label htmlFor="email">Name</label>
//                     <input
//                         className="border mx-2 border-b-gray-500 rounded"
//                         type="text"
//                         name="name"
//                         id="name"
//                     />
//                 </div>
//                 <div className="my-2">
//                     <label htmlFor="email">Email</label>
//                     <input
//                         className="border mx-2 border-b-gray-500 rounded"
//                         type="email"
//                         name="email"
//                         id="email"
//                     />
//                 </div>
//                 <div className="my-2">
//                     <label htmlFor="password">Password</label>
//                     <input
//                         className="border mx-2 border-b-gray-500 rounded"
//                         type="password"
//                         name="password"
//                         id="password"
//                     />
//                 </div>
//                 <button
//                     type="submit"
//                     className="min-w-32 rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//                 >
//                     Credential Login
//                 </button>
//             </form>
//             <SocialLogin />
//         </div>
//     );
// };

// export default RegistrationForm;
