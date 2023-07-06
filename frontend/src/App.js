import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Home from "./components/index";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Blog from "./components/Blog";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Blog" element={<Blog />} />

        </Routes>
        <Footer /> 
      </BrowserRouter>
    </div>
  );
}

export default App;
