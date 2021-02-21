import { useGlobalContext } from "./context";

const Metric = () => {
  const { total, backers } = useGlobalContext();
  const progress = () => {
    let progressTotal = total / 1000;
    if (progressTotal >= 100) {
      return "100%";
    }
    return progressTotal + "%";
  };

  return (
    <section className="metric pad" aria-label="project metric">
      <div className="container">
        <div className="metric-stats">
          <div className="stat">
            <h2>{`$${total.toLocaleString()}`}</h2>
            <p>of $100,000 backed</p>
          </div>
          <div className="stat">
            <h2>{backers.toLocaleString()}</h2>
            <p>total backers</p>
          </div>
          <div className="stat">
            <h2>56</h2>
            <p>days left</p>
          </div>
        </div>
        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: progress() }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Metric;
