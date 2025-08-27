import './App.css';
import { Route, Routes } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Basket from './pages/Basket';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/basket' element={<Basket />}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;