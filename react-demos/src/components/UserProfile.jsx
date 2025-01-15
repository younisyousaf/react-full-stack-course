import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import UpdateUser from "./UpdateUser";

const UserProfile = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <UpdateUser />
    </>
  );
};

export default UserProfile;
