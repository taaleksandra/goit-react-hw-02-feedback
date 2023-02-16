import React, { Component } from 'react';
import clsx from 'clsx';
import css from '../Feedback/FeedbackOptions.module.css';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    const optionsState = Object.keys(options);

    return (
      <div className={clsx(css.buttons)}>
        {optionsState.map(option => (
          <button
            key={option}
            onClick={onLeaveFeedback}
            type="button"
            className={clsx(css.btn)}
          >
            {option}
          </button>
        ))}
      </div>
    );
  }
}
