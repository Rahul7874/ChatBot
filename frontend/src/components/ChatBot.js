import React, { useState } from 'react';
import './ChatBot.css'; // Import your custom CSS for styling

const ChatBot = () => {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userInput.trim() === '') return;

    // Send the user's message to the backend and get the response
    try {
      const response = await fetch('http://localhost:5000/api/chat/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: userInput }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      // If the response is empty, display a default message
      const botResponse =
        data.answer || "Sorry, I don't have an answer for that question.";

      // Add the user's message and bot's response to the messages state
      setMessages((prevMessages) => [
        { text: userInput, type: 'user' },
        { text: botResponse, type: 'bot' },
        ...prevMessages,
      ]);
    } catch (error) {
      console.error('Error fetching response:', error);
      // Handle error if necessary
    }

    // Clear the input field
    setUserInput('');
  };

  return (
    <div className="chatbot-container">
      {/* Chat window to display messages */}
      <div className="chat-window">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.type}`}>
            {message.type === 'user' ? (
              <div className="user-bubble">
                <span className="user-message">{message.text}</span>
              </div>
            ) : (
              <div className="bot-bubble">
                <span className="bot-message">{message.text}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="user-input-form">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="user-input"
          placeholder="Type your message..."
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatBot;
