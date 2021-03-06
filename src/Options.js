import { useGlobalContext } from "./context";

const Options = () => {
  const { openModal, data } = useGlobalContext();

  return (
    <div className="options-container">
      {data.map((option) => {
        const { id, title, price, text, remaining } = option;
        if (id === 1) return;

        return (
          <article
            className={`option ${remaining === 0 && "disabled"}`}
            aria-label="pledge option"
            key={id}
          >
            <header className="option-header">
              <h5>{title}</h5>
              <span className="price">{`Pledge $${price} or more`}</span>
            </header>
            <p>{text}</p>
            <footer className="option-footer">
              <span className="remaining">
                {remaining} <span className="left">left</span>
              </span>
              <button
                className="btn btn-medium"
                disabled={remaining === 0}
                onClick={() => openModal(id)}
              >
                {remaining !== 0 ? "Select Reward" : "Out of stock"}
              </button>
            </footer>
          </article>
        );
      })}
    </div>
  );
};

export default Options;
