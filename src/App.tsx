import './App.css';
import { Route, Routes } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import Registration from './pages/Registration';
import AccountLogin from './pages/AccountLogin ';
import ProductList from './pages/ProductList';
import Basket from './pages/Basket';
import PaymentPage from './pages/PaymentPage';
import SpecificProductPage from './pages/SpecificProductPage';
import UserProfile from './pages/UserProfile';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/accountLogin' element={<AccountLogin />} />
          <Route path='/productList' element={<ProductList />} />
          <Route path='/basket' element={<Basket />} />
          <Route path='/paymentPage' element={<PaymentPage />} />
          <Route path='/specificProductPage' element={<SpecificProductPage />} />
          <Route path='/userProfile' element={<UserProfile />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;