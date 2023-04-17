
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Routes , Route}  from "react-router-dom"
import Home from './Pages/HomePage/Home'
import About from './Pages/AboutPage/About';
import Program from './Pages/ProgramPage/Program';
import Training from './Pages/TrainingPage/Training';
import Pricing from './Pages/PricingPage/Pricing';
function App() {
  return (
    <div className="App">
      <Navbar/>
<Routes>
  <Route  path="/"  element={<Home/>}/>
  <Route path='/AboutUs'  element={<About/>}/>
  <Route  path='/Program' element={<Program/>}/>
  <Route path='/Training' element={<Training/>}/>
  <Route path='/Pricing' element={<Pricing/>}/>
</Routes>
    </div>
  );
}

export default App;
