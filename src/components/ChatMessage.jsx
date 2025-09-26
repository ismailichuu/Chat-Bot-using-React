import botProfileImage from '../assets/bot.png';
import userProfileImage from '../assets/user.png';
import loadingGif from '../assets/loading-spinner.gif';
import './ChatMessage.css';

export function ChatMessage({ message, sender, time }) {
  return (
    <div className={
      sender === 'user'
        ? 'user-chat'
        : 'bot-chat'
    }>
      {sender === 'chatbot' && (
        <img
          src={botProfileImage}
          className="chat-message-profile"
        />
      )}

      <div className="chat-message-text">
        <div>
          {(
            message === 'typing' ?
              <img className="loading-spinner" src={loadingGif} />
              : message
          )}
        </div>
        <div className='chat-message-time'>{time || '88'}</div>
      </div>

      {sender === 'user' && (
        <img
          src={userProfileImage}
          className="chat-message-profile"
        />
      )}

    </div>
  );
}