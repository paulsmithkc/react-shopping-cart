import { useState } from 'react';

function CartItem({ name, quantity }) {

  const [ currentQuantity, setCurrentQuantity ] = useState(parseInt(quantity));
  const [ currentName, setCurrentName ] = useState(name);

  function onAdd(evt) {
    console.log('add');
    setCurrentQuantity(currentQuantity + 1);
  }

  function onRemove(evt) {
    console.log('remove');
    setCurrentQuantity(currentQuantity - 1);
  }

  function onNameChange(evt) {
    const newName = evt.currentTarget.value;
    setCurrentName(newName);
    console.log('name change', newName);
  }

  return (
    <div className="CartItem d-flex">
      <input value={currentName} className="CartItem-name form-control"
             onChange={(evt) => onNameChange(evt)} />
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