import React, { Component } from 'react';
import {connect} from 'react-redux';
import './styles/App.css';
import logo from './logo.svg';

import { fetchPosts, fetchComents } from './actions/index';

class App extends Component {
 

   componentDidMount(){
        this.props.onFetchPosts();
        this.props.onFetchComents();

    }

  render() {
    return (
      <h1> Hi world </h1>
    );
  }
}

export default connect(
    state =>({
        posts: state.posts,
        comments: state.comments
    }),
    dispatch =>({
        onFetchPosts: () =>{
            dispatch(fetchPosts());
        },
        onFetchComents: (row) =>{
            dispatch(fetchComents())
        }
    })
)(App);