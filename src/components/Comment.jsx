import React, {Component} from 'react';
import styled from 'styled-components';

const comment = styled.div`
display: flex;
`
class Comment extends Component {
  render() {
    const {comment} = this.props;
    console.log(comment);
    return (
      <div>
        <img src={comment.profile_pic}/>
        <p>
          <strong>{comment.username}</strong>
          {comment.text}</p>
      </div>
    );
  }
}

export default Comment;