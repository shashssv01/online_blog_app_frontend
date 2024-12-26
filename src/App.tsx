import React from 'react';
import './App.css';
import Header from './components/Header/Header.tsx';
import Footer from './components/Footer/Footer.tsx';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import AboutPage from './pages/AboutPage.tsx';
import AddNewBlog from './components/AddNewBlog/AddNewBlog.tsx';

// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';

const App : React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div> <div> Dummy Div</div></div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/addblog" element={<AddNewBlog />} />
      </Routes>
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