import React, { Component } from 'react';

export default class FeedbackOptions extends Component {
  static defaultProps = {
    addGood: this.addGood,
    addNeutral: this.addNeutral,
    addBad: this.addBad,
  };
  render() {
    const { addGood, addNeutral, addBad } = this.props;
    return (
      <div>
        <button type="button" onClick={addGood}>
          Good
        </button>
        <button type="button" onClick={addNeutral}>
          Neutral
        </button>
        <button type="button" onClick={addBad}>
          Bad
        </button>
      </div>
    );
  }
}
