import React from "react";
import { Table } from "antd";
import { CloseOutlined } from "@ant-design/icons";

import { useCartContext } from "../context/cartContext";

const Cart = () => {
  const { cart, setCart } = useCartContext();

  const handleRemove = (title) => {
    const newCart = cart && cart.filter((product) => product.title !== title);
    setCart(newCart);
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Remove",
      key: "remove",
      render: (text, record) => (
        <CloseOutlined
          className="cursor"
          onClick={() => handleRemove(record.title)}
        />
      ),
    },
  ];

  return <Table columns={columns} dataSource={cart} />;
};

export default Cart;
