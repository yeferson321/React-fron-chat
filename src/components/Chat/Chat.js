import { React, useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import './chat.css'


function Chat() {
    const ContextMessageText = useContext(DataContext);

    const files = (messageText) => {
        // console.log("files", messageText.mimeType)
        if (messageText.body) {
            const blob = new Blob([messageText.body], { type: messageText.mimeType });
            const fileURL = URL.createObjectURL(blob);
            return fileURL
        }
    }

    return (

        <div className='chat'>

            {ContextMessageText.ContextMessageText?.map((messagesText, index) => (

                messagesText.type === "text" ?

                    <div key={index} className={`${messagesText.from === "You" ? "right" : "left"}`}>

                        <h6 className={`message ${messagesText.from === "You" ? "bg-primary text-white" : "bg-dark text-white"}`}>{messagesText.from}: {messagesText.body}</h6>

                    </div> :

                    <div key={index} className={`${messagesText.from === "You" ? "right" : "left"}`}>

                        {messagesText.mimeType.startsWith('image') ?

                            <img src={files(messagesText)} className="card-img-top" alt="..." /> :

                            <div className='video'>
                                <iframe src={files(messagesText)} title="sent video" allowfullscreen></iframe>
                            </div>
                        }

                    </div>

            ))}

        </div>
    )
}

export default Chat