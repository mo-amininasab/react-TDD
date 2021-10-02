import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

class CommentBox extends Component {
  state = { comment: '' };

  componentDidMount() {
    this.shouldNavigateAway();
  }

  componentDidUpdate() {
    this.shouldNavigateAway();
  }

  shouldNavigateAway() {
    if (!this.props.auth) {
      this.props.history.push('/');
    }
  }

  onChangeHandler = (e) => {
    this.setState({ comment: e.target.value });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();

    this.props.saveComment(this.state.comment);

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

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(CommentBox);
