import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Loading from './Loading';
import NotificationContainer from './NotificationContainer';
import StatPanel from './StatPanel';

// 母版页
class App extends Component {
  render(){
    const { isLoading } = this.props.ui;

    return (
      <div>
        {this.props.children}
        <Loading isLoading={isLoading} />
        <NotificationContainer />
        <br/>
        <StatPanel bookLength={this.props.books.count} authorLength={this.props.authors.rows.length} />
        <Link className="button" to="/" >Books</Link>
        <Link className="button" to="/authors/" >Authors</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

App = connect(mapStateToProps, actions)(App);

export default App;
