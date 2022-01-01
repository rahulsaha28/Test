import React from "react";
import Products from "../../Data/Products";
import { Product } from "../Product/Product";

export const Clients = () => {
  return (
    <div className="mt-3 mb-3">
        <h3 className="text-center mb-4">Best Sellers</h3>
      <div className="row row-cols-1 row-cols-md-3 g-3">
        {Products.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
};
