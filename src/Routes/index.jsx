import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Landing from '../pages/Landing'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Footer from '../components/Footer'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;