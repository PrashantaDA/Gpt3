import './signup.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {

     const [signupData, setSignupData] = useState({
          firstName: '',
          lastName: '',
          email: '',
          number: '',
          password: ''
     })

     const handleChange = (e) => {
          const { name, value } = e.target;

          setSignupData({
               ...signupData,
               [name]: value
          })
     }

     const handleSubmit = (e) => {
          e.preventDefault();

          setSignupData({
               firstName: '',
               lastName: '',
               email: '',
               number: '',
               password: ''
          })
     }

     return (
          <div className='signup__container'>
               <div className="signup__container-heading gradient__text">
                    <h1> Signup </h1>
                    <div />
               </div>
               <form className="signup__container-form" onSubmit={handleSubmit}>
                    <div className="profiledetails">
                         <h2>Profile Information</h2>
                         <input type="text" placeholder='First Name' name='firstName' value={signupData.firstName} onChange={handleChange} required />
                         <input type="text" placeholder='Last Name' name='lastName' value={signupData.lastName} onChange={handleChange} required />
                    </div>
                    <div className="logindetails">
                         <h2>Login Information</h2>
                         <input type="email" name="email" placeholder='Email Address' value={signupData.email} onChange={handleChange} required />
                         <input type="tel" name="number" placeholder='Mobile Number' value={signupData.number} onChange={handleChange} required />
                         <input type="password" name="password" placeholder='Password' value={signupData.password} onChange={handleChange} required />
                    </div>
                    <button className='registerbtn'>Register</button>
               </form>
               <Link to="/">
                    <button className='tohome'>Home</button>
               </Link>
          </div>
     )
}

export default Signup