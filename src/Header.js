import { useGlobalContext } from "./context";

const Header = () => {
  const { isMenuOpen, setIsMenuOpen } = useGlobalContext();

  return (
    <header className="header pad">
      <div className="container">
        <a href="/" className="logo" aria-label="crowdfund logo">
          <img src="./images/logo.svg" alt="crowdfund logo" />
        </a>
        <nav>
          <a href="/">About</a>
          <a href="/">Discover</a>
          <a href="/">Get Started</a>
        </nav>
        <div
          className={`hamburger ${isMenuOpen && "active"}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="hamburger-icon"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
