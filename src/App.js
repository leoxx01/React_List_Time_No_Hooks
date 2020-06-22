import React, { Component } from 'react';
import Users from './components/users/Users'
import Toggle from './components/toggle/Toggle'

export default class App extends Component {
  constructor(){
    super()

    this.state = {
      users: [],
      showUsers: false
    }
  }
  async componentDidMount(){
    const res = await fetch(
      'https://randomuser.me/api/?seed=rush&nat=br&results=10'
    )
    const json = await res.json()

    console.log(json)

    this.setState({
      users: json.results
    })
    
  }
  componentDidUpdate(){
    console.log('componentDidUpdate de App.js')
  }
  ComponentDidWillUnmount(){
    console.log('ComponentDidWillUnMount de App.js')
  }
  handleShowUsers = (isChecked) => {
    this.setState(
      {showUsers: isChecked}
    )
  }
  render() {
    const {showUsers,users} = this.state
    return (
      <div>
       <Toggle enable={showUsers} onToggle={this.handleShowUsers}/>
        <hr/>
        {showUsers && <Users users={users}/>}
      </div>
    )
  }
}
