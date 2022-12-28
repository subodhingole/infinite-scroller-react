import React from "react";

const Logout = ({ toggle }) => {
  return (
    <div onClick={toggle} className="logout">
      Logout
    </div>
  );
};

export default Logout;
