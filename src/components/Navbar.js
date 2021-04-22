import React, { useState } from "react";
import { Menu, Badge } from "antd";
import {
  AppstoreOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cartContext";
const { SubMenu, Item } = Menu;

const Navbar = ({ categories }) => {
  const [current, setCurrent] = useState("home");
  const { cart, setCart } = useCartContext();
  const handleClick = (e) => {
    // console.log(e.key);
    setCurrent(e.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Item key="home" icon={<AppstoreOutlined />}>
        <Link to="/">Home</Link>
      </Item>

      <SubMenu icon={<SettingOutlined />} title="Categories">
        {categories &&
          categories.map((category) => (
            <Item key={category}>
              <Link to={`/products/${category}`}>{category}</Link>
            </Item>
          ))}
      </SubMenu>
      <Item key="cart" icon={<ShoppingCartOutlined/>}>
        <Link to="/cart">
          <Badge count={cart.length} offset={[9, 0]}>Cart</Badge>
        </Link>
      </Item>
    </Menu>
  );
};

export default Navbar;
