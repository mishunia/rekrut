import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUserPosts, getInitalUsers } from './../duck/operations'
import { GridList, GridListItem } from './../components/Styles'
import Header from './../components/organisms/Header/Header'
import LoaderBox from '../components/molecules/Loader/LoaderBox'
import PostItem from './../components/organisms/PostItem/PostItem'
import ModalAddPost from './../components/organisms/Modal/components/ModalAddPost'
import { SpecialModalBackground } from './../components/organisms/Modal/styles/index'
import { ModalProvider } from 'styled-react-modal'

class UserDetails extends Component {
  state = {
    loading: true,
    showModal: false
  }

  componentDidMount() {
    const TIMEOUT_VAL = 500
    this.props.getInitalUsers()
    this.props.getUserPosts().then(() => {
      setTimeout(() => {
        this.setState({
          loading: false
        })
      }, TIMEOUT_VAL)
    })
  }

  toggleModalHandler = () => {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  goBack = () => {
    this.props.history.push('/')
  }

  render() {
    const { userPosts } = this.props
    const [item] = this.props.activeItem

    return (
      <>
        <ModalProvider backgroundComponent={SpecialModalBackground}>
          <ModalAddPost
            isOpen={this.state.showModal}
            onBackgroundClick={this.toggleModalHandler}
            onEscapeKeydown={this.toggleModalHandler}
            toggleModal={this.toggleModalHandler}
            userId={parseInt(this.props.match.params.id)}
          />
        </ModalProvider>
        {item && (
          <Header
            back={this.goBack}
            action={this.toggleModalHandler}
            title={`${item.name} posts`}
          />
        )}
        <GridList grid1>
          {userPosts.map(el => (
            <GridListItem key={el.id}>
              {this.state.loading ? (
                <LoaderBox boxed loaderColor="#000" />
              ) : (
                <PostItem
                  key={el.id}
                  id={el.id}
                  userId={el.userId}
                  content={el.title.slice(0, 50)}
                  removePost={this.removePostHandle}
                  urlParam={this.props.match.params.id}
                />
              )}
            </GridListItem>
          ))}
        </GridList>
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
    userPosts: state.posts.filter(
      item => item.userId === parseInt(ownProps.match.params.id)
    )
  }
}

export default connect(mapStateToProps, { getUserPosts, getInitalUsers })(
  withRouter(UserDetails)
)
