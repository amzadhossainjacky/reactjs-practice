/* boiler plate */
import React from "react";

let data = [
  { id: 1, name: "Alice", age: 28 },
  { id: 2, name: "Bob", age: 34 },
  { id: 3, name: "Charlie", age: 22 },
];

function User() {
  return (
    <div>
      {data.map((user) => (
        <div key={user.id}>
          <h2>Name: {user.name}</h2>
          <p>Age: {user.age}</p>
        </div>
      ))}
    </div>
  );
}

export default User;
