import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import PlotLayoutPage from './Pages/PlotLayout';

function App() {
  return (
    <div >
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/layout' element={<PlotLayoutPage/>}/>
        
      </Routes>
    </Router>
    </div >
  );
}

export default App;
