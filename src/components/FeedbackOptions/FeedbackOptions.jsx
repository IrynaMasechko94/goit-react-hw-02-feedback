import React, { Component } from 'react';
import css from './FeedbackOptoins.module.css';

export default class FeedbackOptions extends Component {
  static defaultProps = {
    addGood: this.addGood,
    addNeutral: this.addNeutral,
    addBad: this.addBad,
  };
  render() {
    const { addGood, addNeutral, addBad } = this.props;
    return (
      <div className={css.buttonContainer}>
        <button type="button" onClick={addGood} className={css.feedbackBtn}>
          Good
        </button>
        <button type="button" onClick={addNeutral} className={css.feedbackBtn}>
          Neutral
        </button>
        <button type="button" onClick={addBad} className={css.feedbackBtn}>
          Bad
        </button>
      </div>
    );
  }
}
