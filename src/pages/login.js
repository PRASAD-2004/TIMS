import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'; 
import Signup from "./Signup";
import App from "./Maindisplay";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    navigate('/');
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" name="email" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to='/Signup' className='m-3 btn btn-danger'>create a account</Link>
      </form>
    </div>
  );
}
