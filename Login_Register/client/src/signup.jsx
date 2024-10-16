import {useState} from "react";
import { Link } from "react-router-dom";
import axios from'axios'

function Signup(){ 
    const[name,setName]=useState()
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()

    const handleSubmit =(e)=>{
          e.preventDefault()
          axios.post('',{name,email,password})
          .then(result=>console.log(result))
          .catch(err=> console.log(err))
    
    }  


    return(
        <div classname="d-flex justify-content-center align-item-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Register</h2>
                <form onsubmit={handleSubmit}></form>
                    <div className="mb-3">
                        <label htmlfor="email">
                            <strong>Name</strong>
                            </label>
                            <input
                               type="text"
                               placeholder="Enter Name"
                               autoComplete="off"
                               name="email"
                               className="form-control rounded-0"
                               onChange={(e)=>setName(e.target.value)}
                             />
                             </div>
                             <div className="mb-3">
                                <label htmlfor="email">
                                    <strong>Email</strong>
                                </label>
                                <input
                                 type="email"
                                 placeholder="Enter Email"
                                 autocomplete="off"
                                 name="email"
                                 className="form-control rounder-0"
                                 onChange={(e)=>setEmail(e.target.value)}
                                 />
                                 </div>
                                 <div className="mb-3">
                                    <label htmlFor="email">
                                        <strong>Password</strong>
                                        </label>
                                        <input
                                        type="password"
                                        placeholder="Enter Password"
                                        name="password"
                                        className="form-control rounder-0"
                                        onChange={(e)=>setPassword(e.target.value)}
                                      />
                                      </div>
                                      <button type="submit" className="btn btn-success w-100 rounded-0">
                                         Register
                                         
                                        </button>
                                        <p>Already have an Account</p>
                                        <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                                          Login
                                        </Link>
           
        </div>
      </div>
     );
    } 

                                         