import React, { Component } from 'react'
import css from './User.module.css'

export default class User extends Component {
    render() {
        const {user} = this.props
        const {name,login, picture} = user
        return (
            <div className={css.flexRow}>
                <img className={css.avatar} src={picture.large} alt={name.first}/>
                <span key={login.uuid}>{name.first}</span>
            </div>
        )
    }
}
