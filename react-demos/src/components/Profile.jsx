import React, { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
  });
  return (
    <>
      <div className="d-flex justify-content-center">
        <div style={{ width: "50vw" }}>
          <h2 className="text-center">User Profile</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={profile.name}
                onChange={(e) =>
                  setProfile({ ...profile, name: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="age" className="form-label">
                Age
              </label>
              <input
                type="number"
                className="form-control"
                id="age"
                name="age"
                value={profile.age}
                onChange={(e) =>
                  setProfile({ ...profile, age: e.target.value })
                }
              />
            </div>
            <p className="text-center">
              Name: {profile.name}
              <br />
              Age: {profile.age}
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
