import React from "react";

function Leftbar({ className }) {
  return (
    <div className={`${className} hidden lg:flex flex-col gap-8 h-full`}>
      <div>Profile</div>
      <div>All Users</div>
      <div>New Transaction</div>
      <div>Transaction History</div>
    </div>
  );
}

export default Leftbar;
