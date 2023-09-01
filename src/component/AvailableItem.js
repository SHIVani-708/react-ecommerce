import React from "react";
import ItemList from "./ItemList";

const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

export default function AvailableItem() {
  let keyCounter = 1; // Initialize a counter

  return (
    <div>
      {cartElements.map((item) => (
        <ItemList
          key={keyCounter} // Use the current counter value as the key
          itemKey={keyCounter++}
          title={item.title}
          price={item.price}
          img={item.imageUrl}
          quantity={item.quantity}
        />
      ))}
    </div>
  );
}
