// import { useState } from 'react';
import './CartItem.css';

function CartItem({ item, onNameChange, onQuantityAdd, onQuantityRemove }) {
  // const [ currentQuantity, setCurrentQuantity ] = useState(item.quantity);
  // const [ currentName, setCurrentName ] = useState(item.name);

  // function onAdd(evt) {
  //   console.log('add');
  //   setCurrentQuantity(currentQuantity + 1);
  // }

  // function onRemove(evt) {
  //   console.log('remove');
  //   setCurrentQuantity(currentQuantity - 1);
  // }

  // function onNameChange(evt) {
  //   const newName = evt.currentTarget.value;
  //   setCurrentName(newName);
  //   console.log('name change', newName);
  // }

  function getNameInputClasses() {
    let classes = 'CartItem-name form-control';
    classes += item.name ? ' is-valid' : ' is-invalid';
    return classes;
  }

  return (
    <div id={`item-${item.id}`} className="CartItem d-flex">
      <label htmlFor={`item-${item.id}-name`} className="visually-hidden">
        Name
      </label>
      <input
        id={`item-${item.id}-name`}
        value={item.name}
        //className={"CartItem-name form-control " + (item.name ? "is-valid" : "is-invalid")}
        //className={`CartItem-name form-control ${item.name ? 'is-valid' : 'is-invalid'}`}
        className={getNameInputClasses()}
        onChange={(evt) => onNameChange(evt)}
      />
      <label htmlFor={`item-${item.id}-quantity`} className="visually-hidden">
        Quantity
      </label>
      <span id={`item-${item.id}-quantity`} className="CartItem-quantity m-3">
        {item.quantity}
      </span>
      <button
        type="button"
        className="CartItem-add btn btn-primary rounded-circle m-1"
        onClick={(evt) => onQuantityAdd(evt)}
        disabled={item.quantity >= 10}
      >
        <span>+</span>
        <span className="visually-hidden">Add</span>
      </button>
      <button
        type="button"
        className="CartItem-remove btn btn-danger rounded-circle m-1"
        onClick={(evt) => onQuantityRemove(evt)}
        disabled={item.quantity <= 0}
      >
        <span>-</span>
        <span className="visually-hidden">remove</span>
      </button>
    </div>
  );
}

export default CartItem;
