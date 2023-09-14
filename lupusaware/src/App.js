import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import HeaderFooter from './components/HeaderFooter';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Resources from './components/Resources';
import Lup from './components/LupusJourney';

function App() {
  return (
<Routes>
  <Route path='/' element={<HeaderFooter />} >
    <Route index element={<Home/>}/>
    <Route path='/Blog/*' element={<Blog/>}/>
    <Route path='/Blog/Lup' element={<Lup/>}/>
    <Route path='Resources' element={<Resources/>}/>
    <Route path='Contact' element={<Contact/>}/>
  </Route>
</Routes>
  );
}

export default App;
