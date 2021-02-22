import { useGlobalContext } from "./context";

const ModalMenu = () => {
  const { isMenuOpen } = useGlobalContext();

  return (
    <div className={`modal modal-menu pad ${isMenuOpen && "show-menu"}`}>
      <div className="container">
        <nav>
          <a href="/">About</a>
          <a href="/">Discover</a>
          <a href="/">Get Started</a>
        </nav>
      </div>
    </div>
  );
};

export default ModalMenu;
