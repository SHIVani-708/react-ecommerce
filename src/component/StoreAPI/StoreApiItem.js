

function StoreApiItem(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.date}</td>
      <td>{props.title}</td>
      
      <td>{props.description}</td>
    </tr>
  );
}

export default StoreApiItem;
