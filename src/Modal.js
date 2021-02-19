import Rewards from "./Rewards";

const Modal = () => {
  return (
    <section className="modal pad" aria-label="select reward">
      <div className="container">
        <button className="btn-close"></button>
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
