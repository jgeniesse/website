import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import ErrorPage from './components/ErrorPage';
import Footer from './components/Footer';


export default function App() {
  const [highlight, setHighlight] = useState("home");

  return (
    <div className="page">
    <Router>
    <Header highlight={highlight} />
      <div className="body">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about-me" element={<About setHighlight={setHighlight}/>} />
          <Route path="/contact" element={<Contact setHighlight={setHighlight}/>} />
         <Route path="*" element={<ErrorPage setHighlight={setHighlight}/>} />
        </Routes>
      </div>
    <Footer className="footer" />
    </Router>
    </div>
  );
}
