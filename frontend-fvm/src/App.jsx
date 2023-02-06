import { useState } from 'react'
import Home from './pages/Home'
import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Team from './pages/Team';
import Create from './pages/Create';
import Marketplace from './pages/Marketplace';


function App() {


  return (
    <div class="App">
      <Router>
      <Navbar />
        <Routes>
      <Route exact path="/" element = {<Home />} />
      <Route exact path="/team" element = {<Team />} />
      <Route exact path="/marketplace" element = {<Marketplace />} />
      <Route exact path="/create" element = {<Create />} />
      </Routes>
     </Router>
    </div>
  )
}

export default App
