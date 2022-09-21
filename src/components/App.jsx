import React, { Component } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './Feedback-options/Feedback-options';
import Notification from './Notification/Notification';

export default class App extends Component {
  state = {
    bad: 0,
    neutral: 0,
    good: 0,
  };


  countTotalFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countPositiveFeedbackPercentage = (good, total) => {
    return (good * 100) / total;
  }

  render() {
    const { good, bad, neutral } = this.state;
    const total = Object.values(this.state).reduce((acc, el) => (acc += el), 0);

    return (
      <div className="app">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.countTotalFeedback}
          />
        </Section>

        {total === 0 ? (
          <Section>
            <Notification message="There is no feedback" />
          </Section>
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              bad={bad}
              neutral={neutral}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage(good, total)}
            />
          </Section>
        )}
      </div>
    );
  }
}
