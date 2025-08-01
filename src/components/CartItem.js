import React from "react";
import { Button, Stack } from "react-bootstrap";
import StoreItems from "../data/storeItems";
import formatCurrency from "./formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

const CartItem = ({ id, quantity }) => {
    const { removeItemFromCart } = useShoppingCart();
    const item = StoreItems.find((item) => item.id === id);
    if (item == null) return null;

  return (
    <Stack
      direction="horizontal"
      gap={2}
      className="d-flex align-items-center"
    >
        <img
        src={item.imgUrl}
        alt={item.name}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
        />
        <div className="me-auto">
            <div>
                {item.name}{" "}
                {quantity > 1 && (
                    <span className="text-muted" style={{ fontSize: ".95rem" }}>
                        x{quantity}
                    </span>
                )}
            </div>
            <div>
                {formatCurrency(item.price)}
            </div>
        </div>
        <div>{formatCurrency(item.price * quantity)}</div>
        
        <Button variant="outline-danger" size="sm" onClick={() => removeItemFromCart(item.id)}>&times;</Button>
    </Stack>
  );
};

export default CartItem;
