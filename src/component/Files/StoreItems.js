import React from 'react';


export default function StoreItems(props) {
  return (
        <tr>
          <td>{props.Date}</td>
          <td>{props.Id}</td>
          <td>{props.Title}</td>
        </tr>
  );
}
