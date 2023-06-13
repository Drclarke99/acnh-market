import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="px-12 py-4">
        <img
          src="/logo.png"
          alt="Nook's Cay Logo"
          className="cursor-pointer object-contain w-64"
        />
      </div>

      <div className="px-10">
        <ul className="flex items-center space-x-4">
          <Link href="/">
            <li className="headerLink">Home</li>
          </Link>
          <Link href="/fish">
            <li className="headerLink">Browse</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
