import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import withContext from './../hoc/withContext'
import Header from './../components/organisms/Header/Header'
import {
  CommentListItemStyled,
  CommentListStyled
} from './../components/atoms/CommentList/CommentList'
import PostDetailsItem from './../components/molecules/PostDetailsItem/PostDetailsItem'
import PostBar from './../components/molecules/PostBar/PostBar'
import CommentItem from './../components/molecules/CommentItem/CommentItem'
import {
  getUserPosts,
  getInitalUsers,
  getPostComments
} from './../duck/operations'

class PostDetails extends Component {
  state = {
    commentsVisible: false
  }

  componentDidMount() {
    this.props.getInitalUsers()
    this.props.getUserPosts()
    this.props.getPostComments()
  }
  toggleCommentHandler = () => {
    this.setState({
      commentsVisible: !this.state.commentsVisible
    })
  }

  addCommentHandler = () => {
    console.log('add')
  }

  goBack = () => {
    this.props.history.goBack()
  }

  render() {
    const [item] = this.props.selectedPost
    const [author] = this.props.activeItem

    return (
      <>
        {author && item && (
          <Header
            back={this.goBack}
            title={`${author.name} post #${item.id}`}
          />
        )}
        {item && <PostDetailsItem title={item.title} content={item.body} />}
        <PostBar
          toggleComment={this.toggleCommentHandler}
          addComment={this.addCommentHandler}
          showTypo="+ show comments"
          hideTypo="- hide comments"
          togglerText={
            !this.state.commentVisible ? 'Show comments' : 'Hide comments'
          }
        />
        {this.state.commentsVisible ? (
          <div>
            <CommentListStyled>
              {this.props.activeComments.map(el => (
                <CommentListItemStyled>
                  <CommentItem name={el.name} email={el.email} body={el.body} />
                </CommentListItemStyled>
              ))}
            </CommentListStyled>
          </div>
        ) : (
          ''
        )}
      </>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    userList: state.users,
    activeItem: state.users.filter(
      item => item.id === parseInt(ownProps.match.params.id)
    ),
    selectedPost: state.posts.filter(
      item => item.id === parseInt(ownProps.match.params.postId)
    ),
    activeComments: state.comments.filter(
      item => item.postId === parseInt(ownProps.match.params.postId)
    )
  }
}

export default withContext(
  connect(mapStateToProps, { getUserPosts, getInitalUsers, getPostComments })(
    withRouter(PostDetails)
  )
)
