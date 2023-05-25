import React from 'react';
import ProductList from '../components/ProductList/Product10';
import Cart from '../components/Cart';

const Home = () => {
  return (
    <div className='productContainer'>
      <div className='product'></div>
      <Cart />
      {<ProductList />}
    </div>
  );
};

export default Home;
