import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';

import Home from './Pages/Home';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import About from './Pages/AboutUs';
import OverviewPage from './Pages/OverView';
import Login from './Pages/Login';
import BlogAdminPage from './Pages/BlogAdmin';
import DashboardLayout from './Components/DashboardLayout';
import SignUp from './Pages/SignUp';
import Bookings from './Pages/Bookings';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <div className='App'>
        <Header/>
        <div className="flex flex-col min-h-screen">
          <Navigation />

          {/* Main content changes based on the route */}
          <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/services" element={<Services />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/about" element={<About />} />
  <Route path="/blog" element={<Blog />} />
  <Route path="/signup" element={<SignUp />} />
  <Route path="/overview" element={<OverviewPage />} />
  <Route path="/dashboard" element={<DashboardLayout />}>
    <Route index element={<OverviewPage />} />
    <Route path="blogAdmin" element={<BlogAdminPage />} />
    <Route path="bookings" element={<Bookings />} />
    {/* ...other dashboard routes... */}
  </Route>
  <Route path='/login' element={<Login />} />
  {/* Add more routes as needed */}
</Routes>
          
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
