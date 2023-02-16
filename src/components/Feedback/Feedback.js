import React, { Component } from 'react';
import clsx from 'clsx';

import css from '../Feedback/Feedback.module.css';

import { Section } from '../Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Notification } from 'components/Notification/Notification';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = evt => {
    const btnName = evt.currentTarget.textContent;
    this.setState(prev => {
      return { [btnName]: prev[btnName] + 1 };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.state.good + this.state.neutral + this.state.bad;
    const positiveFeedback = (this.state.good * 100) / totalFeedback;
    return totalFeedback === 0 ? totalFeedback : positiveFeedback;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className={clsx(css.feedback)}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification msg="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}
