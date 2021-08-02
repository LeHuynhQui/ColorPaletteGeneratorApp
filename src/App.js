import React from 'react';

import './App.css';
import ColorList from './components/ColorList';
import Header from './components/Header';
import SuccessModal from './components/SuccessModal';

export default function App() {
  return (
    <div>
      <Header />
      <SuccessModal />
      <ColorList />
    </div>
  )
}