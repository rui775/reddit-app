import React from 'react';
import { Navbar, Posts, Submenu } from '../components/index'

import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="container mx-auto flex mt-4">
        <Posts />
        <Submenu />
      </main>
    </div>
  );
}

export default App;

