import React, { Component, useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { GridList, GridListItem } from './../components/Styles'
import UserItem from './../components/molecules/UserItem/UserItem'
import { getInitalData } from './../reducers'

class Homepage extends Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
      console.log(res.data)
      const persons = res.data
      this.setState({
        persons
      })
    })
    this.props.getInitalData()
  }

  render() {
    return (
      <div>
        <GridList grid4>
          {this.state.persons.map(
            ({ id, name, username, email, phone, company, website }) => (
              <GridListItem>
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
      </div>
    )
  }
}
const mapStateToProps = ({ data = {} }) => ({
  data
})

export default connect(mapStateToProps, { getInitalData })(Homepage)
