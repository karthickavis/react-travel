import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar";
import { Route, Routes} from "react-router-dom";
import Home from './routers/home';
import About from './routers/about';
import Service from './routers/service';
import Contact from './routers/contact';
import LogIn from './routers/loginform';


function App() {
  return (
    <div className="App">
     
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Service" element={<Service/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/sign up" element={<LogIn/>}/>
     </Routes>
     
      
    </div>
  );
}

export default App;
