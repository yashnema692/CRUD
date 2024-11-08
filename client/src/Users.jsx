import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api')
      .then(result => setUsers(result.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/deleteUser/${id}`)
      .then(res => {
        console.log(res);
        setUsers(users.filter(user => user._id !== id)); // Update state without reloading the page
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="bg-danger vh-100 d-flex align-items-center justify-content-center">
      <div className="bg-white w-50 rounded-3 p-3">
        <Link to="/create" className="btn btn-success">Add+</Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                  <Link to={`/update/${user._id}`} className="btn btn-primary me-2">Edit</Link>
                  <button className="btn btn-danger" onClick={() => handleDelete(user._id)}>Dlt</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
