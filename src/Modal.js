import Rewards from "./Rewards";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();

  return (
    <section
      className={`modal modal-rewards pad ${isModalOpen && "show-modal"}`}
      aria-label="select reward"
    >
      <div className="container">
        <button
          className="btn-close"
          onClick={closeModal}
          aria-label="close"
        ></button>
        <h3>Back this project</h3>
        <p>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
        <Rewards />
      </div>
    </section>
  );
};

export default Modal;
