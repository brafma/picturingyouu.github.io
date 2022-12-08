import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Navbar from './Components/Navbar';
import RoutesPage from './Pages/RoutesPage';
import './Styles/index.scss';

function App() {

  return (
    <div className="App">
      <Navbar />
      <RoutesPage />
    </div>
  );
}

export default App;
