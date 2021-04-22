import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import client from "./client";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import CategoryProducts from "./pages/CategoryProducts";
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";

const App = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    loadCategories();
  }, []);
  const loadCategories = async () => {
    const res = await client.getEntries({
      content_type: "categories",
    });
    const categories = res.items.map((item) => item.fields.name);
    setCategories(categories);
  };
  return (
    <Router>
      <Navbar categories={categories} />
      <Switch>
        <Route path="/products/:category" exact component={CategoryProducts} />
        <Route path="/product/:title" exact component={SingleProduct} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
