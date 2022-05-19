import React from 'react'

import IncomingChat from './incomingChat'

import Messages from './Messages'

class MessageList extends React.Component{
    constructor(){
        super()
        this.state = {
            information: Messages
        }
    }

    render() {
        const text = this.state.information.map(i => <IncomingChat key={i.id} bericht={i.message} time={i.time}/>)

        return (
            <div>
                {text}
            </div>
        )
    }
}

export default MessageList