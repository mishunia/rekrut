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
    const { id, name, email, phone, company, website } = this.props
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
        <UserItemInfoStyled>
          {/* <Paragraph p3>{company.name}</Paragraph>
          <Paragraph p3>{company.catchPhrase}</Paragraph>
          <Paragraph p3>{company.bs}</Paragraph> */}
        </UserItemInfoStyled>
        <UserItemActionStyled>
          <Button onClick={this.handleDetailsClick}>details</Button>
        </UserItemActionStyled>
      </UserItemStyled>
    )
  }
}
