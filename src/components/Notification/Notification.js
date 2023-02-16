import React, { Component } from 'react';
import clsx from 'clsx';

import css from '../Notification/Notification.module.css';

export class Notification extends Component {
  render() {
    const { msg } = this.props;

    return <span className={clsx(css.notification)}>{msg}</span>;
  }
}
