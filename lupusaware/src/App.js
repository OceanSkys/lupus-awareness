import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import HeaderFooter from './components/HeaderFooter';
import Contact from './components/Contact';
import Blog from './components/Blog';

function App() {
  return (
<Routes>
  <Route path='/' element={<HeaderFooter />} >
    <Route index element={<Home/>}/>
    <Route path='Contact' element={<Contact/>}/>
    <Route path='Blog' element={<Blog/>}/>
  </Route>
</Routes>
  );
}

export default App;
