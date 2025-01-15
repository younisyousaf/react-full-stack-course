import React from "react";

const ShoppingList = () => {
  const [items, setItems] = React.useState([]);
  const [name, setName] = React.useState("");
  const [quantity, setQuantity] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !quantity) return;

    const newItem = {
      name,
      quantity: parseInt(quantity),
    };
    setItems((prevItems) => [...prevItems, newItem]);
    setName("");
    setQuantity("");
  };
  return (
    <>
      <div className="w-50 mx-auto">
        <h1 className="text-center">Shopping List</h1>
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-auto">
            <label htmlFor="itemName" className="visually-hidden">
              Item Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="itemName"
              placeholder="Item Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-auto">
            <label htmlFor="itemQuantity" className="visually-hidden">
              Quantity
            </label>
            <input
              type="text"
              className="form-control"
              name="quantity"
              id="itemQuantity"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary">
              Add Item
            </button>
          </div>
        </form>

        <ul className="list-group mt-3">
          {items.map((item, index) => (
            <li key={index} className="list-group-item">
              Name: {item.name} - Quantity: {item.quantity}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ShoppingList;
