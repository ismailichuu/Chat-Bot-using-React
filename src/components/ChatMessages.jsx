import { useEffect, useRef } from "react";
import { ChatMessage } from "./ChatMessage";
import './ChatMessages.css';


export function ChatMessages({ chats }) {

  const chatMessageRef = useRef(null);

  useEffect(() => {
    const chatMessageElem = chatMessageRef.current;
    if (chatMessageElem) {
      chatMessageElem.scrollTop = chatMessageElem.scrollHeight;
    }

  }, [chats])

  if (chats.length === 0) {
    return (
      <div className="chat-message-container empty">
        <h3 className="welcome-message">Welcome to the chatbot project!</h3>
      </div>
    )
  }

  return (
    <div className="chat-message-container" ref={chatMessageRef}>
      {chats.map(chat => {
        return <ChatMessage message={chat.message} sender={chat.sender} key={chat.id} time={chat.time} />
      })}
    </div>
  );
}
