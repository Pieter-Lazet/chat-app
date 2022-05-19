import React from 'react'

class incomingChat extends React.Component{
    constructor() {
        super()
        this.state = {
            message: ""
        }
    }

    render() {
        return (
                <div className="container darker">
                    <p>{this.props.bericht}</p>
                    <span className="time-dark">{this.props.time}</span>
                </div>
        )
    }
}


export default incomingChat