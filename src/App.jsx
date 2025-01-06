import { useState, useEffect } from "react";
import Description from "./Components/Description/Description";
import Feedback from "./Components/Feedback/Feedback";
import Notification from "./Components/Notification/Notification";
import Options from "./Components/Options/Options";
import { use } from "react";

function App() {
    const [feedback, setFeedback] = useState(() => {
        const localFeedback = JSON.parse(localStorage.getItem("feedback"));
        return localFeedback || { good: 0, neutral: 0, bad: 0 };
    });

    useEffect(() => {
        localStorage.setItem("feedback", JSON.stringify(feedback));
    }, [feedback]);

    function updateFeedback(feedbackType) {
        setFeedback((feedback) => ({
            ...feedback,
            [feedbackType]: feedback[feedbackType] + 1,
        }));
    }

    function resetFeedback() {
        setFeedback({ good: 0, neutral: 0, bad: 0 });
    }

    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

    return (
        <>
            <Description />
            <Options
                updateFeedback={updateFeedback}
                resetFeedback={resetFeedback}
                totalFeedback={totalFeedback}
            />
            {totalFeedback === 0 ? (
                <Notification />
            ) : (
                <Feedback feedback={feedback} totalFeedback={totalFeedback} />
            )}
        </>
    );
}

export default App;