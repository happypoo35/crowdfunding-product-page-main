import { useGlobalContext } from "./context";
import Header from "./Header";
import Main from "./Main";
import Modal from "./Modal";
import ModalMenu from "./ModalMenu";
import ModalSuccess from "./ModalSuccess";

const App = () => {
  const { isMenuOpen, isSuccessOpen } = useGlobalContext();

  return (
    <div className={`wrapper ${isMenuOpen && "active"}`}>
      <Header />
      <Main />
      <Modal />
      <ModalSuccess />
      <ModalMenu />
    </div>
  );
};

export default App;
