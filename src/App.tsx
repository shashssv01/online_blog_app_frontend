import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddNewBlog from './components/AddNewBlog/AddNewBlog';
import Login from 'components/Login/Login';
import Signup from 'components/SignUp/SignUp';
// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';

const App : React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className='central-element'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addblog" element={<AddNewBlog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/create-blog" element={<AddNewBlog />} />
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

/*
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

const App: React.FC = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;

*/