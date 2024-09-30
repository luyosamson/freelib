import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Library from './pages/Library';
import MyBooks from './pages/MyBooks';
import Login from './pages/Login';
// import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import Footer from './pages/Footer';
import Register from './pages/images/Register';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route path="/my-books" element={<MyBooks />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
          <Route path="/register" element={<Register/>} />).
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
