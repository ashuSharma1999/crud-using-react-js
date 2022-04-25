import React, { useState, useEffect } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3001/users");

    setUser(result.data);
  };
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3001/users/${id}`);
    loadUsers();
  };
  return (
    <div className="container my-3">
      <table class="table table-light table-striped">
        <thead>
          <tr style={{ textAlign: "center" }}>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">User name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: "center" }}>
          {users.map((user, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <Link className="btn btn-primary mr-2" to={`/users/${user.id}`}>
                  View
                </Link>
                <Link
                  className="btn btn-success mr-2 mx-2"
                  to={`/users/edit/${user.id}`}
                >
                  Edit
                </Link>
                <Link
                  className="btn btn-danger"
                  to=""
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
