import React from "react";
import { Card, Tooltip } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cartContext";

const { Meta } = Card;

const ProductCard = ({ product }) => {
  const { cart, setCart } = useCartContext();

  const handleCart = (title) => {
    console.log("Cart", cart);
    if (cart && cart.find((el) => el.title === title)) {
      return;
    }
    setCart([...cart, product]);
  };

  const { title, price, description } = product;
  return (
    <Card
      hoverable
      actions={[
        <Link to={`/product/${title}`}>
          <EyeOutlined className="text-warning" /> <br /> View Product
        </Link>,
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a onClick={() => handleCart(title)}>
          <Tooltip>
            <ShoppingCartOutlined className="text-danger" /> <br />
            {cart.find((el) => el.title === title) ? "Added" : "Add to Cart"}
          </Tooltip>
        </a>,
      ]}
      cover={<img alt="example" src={product.image} />}
    >
      <Meta title={`${title} - ${price}`} description={`${description}`} />
    </Card>
  );
};

export default ProductCard;
