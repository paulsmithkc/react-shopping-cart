import { useState } from 'react';
import { nanoid } from 'nanoid';
import _ from 'lodash';
import CartItem from './CartItem';

function CartList() {
  const [items, setItems] = useState([
    { id: nanoid(), name: 'Hat', quantity: 2 },
    { id: nanoid(), name: 'Tie', quantity: 2 },
    { id: nanoid(), name: 'Belt', quantity: 1 },
  ]);

  function onNameChange(evt, item) {
    const newName = evt.currentTarget.value;
    setItems(_.map(items, (x) => (x.id === item.id ? { ...x, name: newName } : x)));
    // const newItems = [];
    // for (let i = 0; i < items.length; ++i) {
    //   newItems[i] = items[i];
    //   if (newItems[i].id === item.id) {
    //     newItems[i].name = newName;
    //   }
    // }
    // setItems(newItems);
    console.log('onNameChange', newName);
  }

  function onQuantityAdd(evt, item) {
    const newQuantity = item.quantity + 1;
    if (newQuantity <= 10) {
      setItems(_.map(items, (x) => (x.id === item.id ? { ...x, quantity: newQuantity } : x)));
      console.log('onQuantityAdd', newQuantity);
    }
  }

  function onQuantityRemove(evt, item) {
    const newQuantity = item.quantity - 1;
    if (newQuantity > 0) {
      setItems(_.map(items, (x) => (x.id === item.id ? { ...x, quantity: newQuantity } : x)));
    } else {
      setItems(_.filter(items, (x) => x.id !== item.id));
      // const newItems = [];
      // for (let i = 0; i < items.length; ++i) {
      //   if (items[i].id !== item.id) {
      //     newItems.push(items[i]);
      //   }
      // }
      // setItems(newItems);
    }
    console.log('onQuantityRemove', newQuantity);
  }

  function onAddItem(evt) {
    // const newItems = [];
    // for (let i = 0; i < items.length; ++i) {
    //   newItems[i] = items[i];
    // }
    // newItems[items.length] = { id: items.length + 1, name: "", quantity: 1 };
    // setItems(newItems);

    setItems([...items, { id: nanoid(), name: '', quantity: 1 }]);
  }

  let itemCount = 0;
  for (const item of items) {
    if (item && item.quantity) {
      itemCount += item.quantity;
    }
  }

  return (
    <div className="CartList">
      <h1 className="CartList-header d-flex align-items-start my-3">
        <span>Shopping Cart</span>
        {itemCount > 0 && <span className="badge bg-primary rounded-pill fs-6 ms-2">{itemCount}</span>}
      </h1>
      <div className="my-3">
        <button type="button" className="CartList-add btn btn-primary m-1" onClick={(evt) => onAddItem(evt)}>
          Add Item
        </button>
      </div>
      <div className="my-3">
        {itemCount <= 0 && (
          <div className="CartList-empty fst-italic fs-3">Your cart is empty! Add some items to it.</div>
        )}
        {_.map(items, (item) => (
          <CartItem
            key={item.id}
            item={item}
            onNameChange={(evt) => onNameChange(evt, item)}
            onQuantityAdd={(evt) => onQuantityAdd(evt, item)}
            onQuantityRemove={(evt) => onQuantityRemove(evt, item)}
          />
        ))}
      </div>
    </div>
  );
}

export default CartList;
