import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getInitalUsers } from './../duck/operations'
import { GridList, GridListItem } from './../components/Styles'
import UserItem from './../components/molecules/UserItem/UserItem'
import LoaderFull from '../components/molecules/Loader/LoaderFull'

class Homepage extends Component {
  state = {
    loading: true
  }

  componentDidMount() {
    const TIMEOUT_VAL = 500
    this.props.getInitalUsers().then(() => {
      setTimeout(() => {
        this.setState({
          loading: false
        })
      }, TIMEOUT_VAL)
    })
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <LoaderFull loaderColor="#FFF" />
        ) : (
          <GridList grid4>
            {this.props.userList.map(
              ({ id, name, username, email, phone, company, website }) => (
                <GridListItem key={id}>
                  <UserItem
                    id={id}
                    name={name}
                    username={username}
                    email={email}
                    phone={phone}
                    company={company}
                    website={website}
                  />
                </GridListItem>
              )
            )}
          </GridList>
        )}
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    userList: state.users
  }
}

export default connect(mapStateToProps, { getInitalUsers })(Homepage)
