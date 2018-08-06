import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Spinner from 'react-spinner';

import Header from './components/Header';
import Router from './components/Router';

import { Pages } from './lib/data/pages';

class App extends Component {
  state = {
    pageData: [],
    projectData: [],
    dataLoaded: false
  };
  constructor(props) {
    super(props);

    this.getPages = this.getPages.bind(this);
  }

  componentDidMount() {
    this.getPages();
  }

  async getPages() {
    const pageData = await Pages.getPages();

    this.setState({ pageData, dataLoaded: true });
  }
  render() {
    if (this.state.dataLoaded) {
      return (
        <div className="App">
          <Header data={this.state.pageData.entries} />
          <Link to="/about">About</Link>
          <div className="Body">
            <Router
              routes={[
                { path: '/about', component: () => <div>Look, I'm a div!</div> }
              ]}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div
          style={{
            position: 'absolute',
            textAlign: 'center',
            alignItems: 'center',
            alignContent: 'center',
            top: '50%',
            width: '100%',
            fontSize: 32
          }}
        />
      );
    }
  }
}
export default App;
