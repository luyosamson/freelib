import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Adjust the path as needed
import Home from './pages/Home'; // Your Home component
import Library from './pages/Library'; // Your Library component
import MyBooks from './pages/MyBooks'; // Your My Books component
import Login from './pages/Login'; // Your Login component
import Signup from './pages/Signup'; // Your Signup component

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/library" component={Library} />
          <Route path="/my-books" component={MyBooks} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
