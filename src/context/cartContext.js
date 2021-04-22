import React, { createContext, useState, useContext } from "react";

const CartStateContext = createContext(undefined);
const CartDispatchContext = createContext(undefined);

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <CartStateContext.Provider value={{ cart }}>
      <CartDispatchContext.Provider value={{ setCart }}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
};

export default CartContextProvider;

export const useCartContext = () => {
  const cartState = useContext(CartStateContext);
  const cartDispatch = useContext(CartDispatchContext);

  if (cartState === undefined || cartDispatch === undefined)
    throw new Error(
      "useModalContext must be used within the ModalContextProvider"
    );

  return { ...cartState, ...cartDispatch };
};
