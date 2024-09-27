import { useEffect, useState } from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";
import Extensions from './pages/Extensions'
import SideDrawer from './components/SideDrawer'
import ALertItem from './components/ALertItem';
import Login from './pages/Login';
import { useDisclosure } from '@chakra-ui/react';
import Publish from './pages/publish/Publish';
import Home from './pages/Home';
import Error from './pages/Error';
import Loader from './components/Loader';
import Users from './pages/users/Users';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';

function App() {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [])
  


  return (
    <div style={{  position: 'relative'}}>
      {loading && <Loader />}
      {
        !loading && 
        <>
          <SideDrawer />
          <Routes>
              <Route path='/' element={<Home />}  />
              <Route path='products' element={<Extensions />} />
              <Route path='users' element={<Users />} />
              <Route path='publish' element={<Publish />} />
              <Route path='login' element={<SignIn />} />
              <Route path='register' element={<SignUp />} />
              <Route path='*' element={<Error />} />
          </Routes>
        </>
      }
    </div>
  )
}

export default App
