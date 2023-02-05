import React, { Component } from 'react';
import clsx from 'clsx';
import css from '../Feedback/Feedback.module.css';
// import css from '../Buttons/Buttons.module.css';

// import { Button } from '../Buttons/Buttons';
import { Title } from '../Title/Title';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodBtn = () => {
    this.setState(prev => {
      //   console.log(`Good btn was clicked ${prev.good + 1} times`);
      return { good: prev.good + 1 };
    });
  };
  handleNeutralBtn = () => {
    this.setState(prev => {
      //   console.log(`Neutral btn was clicked ${prev.neutral + 1} times`);
      return { neutral: prev.neutral + 1 };
    });
  };
  handleBadBtn = () => {
    this.setState(prev => {
      //   console.log(`Bad btn was clicked ${prev.bad + 1} times`);
      return { bad: prev.bad + 1 };
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
        <Title msg="Please leave feedback" />

        <div className={clsx(css.buttons)}>
          <button
            onClick={this.handleGoodBtn}
            type="button"
            className={clsx(css.btn)}
          >
            Good
          </button>
          <button
            onClick={this.handleNeutralBtn}
            type="button"
            className={clsx(css.btn)}
          >
            Neutral
          </button>
          <button
            onClick={this.handleBadBtn}
            type="button"
            className={clsx(css.btn)}
          >
            Bad
          </button>
        </div>

        <div>
          <Title msg="Statistics" />
          <span className={clsx(css.statdesc)}>Good: {good}</span>
          <span className={clsx(css.statdesc)}>Neutral: {neutral}</span>
          <span className={clsx(css.statdesc)}>Bad: {bad}</span>
          <span className={clsx(css.statdesc)}>
            Total: {this.countTotalFeedback()}
          </span>
          <span className={clsx(css.statdesc)}>
            Positive feedback: {this.countPositiveFeedbackPercentage()}%
          </span>
        </div>
      </div>
    );
  }
}
