import { useState } from 'react'

import './App.css'

import {BrowserRouter , Routes , Route} from  'react-router-dom'
import Users from './Users'
import CreateUsers from './CreateUsers'
import UpdateUsers from './UpdateUsers'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
       <BrowserRouter>
          <Routes>
            <Route path='/' element={<Users/>} ></Route>
            <Route path='/create' element={<CreateUsers/>} ></Route>
            <Route path='/update/:id' element={<UpdateUsers/>} ></Route>
          </Routes>
       </BrowserRouter>

    </>
  )
}

export default App
