import Home from './components/Home';
import Blogs from './components/Blogs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";
import  NavBar  from './components/NavBar';
import './App.css'

function App() {
  return (
    <div className="App">
    <Router>
        <NavBar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
                <Route path="/blogs" element={<Blogs />} />            
            </Routes>
      </Router>
    </div>
  )
}

export default App
