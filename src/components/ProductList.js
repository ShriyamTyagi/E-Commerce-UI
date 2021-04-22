import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, listTitle }) => {
  return (
    <div className="p-4">
      <h3 className="text-center">{listTitle}</h3>
      <div className="row mt-2 mb-3 product-list">
        {products &&
          products.map((product) => (
            <div className="col-md-4 mb-3 single-product">
              <ProductCard product={product} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductList;
