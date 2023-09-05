// src/App.js
import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import Products from './components/Products';
import Cart from './components/Cart.jsx';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        
         
            <Route path="/" exact element={<Products/>} />


            <Route path="/cart"  element={<Cart/>}/>
         
          
       
      </Routes>
    </Provider>
  );
}

export default App;
