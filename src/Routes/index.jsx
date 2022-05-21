import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Landing from '../pages/Landing'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;