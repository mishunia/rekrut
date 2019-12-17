import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import withContext from './../hoc/withContext'
import { getUserPosts, getInitalUsers } from './../duck/operations'
import { GridList, GridListItem } from './../components/Styles'
import Header from './../components/organisms/Header/Header'
import PostItem from './../components/molecules/PostItem/PostItem'
import LoaderBox from '../components/molecules/Loader/LoaderBox'
import FancyModalButton from './../components/organisms/Modal/Modal'
import { SpecialModalBackground } from './../components/organisms/Modal/styles/index'
import { ModalProvider } from 'styled-react-modal'
import FormAddPost from './../components/organisms/Forms/FormAddPost'

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
    this.props.history.goBack()
    console.log('chuaj')
  }

  render() {
    const { userPosts } = this.props
    const [item] = this.props.activeItem
    const [post] = this.props.userPosts

    return (
      <>
        <ModalProvider backgroundComponent={SpecialModalBackground}>
          <FancyModalButton
            isOpen={this.state.showModal}
            onBackgroundClick={this.toggleModalHandler}
            onEscapeKeydown={this.toggleModalHandler}
            toggleModal={this.toggleModalHandler}
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
            <GridListItem>
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
        <FormAddPost userId={parseInt(this.props.match.params.id)} />
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

// const mapDispatchToProps = dispatch => {
//   // const deletePost = post => dispatch(removePost(post))
//   // return deletePost
// }

export default withContext(
  connect(mapStateToProps, { getUserPosts, getInitalUsers })(
    withRouter(UserDetails)
  )
)
