'use client'
import { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot, faTimes, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { text: "Hi there! I'm your AI assistant. How can I help you today?", sender: 'assistant' }
  ])
  const [inputText, setInputText] = useState('')
  const messagesEndRef = useRef(null)
  
  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

  const toggleAssistant = () => {
    setIsOpen(!isOpen)
  }

  const handleInputChange = (e) => {
    setInputText(e.target.value)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && inputText.trim()) {
      sendMessage()
    }
  }

  const sendMessage = () => {
    if (!inputText.trim()) return

    // Add user message
    const newMessages = [...messages, { text: inputText, sender: 'user' }]
    setMessages(newMessages)
    setInputText('')

    // Simulate AI response after a short delay
    setTimeout(() => {
      const response = generateResponse(inputText)
      setMessages([...newMessages, { text: response, sender: 'assistant' }])
    }, 1000)
  }

  // Simple response generation based on user input
  const generateResponse = (input) => {
    const lowerInput = input.toLowerCase()
    
    if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
      return "Hello! How can I assist you with Jesse's website today?"
    } else if (lowerInput.includes('help')) {
      return "I can help you navigate the website, learn about Jesse's projects, or answer questions about his skills and experience."
    } else if (lowerInput.includes('contact') || lowerInput.includes('email')) {
      return "You can contact Jesse through the contact form in the Contact section of the website."
    } else if (lowerInput.includes('project') || lowerInput.includes('work')) {
      return "Jesse has several projects showcased on this website. Check out the Projects section to learn more about them."
    } else if (lowerInput.includes('resume') || lowerInput.includes('cv')) {
      return "You can view Jesse's resume by clicking on the Resume section of the website."
    } else if (lowerInput.includes('skill') || lowerInput.includes('technology')) {
      return "Jesse is skilled in web development, using technologies like React, Next.js, and SASS, among others."
    } else {
      return "Thanks for your message! If you have specific questions about Jesse's work or experience, I'd be happy to help."
    }
  }

  return (
    <div className="ai-assistant">
      {isOpen && (
        <div className={`ai-assistant-container ${isOpen ? 'open' : ''}`}>
          <div className="ai-assistant-header">
            <h3>AI Assistant</h3>
            <button onClick={toggleAssistant}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className="ai-assistant-messages">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`message message-${message.sender}`}
              >
                {message.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="ai-assistant-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={inputText}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
            />
            <button 
              onClick={sendMessage}
              disabled={!inputText.trim()}
            >
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
      )}
      <div className="ai-assistant-button" onClick={toggleAssistant}>
        <FontAwesomeIcon icon={faRobot} />
      </div>
    </div>
  )
}
