import React, { useState, useEffect } from "react";
import { Card, Tabs, Tooltip } from "antd";
import { useParams } from "react-router-dom";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useCartContext } from "../context/cartContext";
import client from "../client";
import ProductListItems from "../components/ProductListItems";

const { TabPane } = Tabs;

// this is childrend component of Product page
const SingleProduct = () => {
  const params = useParams();
  const [title, setTitle] = useState("");
  const [product, setProduct] = useState({});
  const { cart, setCart } = useCartContext();
  useEffect(() => {
    if (params && params.title) {
      setTitle(params.title);
    }
  }, [params]);

  useEffect(() => {
    loadProducts();
  }, [title]);

  const loadProducts = async () => {
    const res = await client.getEntries({
      content_type: "products",
      "fields.title": title,
    });
    const products = res.items.map((item) => {
      item.fields.image = item.fields.image.fields.file.url;
      return item.fields;
    });
    console.log("Products", products);
    setProduct(products[0]);
  };
  const [tooltip, setTooltip] = useState("Click to add");
  const { description, image } = product;

  const handleCart = (title) => {
    console.log("Cart", cart);
    if (cart && cart.find((el) => el.title === title)) {
      return;
    }
    setCart([...cart, product]);
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <Card cover={<img src={image} className="card-image" />}></Card>
        <Tabs type="card">
          <TabPane tab="Description" key="1">
            {description && description}
          </TabPane>
          <TabPane tab="More" key="2">
            Call use on xxxx xxx xxx to learn more about this product.
          </TabPane>
        </Tabs>
      </div>

      <div className="col-md-5">
        <h1 className="bg-info p-3">{title}</h1>

        <Card
          actions={[
            <a onClick={() => handleCart(title)}>
          <Tooltip>
            <ShoppingCartOutlined className="text-danger" /> <br />
            {cart.find((el) => el.title === title) ? "Added" : "Add to Cart"}
          </Tooltip>
        </a>,
            <a>
              <HeartOutlined className="text-info" /> <br /> Buy now
            </a>,
          ]}
        >
          <ProductListItems product={product} />
        </Card>
      </div>
    </div>
  );
};

export default SingleProduct;
