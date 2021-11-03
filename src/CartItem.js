function CartItem({ item, onNameChange, onQuantityAdd, onQuantityRemove }) {
  return (
    <div className="CartItem d-flex">
      <input
        value={item.name}
        className="CartItem-name form-control"
        onChange={(evt) => onNameChange(evt, item)}
      />
      <span className="CartItem-quantity m-3">{item.quantity}</span>
      <button
        type="button"
        className="CartItem-add btn btn-primary rounded-circle m-1"
        onClick={(evt) => onQuantityAdd(evt, item)}
      >
        <span>+</span>
        <span className="visually-hidden">Add</span>
      </button>
      <button
        type="button"
        className="CartItem-remove btn btn-danger rounded-circle m-1"
        onClick={(evt) => onQuantityRemove(evt, item)}
      >
        <span>-</span>
        <span className="visually-hidden">remove</span>
      </button>
    </div>
  );
}

export default CartItem;
