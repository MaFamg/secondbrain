import React, { useState } from 'react';
import robot from '../images/robot.svg';
import OpenAI from 'openai';

function YourRole() {
  const openai = new OpenAI({ apiKey: 'sk-QwcC5Si3CS0YJYFUK6sQsFXr-AnUEk_sqaDOx-C3yeT3BlbkFJE8mwYj0Evqu7J6A01RcJNT9RBDwFA-TMAy2vc_rowA',dangerouslyAllowBrowser: true });
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I help you today?', sender: 'Chatbot' },
  ]);
  const [inputText, setInputText] = useState('');
  const [threadId, setThreadId] = useState('thread_re4EF1GHvTxshh5pW0DhHC4U'); // Replace with actual thread ID
  const assistantId = 'asst_3STlScrSjtv1pQXeOAQRBTpt'; // Replace with your assistant ID

  // Function to handle message sending
  const handleSendMessage = async () => {
    if (inputText.trim()) {
      try {
        // Step 1: Add User's Message to Thread
        const userMessage = await openai.beta.threads.messages.create(threadId, {
          role: 'user',
          content: inputText,
        });

        // Add User's message to the local state
        setMessages([...messages, { text: inputText, sender: 'User' }]);
        setInputText(''); // Clear the input field

        // Step 2: Create a Run to Get the Assistant's Response
        const run = await openai.beta.threads.runs.createAndPoll(threadId, {
          assistant_id: assistantId,
          instructions: '',
        });

        // Step 3: Handle Run Completion and Fetch Assistant's Response
        if (run.status === 'completed') {
          // Fetch the list of messages in the thread
          const responseMessages = await openai.beta.threads.messages.list(threadId);
          console.log('MENSAGENS DA THREAD' + JSON.stringify(responseMessages.data[0].content.text, null, 2))

          // // Find the latest assistant response
          // const assistantMessage = responseMessages.data.reverse().find(
          //   (msg) => msg.role === 'assistant'
          // );

          if (responseMessages) {
            setMessages([
              ...messages,
              { text: inputText, sender: 'User' },
              { text: responseMessages.data[0].content[0].text.value, sender: 'Chatbot' },
            ]);
          }
        } else {
          console.error('Run failed or is still in progress:', run.status);
        }
      } catch (error) {
        console.error('Error interacting with OpenAI:', error);
      }
    }
  };

  return (
    <div style={containerStyles}>
      <div style={mainContentStyles}>
        {/* Chat Area */}
        <div style={chatContainerStyles}>
          {/* Header */}
          <div style={headerStyles}>
            <div style={headerIconStyles}>
              <img src={robot} alt="Chatbot Icon" style={iconStyles} />
            </div>
            <div style={headerTextStyles}>
              <h3>Your Assistant</h3>
            </div>
          </div>

          {/* Messages */}
          <div style={messagesAreaStyles}>
            {messages.map((message, index) => (
              <div
                key={index}
                style={{
                  ...messageBubbleStyles,
                  backgroundColor: message.sender === 'User' ? '#006ADC' : '#e1e1e1',
                  color: message.sender === 'User' ? '#fff' : '#000',
                }}
              >
                <p>
                  <strong>{message.sender}:</strong> {message.text}
                </p>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div style={inputAreaStyles}>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your message..."
              style={inputStyles}
            />
            <button onClick={handleSendMessage} style={sendButtonStyles}>
              Send
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div style={rightSideContainerStyles}>
          <h2>Right Side Title</h2>
        </div>
      </div>
    </div>
  );
}

// Container Styles for Chat Layout
const containerStyles = {
  display: 'flex',
  justifyContent: 'left',
  marginTop: '0px',
  backgroundColor: '#f7f7f7',
  width: '100%',
  height: '100%'
};

// Main Content (Flexbox container for chat and right side area)
const mainContentStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  width: '100%',
  height: '80vh', // Set height for the chat area
  padding: '10px'
};

// Chat Container
const chatContainerStyles = {
  width: '100%', // Takes up 70% of the available space
  height: '100%',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
  marginRight: '5px'
};

// Header Section for Chatbot Name and Icon
const headerStyles = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '20px',
};

const headerIconStyles = {
  marginRight: '10px',
};

const iconStyles = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
};

const headerTextStyles = {
  fontSize: '18px',
  fontWeight: 'bold',
};

// Message Area (Scrollable Section)
const messagesAreaStyles = {
  flex: 1,
  overflowY: 'scroll',
  padding: '10px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  marginBottom: '20px',
  backgroundColor: '#f5f5f5',
};

// Individual Message Bubble Styles
const messageBubbleStyles = {
  marginBottom: '0px',
  padding: '5px',
  borderRadius: '8px',
  maxWidth: '70%',
};

// Input Area for Typing Message
const inputAreaStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const inputStyles = {
  width: '85%',
  padding: '10px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  fontSize: '16px',
};

const sendButtonStyles = {
  padding: '10px 20px',
  backgroundColor: '#006ADC',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontWeight: 'bold',
};

// Right Side Container
const rightSideContainerStyles = {
  width: '100%', // Takes up 28% of the available space (leaving space for chat area)
  height: '100%',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
};

// Example Title Styles for Right Side
const rightSideTitleStyles = {
  fontSize: '24px',
  fontWeight: 'bold',
  textAlign: 'center',
};

export default YourRole;
