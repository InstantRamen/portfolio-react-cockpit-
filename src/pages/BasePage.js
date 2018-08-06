import React, { Component } from 'react';

export default class BasePage extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <h1>BasePage</h1>
      </div>
    );
  }
}
