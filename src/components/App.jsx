import React, { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  addNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  addBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalResult = good + neutral + bad;
    const countPositiveFeedbackPercentage = Math.floor(
      totalResult > 0 ? (good / totalResult) * 100 : 0
    );

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            addGood={this.addGood}
            addNeutral={this.addNeutral}
            addBad={this.addBad}
          />
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalResult={totalResult}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
          />
        </Section>
      </div>
    );
  }
}
