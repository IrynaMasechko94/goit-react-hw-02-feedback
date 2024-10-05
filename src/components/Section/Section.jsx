import React, { Component } from 'react';

export default class Section extends Component {
  static defaultProps = { title: this.title };
  render() {
    const { title, children } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        {children}
      </div>
    );
  }
}
