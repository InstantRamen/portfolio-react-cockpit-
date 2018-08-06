import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import ContactFormPage from './ContactFormPage';
import ProjectPage from './ProjectPage';
import StaticPage from './StaticPage';

import { slugEncode } from '../lib/helpers';

export class PagesContainer extends Component {
  renderPages() {
    return this.props.data.map(page => {
      switch (page.Template.display) {
        case 'projects':
          return (
            <Route
              path={slugEncode(page.Title)}
              component={() => <ProjectPage />}
            />
          );
        case 'contact':
          return (
            <Route
              path={slugEncode(page.Title)}
              component={() => <ContactFormPage />}
            />
          );
        default:
          return (
            <Route
              path={slugEncode(page.Title)}
              component={() => <StaticPage />}
            />
          );
      }
    });
  }
  render() {
    return <div>a{this.renderPages()}</div>;
  }
}

const style = {
  route: {
    width: '100%',
    height: '100%'
  }
};
