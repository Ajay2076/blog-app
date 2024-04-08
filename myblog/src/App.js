import logo from './logo.svg';
import './App.css';
import Navebar from './Components/Navebar';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import Blog from './Components/Bloge';
import Bloge from './Components/Bloge';

function App() {
  return (
    <div className="App">
<Navebar/>
{/* <Home/> */}
<Routes>
  <Route path='/h' element={<Home/>}/>
  <Route path='/ho' element={<Bloge/>}/>
</Routes>
    </div>
  );
}

export default App;
