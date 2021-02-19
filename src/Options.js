import { options } from "./data";

const Options = () => {
  return (
    <div className="options-container">
      {options.map((option) => {
        const { id, title, price, text, remaining } = option;
        return (
          <article className="option" aria-label="pledge option" key={id}>
            <header className="option-header">
              <h5>{title}</h5>
              <span className="price">{`Pledge $${price} or more`}</span>
            </header>
            <p>{text}</p>
            <footer className="option-footer">
              <span className="remaining">
                {remaining} <span className="left">left</span>
              </span>
              <button className="btn btn-medium">Select Reward</button>
            </footer>
          </article>
        );
      })}
    </div>
  );
};

export default Options;
