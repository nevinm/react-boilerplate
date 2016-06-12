import styles from './myAwesomeComponent.css';
import React, { Component, PropTypes } from 'react';

const { string } = PropTypes;
export default class myAwesomeComponent extends Component {
  static propTypes = {
    className: string,
    text: string,
  };

  componentWillMount() {
    console.log(this.props);
  }

  isClicked() {
    alert('HODOOORRR!!!');
  }

  render() {
    const { text } = this.props;
    const classNames = {
      text: styles.text,
      container: styles.container,
    };

    return (
      <div className={classNames.container}>
        <span className={classNames.text} onClick={this.isClicked}>{text}</span>
      </div>
    );
  }
}
