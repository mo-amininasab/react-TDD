import React, { Component } from 'react';

export default class CommentBox extends Component {
  state = { comment: '' };

  onChangeHandler = (e) => {
    this.setState({ comment: e.target.value });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();

    this.setState({ comment: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler.bind(this)}>
          <h4>Add a Comment</h4>
          <textarea
            value={this.state.comment}
            onChange={this.onChangeHandler}
          />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
      </div>
    );
  }
}
