
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import clsx from 'clsx';
import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle';

function App() {
  const [mode, setMode] = useState('dark');
  return (
    <div
      className={clsx('App', {
        dark: mode === 'dark'
      })}
    >
      <DarkModeToggle
        mode={mode}
        dark="Dark"
        light="Light"
        size="md"
        onChange={(mode) => {
          setMode(mode);
        }}
      />
      <Header />
      <Footer />
    </div>
  );
}


export default App;
