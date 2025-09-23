/* boiler plate */
import React from "react";

function handleRegister(event) {
  event.preventDefault();
  let email = event.target.email.value;
  console.log("Email submitted:", email);
}

function Register() {
  let name = "Jacky";
  let age = 33;

  return (
    <div>
      <form>
        {age > 20 ? (
          <div>
            <input type="email" placeholder="Enter your email" />
            <button type="submit" onClick={handleRegister}>
              Submit
            </button>
          </div>
        ) : (
          <h2>Sorry {name}, you must be at least 20 years old to register.</h2>
        )}
      </form>
    </div>
  );
}

export default Register;
