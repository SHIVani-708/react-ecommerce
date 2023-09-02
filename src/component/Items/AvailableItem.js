import React from "react";
import "./AvailableItem.css";
import ItemList from "./FormItems/ItemList";

const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl:
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl:
      "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl:
      "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

export default function AvailableItem() {
  return (
    <div className="container">
      <div className="cards-container">
        {cartElements.map((item, index) => (
          <ItemList
            key={index}
            itemKey={index + 1}
            title={item.title}
            price={item.price}
            img={item.imageUrl}
            quantity={item.quantity}
          />
        ))}
      </div>
    </div>
  );
}
