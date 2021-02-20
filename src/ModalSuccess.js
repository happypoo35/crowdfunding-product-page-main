import { useGlobalContext } from "./context";

const ModalSuccess = () => {
  const { isSuccessOpen, closeSuccess } = useGlobalContext();

  return (
    <section
      className={`modal modal-success pad ${isSuccessOpen && "show-success"}`}
      aria-label="success"
    >
      <div className="container">
        <img src="./images/icon-check.svg" alt="icon" />
        <h3>Thanks for your support!</h3>
        <p>
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
        <button className="btn btn-small" onClick={closeSuccess}>
          Got it!
        </button>
      </div>
    </section>
  );
};

export default ModalSuccess;
