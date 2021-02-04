// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component {

    handleClick = (e) => {
        let mouseXY = [e.clientX, e.clientY]
        console.log('I work!')
        this.props.onReceiveCoordinates(mouseXY)
        console.log(this.props.test)
    }

    render () {
        return(
            <div>
                <button onClick={this.handleClick}>button</button>
            </div>
        )
    }
}