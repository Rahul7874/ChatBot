import React, { useState } from 'react';
import ChatBot from './components/ChatBot';

const App = () => {
  // const [chatMessages, setChatMessages] = useState([]);

  // const sendMessage = async (userInput) => {
  //   try {
  //     const response = await fetch('http://localhost:5000/api/chat/chat', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ query: userInput }),
  //     });
  //     const data = await response.json();
      
  //     // Update the chatMessages state in one call
  //     setChatMessages([
  //       ...chatMessages,
  //       { text: userInput, type: 'user' },
  //       { text: data.answer || "Sorry, I don't have an answer for that question.", type: 'bot' },
  //     ]);
  //   } catch (error) {
  //     console.error('Error fetching response:', error);
  //   }
  // };

  return (
    <div>
      <h1>ChatBot</h1>
      <ChatBot/>
    </div>
  );
};

export default App;
