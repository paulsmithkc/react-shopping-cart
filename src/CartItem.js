import { useState } from 'react';

function CartItem({ name, quantity }) {

  const [ currentQuantity, setQuantity ] = useState(parseInt(quantity));

  function onAdd(evt) {
    console.log('add');
    setQuantity(currentQuantity + 1);
  }

  function onRemove(evt) {
    console.log('add');
    setQuantity(currentQuantity - 1);
  }

  return (
    <div className="CartItem d-flex">
      <input value={name} className="CartItem-name form-control" />
      <span className="CartItem-quantity m-3">{currentQuantity}</span>
      <button type="button" className="CartItem-add btn btn-primary rounded-circle m-1"
              onClick={(evt) => onAdd(evt)}>
        <span>+</span>
        <span className="visually-hidden">Add</span>
      </button>
      <button type="button" className="CartItem-remove btn btn-danger rounded-circle m-1"
              onClick={(evt) => onRemove(evt)}>
        <span>-</span>
        <span className="visually-hidden">remove</span>
      </button>
    </div>
  );
}

export default CartItem;