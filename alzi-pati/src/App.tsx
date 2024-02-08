import {DeepChat} from 'deep-chat-react';
import './App.css';
import * as sdk from "microsoft-cognitiveservices-speech-sdk";
import { DeepChat as DeepChatT } from "deep-chat";
import React from "react";

declare global {
  interface Window {
    SpeechSDK: typeof sdk;
  }
}

function App() {
  const preprompt = "You are a chatbot to help the memory enhaucement therapy of Alzheimer's patient and ask him/her cognitive questions. Talk in the vibe of daily conversation."

  const deepChatRequest = {
    url: 'http://localhost:8080/openai-chat', 
    additionalBodyProps: {
      model: 'gpt-3.5-turbo',
      messages: [
        { role: "system", text: preprompt},
      ],
      max_tokens: 800,
      temperature: 0.7,
      frequency_penalty: 0,
      presence_penalty: 0,
      top_p: 0.95,
      stop: null
    }
  };

  const chatElementRef = React.useRef<DeepChatT>(null);
  React.useEffect(() => {
      window.SpeechSDK = sdk;
    }, []);

  // Assuming `openAI` is an instance of your OpenAI class
  const response = await openAI.chat(deepChatRequest.additionalBodyProps); // Make sure to handle errors appropriately

  // Step 2: Update the Messages History
  deepChatRequest.additionalBodyProps.messages.push({ role: "ai", text: response.text });

  return (
    <div className="App">
      <h1>Chat With Me!</h1>
      <div className="components">
        <div className="diagonal-line" style={{background: '#e8f5ff'}}></div>
        {/* by setting maxMessages requestBodyLimits to 0 or lower - each request will send full chat history:
            https://deepchat.dev/docs/connect/#requestBodyLimits */}
        {/* If you don't want to or can't edit the target service, you can process the outgoing message using
            responseInterceptor and the incoming message using responseInterceptor:
            https://deepchat.dev/docs/interceptors */}
        <DeepChat
          ref={chatElementRef}
          style={{borderRadius: '10px'}}
          introMessage={{text: 'Talk to your Alzi Bot!'}}
          request={deepChatRequest}
          speechToText={{
            azure: {subscriptionKey: "20457bfbf6c9429c8dfc98f517390578", region: "westus"},
          }}
        />
      </div>
    </div>
  );
}

export default App;
