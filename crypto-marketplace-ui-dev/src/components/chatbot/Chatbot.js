import React, { useState, useEffect } from "react";

import BotMessage from "./comp/BotMessage";
import UserMessage from "./comp/UserMessage";
import Messages from "./comp/Message";
import Input from "./comp/Input";

import API from "./ChatbotAPI";
import Chatbutton from "./comp/ChatBtn";
import "./style.css";
import Header from "./comp/Header";

function Chatbot() {
 
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function loadWelcomeMessage() {
      setMessages([
        <BotMessage
          key="0"
          fetchMessage={async () => await API.GetChatbotResponse("hi")}
        />
      ]);
    }
    loadWelcomeMessage();
  }, []);

  const send = async text => {
    const newMessages = messages.concat(
      <UserMessage key={messages.length + 1} text={text} />,
      <BotMessage
        key={messages.length + 2}
        fetchMessage={async () => await API.GetChatbotResponse(text)}
      />
    );
    setMessages(newMessages);
  };


  return (
  <>
   <div className="chatbot">
        <Header />
        <Messages messages={messages} />
        <Input onSend={send} />
        <Chatbutton />
    </div>

  </>
  );
}

export default Chatbot;