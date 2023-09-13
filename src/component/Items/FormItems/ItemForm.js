import { useRef, useState } from "react";
import './ItemForm.css';
import Input from "../../UI/Input";

const ItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const [enteredAmount, setEnteredAmount] = useState('1');  // Initialize with '1'
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false); 
      return;
    }

    console.log(enteredAmountNumber);
    props.onAddToCart(1);
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "0",
          max: "5",
          step: "1",
          defaultValue: enteredAmount, // Use the enteredAmount state here
        }}
        onChange={(event) => setEnteredAmount(event.target.value)} // Update enteredAmount on input change
        
      />
      <button
        onClick={() =>
          setEnteredAmount((prevAmount) => String(+prevAmount + 1))
        }
      >
        + Add
      </button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default ItemForm;
