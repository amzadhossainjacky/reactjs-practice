/* boiler plate */
import React, { useState, useEffect } from "react";

function UserCreate() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(12);

  function increaseAge(e) {
    e.preventDefault();
    setAge(age + 1);
  }

//   console.log(email);
//   console.log(password);

  //use effect
  useEffect(() => {
    console.log(age);
  }, [age]);

  return (
    <div>
      <form>
        <div>
            <h1>{age}</h1>
            <button type="submit" onClick={increaseAge}>
            Submit
        </button>
          <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          {/* <button type="submit" onClick={handleRegister}>
            Submit
        </button> */}
        </div>
      </form>
    </div>
  );
}

export default UserCreate;
