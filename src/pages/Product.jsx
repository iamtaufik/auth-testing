import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Product = () => {
  const [products, setProducts] = useState([]);

  const getProduct = async () => {
    try {
      const result = await axios.get('https://jwt-auth-one.vercel.app/login');
      // setProducts(result.data);
      console.log(result.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      <h1>hello world</h1>
      {/* {products.map((product, index) => (
        <ul key={index}>
          <li>{product.name}</li>
          <li>{product.price}</li>
        </ul>
      ))} */}
    </>
  );
};

export default Product;
