import React, { useState, createContext } from "react";

const UserContext = createContext();
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "John Doe" });
  const updateUser = (name) => setUser({ name });
  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
export { UserContext, UserProvider };
// export default UserProvider;
