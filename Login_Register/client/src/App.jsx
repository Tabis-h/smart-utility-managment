import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import signup from './signup'
import {BrowserRouter,Routes,Route} from  'react-router-dom'
import Login from './login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BroswerRouter>
       <Routes>
      <Route path='/register' element={<signup />}></Route>
      <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </BroswerRouter>
  )
}

export default App
