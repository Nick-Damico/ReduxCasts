import React from 'react';
import { Component } from 'react';
import BookList from '../containers/book-lists';
import BookDetail from '../containers/book-detail';

export default class App extends Component {
  render() {
    return(
      <div>
        <h1>Book List</h1>
        <BookList />
        <BookDetail />
      </div>
    )
  }
}
