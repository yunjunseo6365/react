import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Addcard from './components/Addcard';

function App() {
  return (
    <div className="App">
      <Header />
      <Addcard />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
