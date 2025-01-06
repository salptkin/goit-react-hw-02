export default function Feedback({ feedback, totalFeedback }) { 
    const positiveValue = Math.round((feedback.good / totalFeedback) * 100);

    return (
      <div>
        <p>Good: {feedback.good}</p>
        <p>Neutral: {feedback.neurtal}</p>
        <p>Bad: {feedback.bad}</p>
        <p>Total: {totalFeedback}</p>
        <p>Positive: {positiveValue}%</p>
      </div>
    );
}