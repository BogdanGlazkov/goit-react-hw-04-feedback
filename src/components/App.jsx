import { useState } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './Feedback-options/Feedback-options';
import Notification from './Notification/Notification';

const options = {
  bad: 0,
  neutral: 0,
  good: 0,
};

export const App = () => {
  const [feedback, setFeedback] = useState(options);

  const feedbackIncrement = (option) => {
    setFeedback(prevState => {
      return {
        ...feedback,
        [option]: prevState[option] + 1,
      }
    } )
  }

  const countTotalFeedback = () => {
    return Object.values(feedback).reduce((acc, option) => (acc += option), 0);
  };

  const countPositiveFeedbackPercentage = (good, total) => {
    return (good * 100) / total;
  }

    return (
      <div className="app">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(feedback)}
            onLeaveFeedback={feedbackIncrement}
          />
        </Section>

        {!countTotalFeedback() ? (
          <Section>
            <Notification message="There is no feedback" />
          </Section>
        ) : (
          <Section title="Statistics">
            <Statistics
              good={feedback.good}
              bad={feedback.bad}
              neutral={feedback.neutral}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage(feedback.good, countTotalFeedback())}
            />
          </Section>
        )}
      </div>
    );
}
