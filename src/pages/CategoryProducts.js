import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductList from "../components/ProductList";
import client from "../client";

const CategoryProducts = () => {
  const params = useParams();
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (params && params.category) {
      console.log("Params", params.category);
      setCategory(params.category);
    }
  }, [params]);

  useEffect(() => {
    loadProducts();
    console.log("category", category);
  }, [category]);

  const loadProducts = async () => {
    const res = await client.getEntries({
      content_type: "products",
      "fields.category": category,
    });
    const products = res.items.map((item) => {
      item.fields.image = item.fields.image.fields.file.url;
      return item.fields;
    });
    console.log("Products", products);
    setProducts(products);
  };

  return <ProductList listTitle={`Best in ${category}`} products={products} />;
};

export default CategoryProducts;
