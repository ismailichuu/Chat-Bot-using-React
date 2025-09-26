import { useEffect, useState } from 'react';
import { ChatMessages } from './components/ChatMessages';
import { ChatInput } from './components/ChatInput';
import './App.css';

function App() {

  const [chats, addChat] = useState(JSON.parse(localStorage.getItem('messages') || []));

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
