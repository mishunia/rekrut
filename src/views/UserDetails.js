import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import withContext from './../hoc/withContext'
import Header from './../components/organisms/Header/Header'
import { getUserPosts } from './../reducers'

const UserDetails = ({ pageContext, match, activeItem, getUserPosts }) => {
  useEffect(() => {
    console.log('efekt')
    getUserPosts()
  }, {})

  const [item] = activeItem

  return (
    <>
      <Header title={item.name} />
      {props.persons}
    </>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    activeItem: state.data.filter(
      item => item.id === parseInt(ownProps.match.params.id)
    ),
    persons: state.persons
  }
}

export default withContext(
  connect(mapStateToProps, { getUserPosts })(UserDetails)
)
