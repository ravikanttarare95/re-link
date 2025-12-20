import { Link } from "react-router";

function BrandLogo({ customStyle }: { customStyle?: string }) {
  return (
    <Link to="/" className={`max-w-6xl flex items-center gap-4 ${customStyle}`}>
      <img
        src="/re-link-logo.svg"
        alt="ReLink Logo"
        className="h-14 w-14 object-contain"
      />
      <span className="text-3xl font-bold tracking-tight text-gray-900">
        ReLink
      </span>
    </Link>
  );
}

export default BrandLogo;
