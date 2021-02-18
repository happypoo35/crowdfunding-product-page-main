const Header = () => {
  return (
    <header className="header pad">
      <div className="container">
        <a href="/" className="logo" aria-label="crowdfund logo">
          <img src="./images/logo.svg" alt="crowdfund logo" />
        </a>
        <nav>
          <a href="/about">About</a>
          <a href="/discover">Discover</a>
          <a href="/get-started">Get Started</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
