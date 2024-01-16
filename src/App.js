import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import ProductDetails from './component/shared/ProductDetails';
import Navbar from './component/shared/Navbar';
import ShopCart from './component/shared/ShopCart';

// components
import Store from './component/Store';
import Footer from './component/Footer';


// redux
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path='/products' element={<Store/>} />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='/shopCart' element={ <ShopCart /> } />
        <Route path='/*' element={ <Navigate  to='/products' /> } />
      </Routes>
      < Footer/>
    </Provider>
  );
}

export default App;
