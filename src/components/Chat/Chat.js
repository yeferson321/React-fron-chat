import { React, useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import './chat.css'


function Chat() {
    const dispatch = useContext(DataContext);
    console.log(dispatch)

    return (

        <div className='chat'>


{/* <video
                src='https://firebasestorage.googleapis.com/v0/b/apideployusers.appspot.com/o/y2mate.com%20-%20RealestK%20%20WFM%20Official%20Music%20Video_v720P.mp4?alt=media&token=6e3bc9de-0f05-4896-8451-e098c11b7f29'
            /> */}

            {dispatch.dispatch?.map((message, index) => (

                <div key={index} className={`${message.from === "You" ? "right" : "left"}`}>

                    <h6 className={`message ${message.from === "You" ? "bg-primary text-white" : "bg-dark text-white"}`}>{message.from}: {message.body}</h6>

                </div>
            ))}

        </div>
    )
}

export default Chat