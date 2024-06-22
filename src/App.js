import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './App.css';


const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="container flex-grow-1 my-3">
        <div className="row">
          <Sidebar />
          <MainContent />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
