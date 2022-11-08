import React from 'react'
import NavbarTwo from '../NavbarTwo/NavbarTwo'
import Messenge from '../Messenge/Messenge';
import Chat from '../Chat/Chat';
import ReactPlayer from 'react-player'

function Live() {
    return (
        <div>
            <NavbarTwo />
            <Chat />
            <Messenge />
        </div>
    )
}

export default Live