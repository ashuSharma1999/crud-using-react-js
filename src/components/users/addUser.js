import  axios  from 'axios';
import { useNavigate} from "react-router-dom";

import React,{useState} from 'react'


const AddUser = () => {
    const navigate=useNavigate();
    const[user,setUser]=useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:"",
    });
    const{name,username,email,phone,website}=user;
    const onInputChange=e=>{
        setUser({...user,[e.target.name]:e.target.value})
    };
    const onSubmit=async e=>{
        e.preventDefault();
        await axios.post("http://localhost:3001/users",user);
       
        navigate("/")
    };
  
  return (
        <div className="container my-3">
          <div className=" w-75 mx-auto shadow p-3">
            <h2 className="text-center mb-4">Add user</h2>
            <form onSubmit={e=>onSubmit(e)}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg "placeholder="Enter Your Name"
                  name="name"
                  value={name}
                  onChange={e=>onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg my-3"
                  placeholder="Enter Your Username"
                  name="username"
                  value={username}
                  onChange={e=>onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control form-control-lg my-3"
                  placeholder="Enter Your E-mail Address"
                  name="email"
                  value={email}
                  onChange={e=>onInputChange(e)}
                  
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg my-3"
                  placeholder="Enter Your Phone Number"
                  name="phone"
                  value={phone}
                  onChange={e=>onInputChange(e)}
                  
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Your Website Name"
                  name="website"
                  value={website}
                  onChange={e=>onInputChange(e)}
                />
              </div>
              <button className="btn btn-primary btn-block my-3" >Add User</button>
            </form>
          </div>
        </div>
  )
}

export default AddUser