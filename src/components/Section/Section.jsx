import React, { Component } from 'react';
import css from './Section.module.css';

export default class Section extends Component {
  static defaultProps = { title: this.title };
  render() {
    const { title, children } = this.props;
    return (
      <div>
        <h1 className={css.title}>{title}</h1>
        {children}
      </div>
    );
  }
}
