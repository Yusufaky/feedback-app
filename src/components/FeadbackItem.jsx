function FeadbackItem({ item }) {
  return (
    <div className="card">
      <div className="num-display">{item.rating}</div>
      <div className="card-body">{item.text}</div>
    </div>
  );
}

export default FeadbackItem;
