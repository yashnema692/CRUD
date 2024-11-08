import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

const UpdateUsers = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/getUser/${id}`)
      .then(result => {
        console.log(result);
        setName(result.data.name);
        setEmail(result.data.email);
        setAge(result.data.age);
      })
      .catch(err => console.log(err));
  }, [id]);

  const Update = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3001/updateUser/${id}`, { name, email, age })
      .then(result => {
        console.log(result);
        navigate('/');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='bg-danger vh-100 d-flex align-items-center justify-content-center'>
      <div className='bg-white p-3 w-50 rounded-3'>
        <form onSubmit={Update}>
          <h2>EDIT USER</h2>

          <div className='mb-2'>
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder='Enter Your Name'
              className='form-control'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          
          <div className='mb-2'>
            <label htmlFor="">Email</label>
            <input
              type="text"
              placeholder='Enter Your Email'
              className='form-control'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='mb-2'>
            <label htmlFor="">Age</label>
            <input
              type="text"
              placeholder='Enter Your Age'
              className='form-control'
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <button type="submit" className='btn btn-success'>Update</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUsers;
