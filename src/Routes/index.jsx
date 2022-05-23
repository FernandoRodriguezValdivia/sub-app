import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Landing from '../pages/Landing'
import Footer from '../components/Footer'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;