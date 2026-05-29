import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
export default function ProductDetails() {
  const products = useSelector((state) => state.product.items);
  const { id } = useParams();
  const product = products.find((product) => product.id === Number(id));
  return (
    <div>
      ProductDetails - {id}
      <h3> {product.name}</h3>
      <p>{product.desc}</p>
      <h4>{product.price}</h4>
    </div>
  );
}
