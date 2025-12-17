// import React from "react";

function BrandLogo({ customStyle }: { customStyle?: string }) {
  return (
    <div className={`max-w-6xl mx-auto flex items-center gap-4 ${customStyle}`}>
      <img
        src="/re-link-logo.svg"
        alt="ReLink Logo"
        className="h-14 w-14 object-contain"
      />
      <span className="text-3xl font-bold tracking-tight text-gray-900">
        ReLink
      </span>
    </div>
  );
}

export default BrandLogo;
