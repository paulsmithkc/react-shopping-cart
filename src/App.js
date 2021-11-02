import CartItem from './CartItem'

function App() {
  return (<div>
    <h1>Shopping Cart</h1>
    <CartItem name="Hat" quantity="2" />
    <CartItem name="Tie" quantity="2" />
    <CartItem name="Belt" quantity="1" />
  </div>);
}

export default App;
