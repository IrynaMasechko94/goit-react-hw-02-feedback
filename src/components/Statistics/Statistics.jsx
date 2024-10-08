import React, { Component } from 'react';
import css from './Statistics.module.css';
export default class Statistics extends Component {
  static defaultProps = {
    good: this.good,
    neutral: this.neutral,
    bad: this.bad,
    totalResult: this.totalResult,
    countPositiveFeedbackPercentage: this.countPositiveFeedbackPercentage,
  };
  render() {
    const { good, neutral, bad, totalResult, countPositiveFeedbackPercentage } =
      this.props;
    return (
      <div className={css.feedbackList}>
        <h1 className={css.Statistics}>Statistics</h1>
        {totalResult > 0 ? (
          <ul className={css.feedbackList}>
            <li className={css.feedbackListItem}>Good: {good}</li>
            <li className={css.feedbackListItem}>Neutral: {neutral}</li>
            <li className={css.feedbackListItem}>Bad: {bad}</li>
            <li className={css.feedbackListItem}>Total: {totalResult}</li>
            <li className={css.feedbackListItem}>
              Positive feedback: {countPositiveFeedbackPercentage} %
            </li>
          </ul>
        ) : (
          // <>
          //   <h3 className={css.feedbackListItem}>Good: {good}</h3>
          //   <h3 className={css.feedbackListItem}>Neutral: {neutral}</h3>
          //   <h3 className={css.feedbackListItem}>Bad: {bad}</h3>
          //   <h3 className={css.feedbackListItem}>Total: {totalResult}</h3>
          //   <h3>Positive feedback: {countPositiveFeedbackPercentage}%</h3>
          // </>
          <h2 className={css.feedbackInfo}>There is no feedback</h2>
        )}
      </div>
    );
  }
}
