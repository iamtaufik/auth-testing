import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Product = () => {
  const [products, setProducts] = useState([]);

  const getProduct = async () => {
    try {
      const result = await axios.get('http://localhost:5000/product');
      setProducts(result.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      {products.map((product, index) => (
        <ul key={index}>
          <li>{product.name}</li>
          <li>{product.price}</li>
        </ul>
      ))}
    </>
  );
};

export default Product;
