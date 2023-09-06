import React from 'react';
import { useLocation } from 'react-router-dom';

function ItemDetails() {
  const location = useLocation();
  console.log('Location state:', location.state);

  const { itemKey, title, price, img } = location.state || {};

  return (
    <div>
      <h1>{title}</h1>
      <p>Item Key: {itemKey}</p>
      <p>Price: {price}</p>
      <img src={img} alt={title} />
      {/* Render other details */}
    </div>
  );
}

export default ItemDetails;
