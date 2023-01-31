import { useState } from 'react'
import Home from './pages/Home'
import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Team from './pages/Team';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';


function App() {


  return (
    <div class="App">
      <Router>
      <Navbar />
        <Routes>
      <Route exact path="/" element = {<Home />} />
      <Route exact path="/team" element = {<Team />} />
      <Route exact path="/projects" element = {<Projects />} />
      <Route exact path="/dashboard" element = {<Dashboard />} />
      </Routes>
     </Router>
    </div>
  )
}

export default App
