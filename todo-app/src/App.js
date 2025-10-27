import './App.css';
import React, {useState} from 'react';
import Home from './pages/Home';
import About from './pages/About';
//import NotFound from './pages/NotFound';
import Header from './components/Header';
import Todo from './components/Todo';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <div className="layout">
        <main>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/todo' element={<Todo />} />
            <Route path='/about' element={<About />} />
            <Route path="*" element={<NotFound />} /> 
          </Routes>
        </main>
        <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;