import { useEffect, useState } from 'react';
import { ChatMessages } from './components/ChatMessages';
import { ChatInput } from './components/ChatInput';
import './App.css';

function App() {

  const messages = localStorage.getItem('messages'); 
  const [chats, addChat] = useState( messages ? JSON.parse(messages) : []);

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(chats));
  }, [chats])

  return (
    <div className="app-container">
      <ChatMessages chats={chats} />

      <ChatInput chats={chats} addChat={addChat} />
    </div>
  );
}

export default App;
