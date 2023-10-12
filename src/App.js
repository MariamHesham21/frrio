import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs'; 
import CatePage from "./pages/CatePage"
import ProjectList from './pages/ProjectList';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact-us" element={<ContactUs/>}/>
      <Route path="/Category" element={<CatePage/>}/>
      <Route path="/projects-list" element={<ProjectList/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
