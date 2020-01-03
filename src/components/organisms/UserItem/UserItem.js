import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { routes } from '../../../routes/routes'
import {
  UserItemStyled,
  UserItemHeadStyled,
  UserItemContactStyled,
  UserItemActionStyled
} from './styles/index'
import Paragraph from '../../atoms/Paragraph/Paragraph'
import Button from '../../atoms/Button/Button'
class UserItem extends Component {
  state = {
    redirect: false
  }

  handleDetailsClick = () => this.setState({ redirect: true })

  render() {
    const { id, name, email, phone, website } = this.props
    const { redirect } = this.state

    if (redirect) {
      return <Redirect to={`${routes.user}/${id}`} />
    }

    return (
      <UserItemStyled>
        <UserItemHeadStyled>
          <Paragraph p4 upper>
            {name}
          </Paragraph>
        </UserItemHeadStyled>
        <UserItemContactStyled>
          <Paragraph p3>
            <a href={email} target="_blank" rel="noopener noreferrer">
              {email}
            </a>
          </Paragraph>
          <Paragraph p3>
            <a href={email} target="_blank" rel="noopener noreferrer">
              {phone}
            </a>
          </Paragraph>
          <Paragraph p3>
            <a href={email} target="_blank" rel="noopener noreferrer">
              {website}
            </a>
          </Paragraph>
        </UserItemContactStyled>
        <UserItemActionStyled>
          <Button onClick={this.handleDetailsClick}>details</Button>
        </UserItemActionStyled>
      </UserItemStyled>
    )
  }
}

export default UserItem
