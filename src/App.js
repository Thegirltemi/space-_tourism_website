
import './App.css';
import Header from './Components/Header';
import { Routes, Route,} from "react-router-dom";
import { Crew, Places, Technology } from './Components/Pages';
import Home from './Components/Home';

function App() {
  return (
    <div>
     <Header/>
     <Routes>
       <Route path='/'element={<Home/>}/>
       <Route path='/destination'element={<Places/>}/>
       <Route path='/crew'element={<Crew/>}/>
       <Route path='/technology'element={<Technology/>}/>
     </Routes>
    </div>
  );
}

export default App;
