import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { routes } from './../../../routes/routes'
import {
  UserItemStyled,
  UserItemHeadStyled,
  UserItemContactStyled,
  UserItemInfoStyled,
  UserItemActionStyled
} from './styles/index'
import Paragraph from './../../atoms/Paragraph/Paragraph'
import Button from './../../atoms/Button/Button'

export default class UserItem extends Component {
  state = {
    redirect: false
  }

  handleDetailsClick = () => this.setState({ redirect: true })

  render() {
    const { id, name, username, email, phone, company, website } = this.props
    const { redirect } = this.state

    if (redirect) {
      return <Redirect to={`${routes.user}/${id}`} />
    }

    return (
      <UserItemStyled>
        <UserItemHeadStyled>
          <Paragraph p4>{name}</Paragraph>
        </UserItemHeadStyled>
        <UserItemContactStyled>
          <a href={email} target="_blank">
            {email}
          </a>
          <a href={email} target="_blank">
            {phone}
          </a>
          <a href={email} target="_blank">
            {website}
          </a>
        </UserItemContactStyled>
        <UserItemInfoStyled>
          <Paragraph p3>{company.name}</Paragraph>
          <Paragraph p3>{company.catchPhrase}</Paragraph>
          <Paragraph p3>{company.bs}</Paragraph>
        </UserItemInfoStyled>
        <UserItemActionStyled>
          <Button onClick={this.handleDetailsClick}>details</Button>
        </UserItemActionStyled>
      </UserItemStyled>
    )
  }
}
