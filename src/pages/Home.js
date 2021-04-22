import React, { useEffect, useState } from "react";
import Featured from "../components/Featured";
import ProductList from "../components/ProductList";
import client from "../client";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const res = await client.getEntries({
      content_type: "products",
    });
    const products = res.items.map((item) => {
      item.fields.image = item.fields.image.fields.file.url;
      return item.fields;
    });
    setProducts(products);
  };

  return (
    <>
      <Featured />
      <div className="mt-3 mb-3">
        <ProductList products={products} listTitle="All Products" />
      </div>
    </>
  );
};

export default Home;
