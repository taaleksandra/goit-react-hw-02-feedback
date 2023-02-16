import React, { Component } from 'react';
import clsx from 'clsx';
import css from '../Statistics/Statistics.module.css';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <>
        <span className={clsx(css.statdesc)}>Good: {good}</span>
        <span className={clsx(css.statdesc)}>Neutral: {neutral}</span>
        <span className={clsx(css.statdesc)}>Bad: {bad}</span>
        <span className={clsx(css.statdesc)}>Total: {total}</span>
        <span className={clsx(css.statdesc)}>
          Positive feedback: {positivePercentage}%
        </span>
      </>
    );
  }
}
