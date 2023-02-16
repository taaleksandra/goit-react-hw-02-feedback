import React, { Component } from 'react';
import clsx from 'clsx';
import css from '../Section/Section.module.css';

export class Section extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <>
        <h2 className={clsx(css.title)}>{title}</h2>
        {children}
      </>
    );
  }
}
