import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import "./ItemList.css";
import ItemForm from "./ItemForm";
import CartContext from "../../Store/CartContext";
import { Link } from "react-router-dom";

export default function ItemList(props) {
  const cartCtx = useContext(CartContext);
  const AddToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <Card style={{ width: "22rem" }}>
      <Card.Title>
        {" "}
        <h3>Album{props.itemKey}</h3>
      </Card.Title>
      {/* <Link to={`/product/${props.itemKey}`}>
        <Card.Img variant="top" src={props.img} />
      </Link> */}
      <Link
        to={{
          pathname: `/product/${props.itemKey}`,
          state: {
            itemKey: props.itemKey,
            title: props.title,
            price: props.price,
            img: props.img,
            // Add other props you want to pass
          },
        }}
      >
        <Card.Img variant="top" src={props.img} />
      </Link>

      <Card.Body>
        <Card.Title style={{ fontSize: "24px" }}>{props.title}</Card.Title>
        <ItemForm id={props.itemKey} onAddToCart={AddToCartHandler} />
      </Card.Body>
      <Card.Text>
        {" "}
        <b>Price:</b> {props.price}
      </Card.Text>
    </Card>
  );
}
