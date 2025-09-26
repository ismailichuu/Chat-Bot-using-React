import { useState } from "react";
import { Chatbot } from "supersimpledev";
import './ChatInput.css';
import dayjs from "dayjs";


export function ChatInput({ chats, addChat }) {
    const [inputText, setInputText] = useState('');
    const [, setIsLoading] = useState(false);

    function saveInputText(e) {
        setInputText(e.target.value);
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
        if (e.key === 'Escape') {
            setInputText('');
        }
    }

    async function sendMessage() {
        if (inputText === '') return;

        const savedInput = inputText;
        
        let timeString = dayjs().format('H:mma');

        setInputText('');
        setIsLoading(true);
        const newChatMessages = [
            ...chats, {
                message: savedInput,
                sender: 'user',
                time: timeString,
                id: crypto.randomUUID(),
            }, {
                message: 'typing',
                sender: 'chatbot',
                id: 'Typing',
            }
        ];

        addChat(newChatMessages);

        const response = await Chatbot.getResponseAsync(savedInput);

        timeString = dayjs().format('H:mma');

        addChat(
            newChatMessages.map(msg => (
                msg.id === 'Typing' ?
                    {
                        message: response,
                        sender: 'chatbot',
                        id: crypto.randomUUID(),
                        time: timeString
                    }
                    : msg
            ))
        )
        setIsLoading(false);

    }

    function clearMessages(){
        localStorage.setItem('messages', JSON.stringify([]));
        addChat([]);
    }

    return (
        <div className="chat-input-container">
            <input
                placeholder="Send a message to chatbot"
                onChange={saveInputText}
                onKeyDown={handleKeyDown}
                value={inputText}
                className="chat-input"
            />
            <button
                onClick={sendMessage}
                className="send-button"
            >Send</button>
            <button
                onClick={clearMessages}
                className="clear-button"
            >Clear</button>
        </div>
    );
} 