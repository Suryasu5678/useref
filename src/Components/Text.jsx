import React, { useState } from "react";

const Text = ({ n, p }) => {
  const [user, setUser] = useState({ name: n });
  function change(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  return (
    <div style={{ color: "red" }}>
      <h2>{user.name}</h2>
      <form style={{ display: "flex", color: "red" }}>
        <input
          type="text"
          placeholder={p}
          onChange={change}
          value={user.name}
          name="name"
        />
      </form>
    </div>
  );
};

export default Text;
