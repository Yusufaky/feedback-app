import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
function FeedbackStats({}) {
  const { feedback } = useContext(FeedbackContext);
  let media =
    feedback.reduce((acc, item) => acc + item.rating, 0) / feedback.length;

  media = media.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Media do Rating : {isNaN(media) ? 0 : media}</h4>
    </div>
  );
}

export default FeedbackStats;
