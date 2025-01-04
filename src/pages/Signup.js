import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './login';

export default function Signup() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
    employeeId: "",
    role: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitted credentials:', credentials);
  };

  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  const roles = ['Admin', 'Manager', 'Sales'];

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" name='name' onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name='password' onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label htmlFor="employeeId" className="form-label">Employee ID</label>
          <input type="text" className="form-control" id="employeeId" name='employeeId' onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label htmlFor="role" className="form-label">Role</label>
          <select className="form-select" id="role" name='role' value={credentials.role} onChange={handleChange} 
                  style={{ color: 'black', backgroundColor: 'white' }}> 
            <option value="">Select Role</option>
            {roles.map((role) => (
              <option key={role} value={role}>{role}</option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to='/login' className='m-3 btn btn-danger'>Already a user</Link>
      </form>
    </div>
  );
}