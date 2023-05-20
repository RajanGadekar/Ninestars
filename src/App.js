import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './Header';
//import Footer from './Footer';
import Home from './Home';
import About from './About';
import Contact from './Contact';
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>} /> */}
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
