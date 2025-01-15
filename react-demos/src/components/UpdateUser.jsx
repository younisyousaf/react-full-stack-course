import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

import React from "react";

const UpdateUser = () => {
  const { updateUser } = useContext(UserContext);
  const [newName, setNewName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName.trim() === "") return;
    updateUser(newName);
    setNewName("");
  };
  return (
    <>
      <h2 className="text-center">Update User Name</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="newName">New Name</label>
          <input
            type="text"
            className="form-control"
            id="newName"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </>
  );
};

export default UpdateUser;
