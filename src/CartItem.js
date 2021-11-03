import './CartItem.css';

function CartItem({ item, onNameChange, onQuantityAdd, onQuantityRemove }) {
  const id = `item-${item.id}`;

  function getNameInputClasses() {
    let classes = 'CartItem-name form-control';
    classes += item.name ? ' is-valid' : ' is-invalid';
    return classes;
  }

  return (
    <div id={id} className="CartItem d-flex align-items-center p-1">
      <label htmlFor={id + '-name'} className="visually-hidden">
        Name
      </label>
      <input
        id={id + '-name'}
        placeholder="Enter name..."
        value={item.name}
        className={getNameInputClasses()}
        onChange={(evt) => onNameChange(evt, item)}
      />
      <label htmlFor={id + '-quantity'} className="visually-hidden">
        Quantity
      </label>
      <span id={id + '-quantity'} className="CartItem-quantity m-3">
        {item.quantity}
      </span>
      <button
        type="button"
        className="CartItem-add btn btn-primary rounded-pill m-1"
        onClick={(evt) => onQuantityAdd(evt, item)}
        disabled={item.quantity >= 10 && 'disabled'}
      >
        <span>+</span>
        <span className="visually-hidden">Add</span>
      </button>
      <button
        type="button"
        className="CartItem-remove btn btn-danger rounded-pill m-1"
        onClick={(evt) => onQuantityRemove(evt, item)}
      >
        <span>-</span>
        <span className="visually-hidden">remove</span>
      </button>
    </div>
  );
}

export default CartItem;
