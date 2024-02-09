import React from 'react';
import {DeepChat} from 'deep-chat-react';
import * as sdk from "microsoft-cognitiveservices-speech-sdk";

export default function Chatbot() {

  const chatElementRef = React.useRef(null);


  React.useEffect(() => {
    window.SpeechSDK = sdk;
  }, []);

  const deepChatRequest = {
    url: 'http://localhost:8000/api/chat/', 
    additionalBodyProps: {
      model: 'gpt-3.5-turbo',
      max_tokens: 200,
      temperature: 0.7,
      frequency_penalty: 0,
      presence_penalty: 0,
      top_p: 0.95,
      stop: null
    }
  };

  return (
    <div>
      <DeepChat
          ref={chatElementRef}
          style={{borderRadius: '10px'}}
          introMessage={{text: 'Talk to your Alzi Bot!'}}
          request={deepChatRequest}
          speechToText={{
            azure: {subscriptionKey: "20457bfbf6c9429c8dfc98f517390578", region: "westus"},
          }}
          requestBodyLimits={{maxMessages: -1}}
          requestInterceptor={(details) => {
            console.log(details);
            return details;
          }}
          responseInterceptor={(response) => {
            console.log(response);
            return response;
          }}
        />
    </div>
  );
}

