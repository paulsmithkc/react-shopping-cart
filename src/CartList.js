import { useState } from 'react';
import { nanoid } from 'nanoid';
import _ from 'lodash';
import immer from 'immer';
import CartItem from './CartItem';

function CartList() {
  const [items, setItems] = useState([
    { id: nanoid(), name: 'Hat', quantity: 2 },
    { id: nanoid(), name: 'Tie', quantity: 2 },
    { id: nanoid(), name: 'Belt', quantity: 1 },
  ]);

  function addItem(item) {
    setItems(
      immer((draft) => {
        draft.push(item);
      })
    );
    //setItems((x) => [...x, item]);
  }

  function updateItem(itemId, update) {
    setItems(
      immer((draft) => {
        const itemIndex = draft.findIndex((y) => y.id === itemId);
        if (itemIndex >= 0) {
          draft[itemIndex] = { ...draft[itemIndex], ...update };
        }
      })
    );
    // setItems((x) =>
    //   _.map(x, (y) => (y.id === itemId ? { ...y, ...update } : y))
    // );
  }

  function removeItem(itemId) {
    setItems(
      immer((draft) => {
        const itemIndex = draft.findIndex((y) => y.id === itemId);
        if (itemIndex >= 0) {
          draft.splice(itemIndex, 1);
        }
      })
    );
    // setItems((x) => _.filter(x, (y) => y.id !== itemId));
  }

  function onNameChange(evt, item) {
    const newName = evt.currentTarget.value;
    updateItem(item.id, { name: newName });
    console.log('onNameChange', newName);
  }

  function onQuantityAdd(evt, item) {
    const newQuantity = item.quantity + 1;
    if (newQuantity <= 10) {
      updateItem(item.id, { quantity: newQuantity });
    }
    console.log('onQuantityAdd', newQuantity);
  }

  function onQuantityRemove(evt, item) {
    const newQuantity = item.quantity - 1;
    if (newQuantity > 0) {
      updateItem(item.id, { quantity: newQuantity });
    } else {
      removeItem(item.id);
    }
    console.log('onQuantityRemove', newQuantity);
  }

  function onAddItem(evt) {
    addItem({ id: nanoid(), name: '', quantity: 1 });
  }

  let itemCount = 0;
  for (const item of items) {
    itemCount += item.quantity;
  }

  return (
    <div className="CartList">
      <h1 className="CartList-header my-3 d-flex align-items-start">
        <span>Shopping Cart</span>
        {itemCount > 0 && (
          <span className="badge bg-primary rounded-pill fs-6 ms-2">
            {itemCount}
          </span>
        )}
      </h1>
      <div className="my-3">
        <button
          type="button"
          className="ChartList-add btn btn-primary m-1"
          onClick={(evt) => onAddItem(evt)}
        >
          Add Item
        </button>
      </div>
      <div className="CartList-items">
        {_.isEmpty(items) ? (
          <div className="CartList-empty fs-italic fs-3">
            Your cart is empty! Add some items to it.
          </div>
        ) : (
          _.map(items, (item) => (
            <CartItem
              key={item.id}
              item={item}
              onNameChange={(evt) => onNameChange(evt, item)}
              onQuantityAdd={(evt) => onQuantityAdd(evt, item)}
              onQuantityRemove={(evt) => onQuantityRemove(evt, item)}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default CartList;
