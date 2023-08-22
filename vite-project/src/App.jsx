import React from 'react';
import SignUpForm from './components/SignUpForm';
import Authenticate from './components/Authenitcate';
import './App.css'; // You might already have this import

function App() {
  return (
    <div className="App">
      <SignUpForm />
      <Authenticate />
    </div>
  );
}

export default App;

