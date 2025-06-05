'use client'
import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faPaperPlane, faTimes } from '@fortawesome/free-solid-svg-icons';

/**
 * AI Assistant Component
 * A hovering chat assistant that provides help to website visitors
 */
const AIAssistant = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi there! I'm Jesse's AI assistant. How can I help you today?", sender: 'assistant' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of messages when new messages are added
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Toggle expanded state
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Handle sending a message
  const handleSendMessage = async () => {
    if (inputValue.trim() === '') return;

    // Add user message
    const userText = inputValue;
    const newMessages = [...messages, { text: userText, sender: 'user' }];
    setMessages(newMessages);
    setInputValue('');

    try {
      const res = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText })
      });
      const data = await res.json();
      const aiResponse = data.reply || data.response || data.message || '...';
      setMessages([...newMessages, { text: aiResponse, sender: 'assistant' }]);
    } catch (err) {
      const fallback = generateResponse(userText);
      setMessages([...newMessages, { text: fallback, sender: 'assistant' }]);
    }
  };

  // Handle pressing Enter key in input
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // Simple response generation based on user input
  const generateResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return "Hello! How can I help you with Jesse's website today?";
    } else if (input.includes('resume') || input.includes('cv')) {
      return "You can view Jesse's resume by clicking the 'See Full Resume' button or navigating to the eResume section.";
    } else if (input.includes('contact') || input.includes('email') || input.includes('reach')) {
      return "You can contact Jesse through the contact form in the Contact section. Just fill out your details and message!";
    } else if (input.includes('project') || input.includes('work')) {
      return "Jesse has worked on several projects including Chirp (a bird song prediction app) and this website. Check out the Blog section for more details!";
    } else if (input.includes('skill') || input.includes('technology') || input.includes('tech stack')) {
      return "Jesse is skilled in various technologies including programming languages, frameworks & libraries, web technologies, and both front-end and back-end development.";
    } else if (input.includes('thank')) {
      return "You're welcome! Let me know if you need anything else.";
    } else {
      return "I'm not sure I understand. Could you rephrase your question? I can help with information about Jesse's resume, projects, skills, or how to contact him.";
    }
  };

  return (
    <div className={`ai-assistant ${isExpanded ? 'expanded' : ''}`}>
      <button className="ai-assistant-toggle" onClick={toggleExpanded}>
        {isExpanded ? (
          <FontAwesomeIcon icon={faTimes} className='icon-md' />
        ) : (
          <FontAwesomeIcon icon={faRobot} className='icon-md' />
        )}
      </button>
      
      <div className="ai-assistant-content">
        <div className="ai-assistant-header">
          <h3>AI Assistant</h3>
        </div>
        
        <div className="ai-assistant-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              {message.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        <div className="ai-assistant-input">
          <input
            type="text"
            placeholder="Type your message..."
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <button onClick={handleSendMessage}>
            <FontAwesomeIcon icon={faPaperPlane} className='icon-md' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
