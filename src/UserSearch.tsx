import React, { useState } from "react";

const User = [
  {
    name: "Nikhil",
    age: 24,
  },
  {
    name: "Adam",
    age: 23,
  },
  {
    name: "Sally",
    age: 26,
  },
  {
    name: "Rosie",
    age: 21,
  },
];

const UserSearch = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();
  const searchUser = () => {
    setName("");
    let result = User.find((item) => item.name === name);
    setUser(result);
  };
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={searchUser}>Search</button>
      <hr />
      {user?.name}
    </div>
  );
};

export default UserSearch;
