import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  
  const [user, setUser] = useState({}); 
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    //console.log({id});
    const res = await axios.get(`http://localhost:3001/users/${id}`);
    setUser(res.data);
    console.log(res.data)
  };


  return (
    <>
    <center>
    <div className="container my-3">
      
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
          <li className="list-group-item">Name:{user.name}
        </li>
      
        <li className="list-group-item">User name: {user.username}</li>
        <li className="list-group-item">Email: {user.email}</li>
        <li className="list-group-item">Phone: {user.phone}</li>
        <li className="list-group-item">Website: {user.website}</li>
      </ul>
      
    <Link className="btn btn-primary my-3" to="/">
        back to Home
      </Link>
      </div>
      </center>
  </>
  );
};

export default User;
