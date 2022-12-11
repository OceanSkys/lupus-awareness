import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import HeaderFooter from './components/HeaderFooter';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Resources from './components/Resources';

function App() {
  return (
<Routes>
  <Route path='/' element={<HeaderFooter />} >
    <Route index element={<Home/>}/>
    <Route path='Blog' element={<Blog/>}/>
    <Route path='Resources' element={<Resources/>}/>
    <Route path='Contact' element={<Contact/>}/>
  </Route>
</Routes>
  );
}

export default App;
