import React from 'react';
import QuestionsPage from './QuestionsPage'; // Adjust the import path as necessary
//import {RequestDetails} from 'deep-chat/dist/types/interceptors';
import {DeepChat} from 'deep-chat-react';
import * as sdk from "microsoft-cognitiveservices-speech-sdk";

function App() {

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
      <QuestionsPage />
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

export default App;


// textToSpeech='{"volume": 0.9}'

// import React, { useEffect, useRef } from 'react';
// import QuestionsPage from './QuestionsPage'; // Adjust the import path as necessary
// import { DeepChat } from 'deep-chat-react';
// import * as sdk from "microsoft-cognitiveservices-speech-sdk";

// function App() {
//   const prepromptText = "You are a chatbot to help the memory enhancement therapy of Alzheimer's patient and ask him/her cognitive questions. Talk in the vibe of daily conversation."
//   const preprompt = { role: "system", text: prepromptText };

//   const chatElementRef = useRef(null);

//   useEffect(() => {
//     if (chatElementRef.current) {
//       // The DeepChat component has mounted, and you can access chatElementRef.current here
//     } else {
//       // The ref is not attached yet or the component has not rendered
//       console.log('DeepChat has not mounted yet');
//     }
//     window.SpeechSDK = sdk;
//   }, []);

//   // Function to get the current chat history from the DeepChat component
//   const getChatHistory = () => {
//     console.log(chatElementRef);
//     if (chatElementRef.current) {
//       const history = chatElementRef.current.getMessages();
//       // Prepend the preprompt message to the chat history
//       return [preprompt, ...history];
//     }
//     // If there's no chat history (e.g., at the start), return an array with just the preprompt
//     return [preprompt];
//   };

//   // Dynamically generates the request object, including the latest chat history
//   const generateDeepChatRequest = () => ({
//     url: 'http://localhost:8000/api/chat/', 
//     additionalBodyProps: {
//       model: 'gpt-3.5-turbo',
//       messages: getChatHistory(), // Fetches and prepends the preprompt to the current chat history
//       max_tokens: 800,
//       temperature: 0.7,
//       frequency_penalty: 0,
//       presence_penalty: 0,
//       top_p: 0.95,
//       stop: null
//     }
//   });

//   return (
//     <div>
//       <QuestionsPage />
//       <DeepChat
//         ref={chatElementRef}
//         style={{ borderRadius: '10px' }}
//         introMessage={{ text: 'Talk to your Alzi Bot!' }}
//         request={generateDeepChatRequest()} // Initialize the chat with the generated request
//         speechToText={{
//           azure: { subscriptionKey: "20457bfbf6c9429c8dfc98f517390578", region: "westus" },
//         }}
//         requestBodyLimits={{ maxMessages: -1 }}
//         requestInterceptor={(details) => {
//           console.log(details);
//           return details;
//         }}
//         responseInterceptor={(response) => {
//           console.log(response);
//           return response;
//         }}
//       />
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from 'react';
// import QuestionsPage from './QuestionsPage';
// import { DeepChat } from 'deep-chat-react';
// import * as sdk from "microsoft-cognitiveservices-speech-sdk";

// function App() {
//   const [messages, setMessages] = useState([]);
//   const prepromptText = "You are a chatbot to help the memory enhancement therapy of Alzheimer's patient and ask him/her cognitive questions. Talk in the vibe of daily conversation.";
  
//   useEffect(() => {
//     // Initialize SDK and messages state on component mount
//     window.SpeechSDK = sdk;
//     setMessages([{ role: "system", text: prepromptText }]);
//   }, []);

//   const requestInterceptor = (details) => {
//     console.log('Request details:', details);
//     // Modify details as necessary
//     return details;
//   };

//   const responseInterceptor = (response) => {
//     console.log('Response:', response);
//     // Process and potentially update state based on response
//     return response;
//   };

//   // Assuming DeepChat component or similar mechanism to update messages
//   // This function is an example and might need to be adapted based on how you're updating messages
//   const handleNewMessage = (newMessage) => {
//     setMessages(messages => [...messages, newMessage]);
//     console.log(messages);
//   };

//   const generateDeepChatRequest = () => {
//     return {
//       url: 'http://localhost:8000/api/chat/',
//       additionalBodyProps: {
//         model: 'gpt-3.5-turbo',
//         messages: messages, // This now captures the current state
//         max_tokens: 800,
//         temperature: 0.7,
//         frequency_penalty: 0,
//         presence_penalty: 0,
//         top_p: 0.95,
//         stop: null,
//       },
//     };
//   };
  

//   return (
//     <div>
//       <QuestionsPage />
//       <DeepChat
//         style={{ borderRadius: '10px' }}
//         introMessage={{ text: 'Talk to your Alzi Bot!' }}
//         request={generateDeepChatRequest()}
//         speechToText={{
//           azure: { subscriptionKey: "20457bfbf6c9429c8dfc98f517390578", region: "westus" },
//         }}
//         requestBodyLimits={{ maxMessages: -1 }}
//         requestInterceptor={requestInterceptor}
//         responseInterceptor={responseInterceptor}
//         // Assuming DeepChat supports an onMessage or similar event to handle new messages
//         onNewMessage={handleNewMessage}
//       />
//     </div>
//   );
// }

// export default App;
