import React, { Component } from 'react';

export default class StaticPage extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <span>StaticPage</span>
      </div>
    );
  }
}
