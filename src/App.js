import React from 'react';

import './App.css';
import ColorList from './components/ColorList';
import Guideline from './components/Guideline';
import Header from './components/Header';
import SuccessModal from './components/SuccessModal';

export default function App() {
  return (
    <div>
      <Header />
      <Guideline />
      <SuccessModal />
      <ColorList />
    </div>
  )
}