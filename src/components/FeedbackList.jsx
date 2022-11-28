import FeadbackItem from "./FeadbackItem";
function FeedbackList({ feedback }) {
  if (!feedback && feedback.length === 0) {
    return <p>No feedback yet</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeadbackItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default FeedbackList;
