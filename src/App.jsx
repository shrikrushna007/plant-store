import React from 'react';
import './App.css'; // Custom CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import IconGrid from './components/IconGrid';
import FeaturedPlants from './components/FeaturedPlants';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <IconGrid />
      <FeaturedPlants />
      <Footer />
    </div>
  );
}

export default App;
