import React from 'react';
import './MessageChat.css';
function MessageChat({ children }) {
	return <div className="message">{children}</div>;
}

export default MessageChat;
