import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div>Select a book for details.</div>;
    }
    const { title, pages, author } = this.props.book;
    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {title}</div>
        <div>Pages: {pages}</div>
        <div>Author: {author}</div>
      </div>
    )
  };
}

function mapStateToProps(state) {
  return {
    book: state.activeBook,
  }
}

export default connect(mapStateToProps)(BookDetail);
