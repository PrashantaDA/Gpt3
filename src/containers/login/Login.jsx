import './login.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiFillCaretRight } from 'react-icons/ai'

const Login = () => {

     const [loginData, setLoginData] = useState({
          email: '',
          password: ''
     })


     const handleChange = (e) => {
          const { name, value } = e.target;

          setLoginData({
               ...loginData,
               [name]: value
          })
     }

     const handleSubmit = (e) => {
          e.preventDefault();

          setLoginData({
               email: '',
               password: ''
          })
     }

     return (
          <>
               <div className="login__container ">
                    <div className="login__container-heading gradient__text">
                         <h1>Login </h1>
                         <div />
                    </div>

                    <form className='login__container-form' onSubmit={handleSubmit}>
                         <input type="email" placeholder='Email Address' name='email' onChange={handleChange} value={loginData.email} required />
                         <input type="password" placeholder='Password' name='password' onChange={handleChange} value={loginData.password} required />
                         <h4 className='forgotpw'>Forgot Password</h4>
                         <button className='btn'>Login</button>
                    </form>

                    <h2 className='gradient__text'>For new People</h2>
                    <p >
                         <Link to="/Signup" className='login__form-reg'>Register Here</Link> (Or) go back to{" "}
                         <Link to="/" className='login__form-home'> Home <AiFillCaretRight className='rightline' /> </Link>
                    </p>

               </div>
          </>
     )
}

export default Login