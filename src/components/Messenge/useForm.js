import { useState, useEffect, useContext } from "react"
import io from 'socket.io-client';
import { DataContext } from '../../context/DataContext';

export const useForm = () => {

    const {setDispatch}  = useContext(DataContext);
    const socket = io('https://chat-node-expres.herokuapp.com/')
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    setDispatch(messages)

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(message)

        socket.emit('message', message)

        const newMessage = {
            body: message,
            from: "You"
        }

        setMessages([...messages, newMessage])

        setMessage("");
    }

    useEffect(() => {
        const receiveMessage = message =>{
            setMessages([...messages, message])
        };

        socket.on('message', receiveMessage )

        return () => {
            socket.off('message', receiveMessage)
        }
        
    }, [messages, socket])

    return { message, setMessage, handleSubmit }

}
