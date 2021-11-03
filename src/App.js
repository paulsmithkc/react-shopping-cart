import { useState } from 'react';
import CartItem from './CartItem';

function App() {
  const [item1, setItem1] = useState({ name: 'Hat', quantity: 2 });
  const [item2, setItem2] = useState({ name: 'Tie', quantity: 2 });
  const [item3, setItem3] = useState({ name: 'Belt', quantity: 1 });

  function onNameChange(evt, item, setItem) {
    const newName = evt.currentTarget.value;
    setItem({ ...item, name: newName });
    console.log('onNameChange', newName);
  }

  function onQuantityAdd(evt, item, setItem) {
    const newQuantity = item.quantity + 1;
    setItem({ ...item, quantity: newQuantity });
    console.log('onQuantityAdd', newQuantity);
  }

  function onQuantityRemove(evt, item, setItem) {
    const newQuantity = item.quantity - 1;
    setItem({ ...item, quantity: newQuantity });
    console.log('onQuantityRemove', newQuantity);
  }

  return (
    <div>
      <h1>Shopping Cart</h1>
      <CartItem
        item={item1}
        onNameChange={(evt) => onNameChange(evt, item1, setItem1)}
        onQuantityAdd={(evt) => onQuantityAdd(evt, item1, setItem1)}
        onQuantityRemove={(evt) => onQuantityRemove(evt, item1, setItem1)}
      />
      <CartItem
        item={item2}
        onNameChange={(evt) => onNameChange(evt, item2, setItem2)}
        onQuantityAdd={(evt) => onQuantityAdd(evt, item2, setItem2)}
        onQuantityRemove={(evt) => onQuantityRemove(evt, item2, setItem2)}
      />
      <CartItem
        item={item3}
        onNameChange={(evt) => onNameChange(evt, item3, setItem3)}
        onQuantityAdd={(evt) => onQuantityAdd(evt, item3, setItem3)}
        onQuantityRemove={(evt) => onQuantityRemove(evt, item3, setItem3)}
      />
    </div>
  );
}

export default App;
