// import React from "react";

function Navbar() {
  return (
    <nav className="sticky top-0 left-0 right-0  px-6 py-2 bg-white shadow">
      <div className="flex items-center gap-3">
        <img
          src="/re-link-logo.svg"
          alt="ReLink Logo"
          className="h-10 w-10 object-contain"
        />
        <span className="text-xl font-semibold text-gray-800">ReLink</span>
      </div>
    </nav>
  );
}

export default Navbar;
