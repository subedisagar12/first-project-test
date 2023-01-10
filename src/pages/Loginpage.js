import React, { useState } from "react";

function Loginpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={function (e) {
          setEmail(e.target.value);
        }}
      />
      <br /> <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={function (e) {
          setPassword(e.target.value);
        }}
      />
    </>
  );
}

export default Loginpage;
