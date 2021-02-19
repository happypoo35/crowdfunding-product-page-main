import { useState } from "react";
import { useGlobalContext } from "./context";

const MainHeader = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const { openModal } = useGlobalContext();

  return (
    <section className="main-header pad" aria-label="project title">
      <div className="container">
        <img
          src="./images/logo-mastercraft.svg"
          alt="Mastercraft logo"
          className="project-logo"
        />
        <h1>Mastercraft Bamboo Monitor Riser</h1>
        <p>
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <footer>
          <button className="btn" onClick={openModal}>
            Back this project
          </button>
          <button
            className={`btn-bookmark ${isBookmarked && "active"}`}
            onClick={() => setIsBookmarked(!isBookmarked)}
          >
            <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <circle fill="#2F2F2F" cx="28" cy="28" r="28" />
                <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
              </g>
            </svg>
            {isBookmarked ? "Bookmarked" : "Bookmark"}
          </button>
        </footer>
      </div>
    </section>
  );
};

export default MainHeader;
