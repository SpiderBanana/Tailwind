import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CatalogPage from './pages/Catalog';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/catalog" element={<CatalogPage />} />
      </Routes>
    </Router>
  );
}

export default App;