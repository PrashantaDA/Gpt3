import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { Login, Signup } from './containers'
import './App.css'

const App = () => {
     return (
          <div className='App'>

               <Routes>

                    <Route path='/' element={<Home />} />
                    <Route path='/Login' element={<Login />} />
                    <Route path='/Signup' element={<Signup />} />
               </Routes>



          </div>
     )
}

export default App