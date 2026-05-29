import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Home.css";
export default function Home() {
  const products = useSelector((state) => state.product.items);
  return (
    <div className="row">
      {products &&
        products.map((product) => (
          <div key={product.id}>
            <img src={product.imgUrl} width={300} />
            <h3>
              <Link to={`productdetails/${product.id}`}> {product.name}</Link>
            </h3>
            <p>{product.desc}</p>
            <h4>{product.price}</h4>
            <button>Add to Cart</button>
          </div>
        ))}
    </div>
  );
}
