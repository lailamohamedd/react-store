import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import formatCurrency from "./formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

const StoreProduct = ({ id, name, price, imgUrl }) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeItemFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <Card className="h-100">
      <Card.Img
        src={imgUrl}
        variant="top"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="text-muted me-2">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
              Add tO Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: "0.5rem" }}
            >
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ gap: "0.5rem" }}
              >
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <span className="fs-3">{quantity} in cart</span>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button
                variant="danger"
                onClick={() => removeItemFromCart(id)}
                size="sm"
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreProduct;
