import PropTypes from "prop-types";

function Card({ children, resverse }) {
  //   return <div className={`card ${resverse && "resverse"}`}>{children}</div>;

  return (
    <div
      className="card"
      style={{
        backgroundColor: resverse ? "rgba(0,0,0,0.4)" : "#fff",
        color: resverse ? "#fff" : "#000",
      }}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
  resverse: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  resverse: PropTypes.bool,
};
export default Card;
