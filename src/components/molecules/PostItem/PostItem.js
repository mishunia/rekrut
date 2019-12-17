import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { removePost } from './../../../duck/actions'
import { routes } from './../../../routes/routes'
import {
  PostItemStyled,
  PostItemRemoveStyled,
  PostItemContentStyled,
  PostItemOpenStyled
} from './styles/index'
import Thrash from './../../../assets/svg/Thrash'
import Button from './../../atoms/Button/Button'

class PostItem extends Component {
  state = {
    redirect: false
  }

  handleDetailsClick = () => {
    this.setState({
      redirect: true
    })
  }

  handleRemovePost = () => {
    console.log('heh')
    console.log(this.props.id)
    this.props.removePostItem(this.props.id)
  }

  render() {
    const { id, userId, removePost, content, showPost, urlParam } = this.props

    const { redirect } = this.state

    if (redirect) {
      return <Redirect to={`${routes.user}/${parseInt(urlParam)}/${id}`} />
    }

    return (
      <PostItemStyled id={id} userId={userId}>
        <PostItemRemoveStyled onClick={this.handleRemovePost}>
          <Thrash iconWidth="1em" iconHeight="1em" iconFontSize="26" />
        </PostItemRemoveStyled>
        <PostItemContentStyled>
          <strong>Title: </strong>
          {content}
        </PostItemContentStyled>
        <PostItemOpenStyled onClick={showPost}>
          <Button onClick={this.handleDetailsClick}>Read</Button>
        </PostItemOpenStyled>
      </PostItemStyled>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  removePostItem: post => dispatch(removePost(post))
})

export default connect(null, mapDispatchToProps)(PostItem)
