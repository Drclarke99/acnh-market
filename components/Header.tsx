function Header() {
  return (
    <header className="flex items-center justify-between">
      <div>
        <img
          src="/logo.png"
          alt="Nook's Cay Logo"
          className="cursor-pointer object-contain"
        />
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>Browse</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
