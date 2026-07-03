const Loader = ({ isVisible }) => (
  <div className={`loader-overlay${isVisible ? "" : " hidden"}`}>
    <div className="loader-logo">
      Aniket<span>.</span>
    </div>
    <div className="loader-bar">
      <div className="loader-bar-fill" />
    </div>
  </div>
);

export default Loader;
