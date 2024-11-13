"use client";
import Link from "next/link";

const PublicNavbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-black text-white">
      {/* Logo Section */}
      <div className="flex items-center">
        <Link href={`/`}>
          <img src="/logo.png" alt="Logo" className="h-10 w-30 mr-4" />
        </Link>
      </div>

      {/* Links Section */}
      <div className="flex justify-end">
        <Link className="mx-4 p-2 hover:text-gray-300" href={`/`}>
          Home
        </Link>
        <Link className="mx-4 p-2 hover:text-gray-300" href={`/solutions`}>
          Solutions
        </Link>
        <Link className="mx-4 p-2 hover:text-gray-300" href={`/about`}>
          About
        </Link>
        <Link className="mx-4 p-2 hover:text-gray-300" href={`/pricing`}>
          Pricing
        </Link>
        <Link className="mx-4 p-2 hover:text-gray-300" href={`/contact`}>
          Contact us
        </Link>
        <Link className="mx-4 p-2 hover:text-gray-300" href={`/login`}>
          Login
        </Link>
      </div>
    </nav>
  );
};
export default PublicNavbar;
