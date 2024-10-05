import React, { Component } from 'react';

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
      <div>
        <h1>Statistics</h1>
        {totalResult > 0 ? (
          <>
            <h3>Good: {good}</h3>
            <h3>Neutral: {neutral}</h3>
            <h3>Bad: {bad}</h3>
            <h3>Total: {totalResult}</h3>
            <h3>
              countPositiveFeedbackPercentage: {countPositiveFeedbackPercentage}
              %
            </h3>
          </>
        ) : (
          <h2>There is no feedback</h2>
        )}
      </div>
    );
  }
}
