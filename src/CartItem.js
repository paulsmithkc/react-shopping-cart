import { useState } from 'react';

function CartItem({ name, quantity }) {
  const [currentQuantity, setCurrentQuantity] = useState(
    parseInt(quantity) || 0
  );
  const [currentName, setCurrentName] = useState(name || '');

  function onAdd(evt) {
    console.log('add', currentQuantity);
    setCurrentQuantity(currentQuantity + 1);
  }

  function onRemove(evt) {
    console.log('remove', currentQuantity);
    setCurrentQuantity(currentQuantity - 1);
  }

  function onNameChange(evt) {
    console.log('change', evt.currentTarget.value);
    setCurrentName(evt.currentTarget.value);
  }

  // Explain: value vs defaultValue
  return (
    <div className="CartItem d-flex">
      <input
        value={currentName}
        className="CartItem-name form-control"
        onChange={(evt) => onNameChange(evt)}
      />
      <span className="CartItem-quantity m-3">{currentQuantity}</span>
      <button
        type="button"
        className="CartItem-add btn btn-primary rounded-circle m-1"
        onClick={(evt) => onAdd(evt)}
      >
        <span>+</span>
        <span className="visually-hidden">Add</span>
      </button>
      <button
        type="button"
        className="CartItem-remove btn btn-danger rounded-circle m-1"
        onClick={(evt) => onRemove(evt)}
      >
        <span>-</span>
        <span className="visually-hidden">remove</span>
      </button>
    </div>
  );
}

export default CartItem;
