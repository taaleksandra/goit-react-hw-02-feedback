import React, { Component } from 'react';
import clsx from 'clsx';
import css from '../Title/Title.module.css';

export class Title extends Component {
  render() {
    const { msg } = this.props;

    return <h2 className={clsx(css.title)}>{msg}</h2>;
  }
}
