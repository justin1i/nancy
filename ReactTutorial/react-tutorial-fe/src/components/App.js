import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import Loading from './Loading';

class App extends Component {
  render(){
    const { isLoading } = this.props.ui;
    return (
      <div>
        {this.props.children}
        <Loading isLoading={isLoading} />
        <br/>

        <Link className="button" to="/" >Books</Link>
        <Link className="button" to="/authors/" >Authors</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

App = connect(mapStateToProps, {})(App);

export default App;
