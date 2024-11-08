import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const CreateUsers = () => {
  const [name, setName] = useState()
  const [email, setEmail] =useState()
  const [age, setAge] =useState()
  const navigate = useNavigate()

  const Submit = (e) =>{
            e.preventDefault();
            axios.post("http://localhost:3001/api/Users",{name,email,age})
            .then (result => {
              console.log(result)
              navigate('/')
                 })

             .catch(err=> console.log(err) )

  }

  return (
    <div className='bg-danger vh-100 d-flex align-items-center justify-content-center'>
          <div className='bg-white p-3 w-50 rounded-3'>
              <form onSubmit={Submit}>
                <h2>ADD USER</h2>

                <div className='mb-2'>
                  <label htmlFor="">Name</label>
                  <input type="text" placeholder='Enter Your Name' className='form-control' onChange={(e)=>setName(e.target.value) }/>
                </div>
                
                <div className='mb-2'>
                  <label htmlFor="">Email</label>
                  <input type="text" placeholder='Enter Your Email' className='form-control' onChange={(e)=>setEmail(e.target.value) } />
                </div>

                
                <div className='mb-2'>
                  <label htmlFor="">Age</label>
                <input type="text" placeholder='Enter Your Age' className='form-control' onChange={(e)=>setAge(e.target.value) } />
                </div>

                <button className='btn btn-success'>Submit</button>
              </form>

          </div>
    </div>
  )
}

export default CreateUsers
