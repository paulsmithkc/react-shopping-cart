import { useState } from 'react';
import _ from 'lodash';
import CartItem from './CartItem';

function CartList() {
  const [items, setItems] = useState([
    { id: 1, name: 'Hat', quantity: 2 },
    { id: 2, name: 'Tie', quantity: 2 },
    { id: 3, name: 'Belt', quantity: 1 },
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
    if (newQuantity >= 0) {
      setItems(_.map(items, (x) => (x.id === item.id ? { ...x, quantity: newQuantity } : x)));
      console.log('onQuantityAdd', newQuantity);
    }
  }

  return (
    <div className="CartList">
      <h1>Shopping Cart</h1>
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
  );
}

export default CartList;
