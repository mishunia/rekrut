import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { routes } from './../routes/routes'
import Header from './../components/organisms/Header/Header'
import {
  CommentListItemStyled,
  CommentListStyled
} from './../components/atoms/CommentList/CommentList'
import PostDetailsItem from './../components/molecules/PostDetailsItem/PostDetailsItem'
import {
  getUserPosts,
  getInitalUsers,
  getPostComments
} from './../duck/operations'
import PostBar from './../components/organisms/PostBar/PostBar'
import CommentItem from './../components/organisms/CommentItem/CommentItem'
import ModalAddComment from './../components/organisms/Modal/components/ModalAddComment'
import { SpecialModalBackground } from './../components/organisms/Modal/styles/index'
import { ModalProvider } from 'styled-react-modal'

class PostDetails extends Component {
  state = {
    commentsVisible: false,
    showModal: false,
    redirect: false
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

  toggleModalHandler = () => {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  goBack = () => {
    console.log(this.props.history)
    this.setState({ redirect: true })
  }

  render() {
    const [item] = this.props.selectedPost
    const [author] = this.props.activeItem
    const { redirect } = this.state

    console.log(item)

    if (redirect) {
      return <Redirect to={`${routes.user}/${item.userId}`} />
    }

    return (
      <>
        {item && author && (
          <>
            <ModalProvider backgroundComponent={SpecialModalBackground}>
              <ModalAddComment
                isOpen={this.state.showModal}
                onBackgroundClick={this.toggleModalHandler}
                onEscapeKeydown={this.toggleModalHandler}
                toggleModal={this.toggleModalHandler}
                postId={item.id}
              />
            </ModalProvider>

            <Header
              back={this.goBack}
              title={`${author.name} post #${item.id}`}
            />

            <PostDetailsItem title={item.title} content={item.body} />
          </>
        )}
        <PostBar
          toggleComment={this.toggleCommentHandler}
          addComment={this.toggleModalHandler}
          actionTypo="add comment"
          togglerText={
            !this.state.commentsVisible ? 'Show comments +' : 'Hide comments -'
          }
        />
        {this.state.commentsVisible ? (
          <div>
            <CommentListStyled>
              {this.props.activeComments.map(el => (
                <CommentListItemStyled key={el.id}>
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

export default connect(mapStateToProps, {
  getUserPosts,
  getInitalUsers,
  getPostComments
})(withRouter(PostDetails))
