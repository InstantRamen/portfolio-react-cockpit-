import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import ContactFormPage from './ContactFormPage';
import ProjectPage from './ProjectPage';
import StaticPage from './StaticPage';

export class PagesContainer extends Component {
  renderPages() {
    return this.props.data.map(page => {
      switch (page.Template.display) {
        case 'projects':
          return <span>projects</span>;
          break;
        case 'contact':
          return <span>contact</span>;
          break;
        default:
          return <span>static page</span>;
      }
    });
  }
  render() {
    return <div>{this.renderPages}</div>;
  }
}
