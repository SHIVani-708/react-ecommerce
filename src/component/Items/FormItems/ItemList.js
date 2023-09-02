import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import "./ItemList.css";
import ItemForm from './ItemForm'
import CartContext from '../../Store/CartContext';

export default function ItemList(props) {
  const cartCtx=useContext(CartContext);
  const AddToCartHandler=(amount)=>{
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  }
  return (
      <Card style={{ width: "22rem" }}>
        <Card.Title> <h3>Album{props.itemKey}</h3></Card.Title>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title style={{ fontSize: "24px" }}>{props.title}</Card.Title>
          <ItemForm id={props.itemKey} onAddToCart={AddToCartHandler} />
        </Card.Body>
        <Card.Text> <b>Price:</b> {props.price}</Card.Text>
      </Card>
  );
}
