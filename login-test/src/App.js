import './App.css';
import AuthForm from './components/AuthForm';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <AuthForm />
    </div>
  );
}

export default App;
