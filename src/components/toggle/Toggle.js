import React, { Component } from 'react'

export default class Toggle extends Component {
    handleChange = (event) =>{
        
        const {onToggle} = this.props
        const isChecked = event.target.checked

        onToggle(isChecked)
    }
    render() {
        const {enable} = this.props
        return (
            <div>
                 <div className="switch">
                    <label>
                        Mostrar Usuarios
                        <input type='checkbox' checked={enable} onChange={this.handleChange}/>
                        <span className='lever'></span>
                    </label>
                </div>
            </div>
        )
    }
}
