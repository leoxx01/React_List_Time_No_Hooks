import React, { Component } from 'react'
import User from './User'

export default class Users extends Component {
    constructor(){
        super()
        this.state = {
            secondsVisible: 0
        }

        this.internal = null
    }
    componentDidMount(){
        console.log("componentDidMount de Users.js")
        this.internal = setInterval(()=>{
            const {secondsVisible} = this.state
            this.setState({
                secondsVisible: secondsVisible + 1
            })
        },1000)
    }
    componentDidUpdate(){
        console.log("componentDidUpdate de Users.js")
    }
    componentDidWillUnmount(){
        console.log("componentDidWillUnMount de Users.js")
        clearInterval(this.internal)
    }
    render() {
        const {users} = this.props
        const {secondsVisible} = this.state
        return (
            <div>
                <p>Componente Users Visible por {secondsVisible} segundos</p>
               <ul>{users.map(user =>{
                   const {login,name,picture} = user
                   return <li key={login.uuid}><User user={user}/></li>
                })}
               </ul>
            </div>
        )
    }
}