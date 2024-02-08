import React from 'react';
import QuestionsPage from './QuestionsPage'; // Adjust the import path as necessary
//import {RequestDetails} from 'deep-chat/dist/types/interceptors';
import {DeepChat} from 'deep-chat-react';

function App() {
  return (
    <div>
      <QuestionsPage />
      <DeepChat
          style={{borderRadius: '10px'}}
          introMessage={{text: 'Send a chat message to an example server.'}}
          request={{url: 'http://localhost:8000/api/chat/',  additionalBodyProps: {model: 'gpt-3.5-turbo'}}}
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
        <DeepChat
          style={{borderRadius: '10px'}}
          introMessage={{text: 'Send a streamed chat message to an example server.'}}
          request={{url: 'http://localhost:8000/api/chat-stream/',  additionalBodyProps: {model: 'gpt-3.5-turbo'}}}
          stream={true}
        />
    </div>
  );
}

export default App;