import React, { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
import "./AllProducts.css";

const AllProducts = ({ setCartCount, cutCartCount }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);
  return (
    <div>
      <div className="row container">
        {products.map((pd) => (
          <SingleProduct setCartCount={setCartCount} cutCartCount={cutCartCount} key={pd.id} product={pd}></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
