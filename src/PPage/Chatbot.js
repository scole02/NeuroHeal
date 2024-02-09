import React from 'react';
import {DeepChat} from 'deep-chat-react';
import * as sdk from "microsoft-cognitiveservices-speech-sdk";

function Chatbot() {
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

  const linearGradient = "linear-gradient(90deg, rgb(239, 242, 247) 0%, 7.60286%, rgb(237, 240, 249) 15.2057%, 20.7513%, rgb(235, 239, 248) 26.297%, 27.6386%, rgb(235, 239, 248) 28.9803%, 38.2826%, rgb(231, 237, 249) 47.585%, 48.1216%, rgb(230, 236, 250) 48.6583%, 53.1306%, rgb(228, 236, 249) 57.6029%, 61.5385%, rgb(227, 234, 250) 65.4741%, 68.7835%, rgb(222, 234, 250) 72.093%, 75.7603%, rgb(219, 230, 248) 79.4275%, 82.8265%, rgb(216, 229, 248) 86.2254%, 87.8354%, rgb(213, 228, 249) 89.4454%, 91.8605%, rgb(210, 226, 249) 94.2755%, 95.4383%, rgb(209, 225, 248) 96.6011%, 98.3005%, rgb(208, 224, 247) 100%)";

  const textInput = {
    styles: {
      container: {
        borderRadius: "20px",
        border: "unset",
        width: "78%",
        marginLeft: "-15px",
        boxShadow: "0px 0.3px 0.9px rgba(0, 0, 0, 0.12), 0px 1.6px 3.6px rgba(0, 0, 0, 0.16)"
      },
      text: {
        padding: "10px",
        paddingLeft: "15px",
        paddingRight: "34px"
      }
    },
    placeholder: {
      text: "Ask me anything...",
      style: "#606060"
    }
  };

  return (
    <div className="appContainer">
      {/* <QuestionsPage /> */}
      <DeepChat
          ref={chatElementRef}
          style={{ borderRadius: "10px", width: '96vw', height: "calc(100vh - 70px)", "font-size": '1.87rem', "padding-top": "10px", borderColor: "#e4e4e4", background: linearGradient }}
          textInput={{styles: textInput.styles}}
          messageStyles='{
            "default": {
              "shared": {
                "bubble": {
                  "backgroundColor": "unset",
                  "marginTop": "10px",
                  "marginBottom": "10px",
                  "boxShadow": "0px 0.3px 0.9px rgba(0, 0, 0, 0.12), 0px 1.6px 3.6px rgba(0, 0, 0, 0.16)"
                }
              },
              "user": {
                "bubble": {
                  "background": "linear-gradient(130deg, #2870EA 20%, #1B4AEF 77.5%)"
                }
              },
              "ai": {"bubble": {"background": "rgba(255,255,255,0.7)"}}
            }
          }'
          microphone='{
            "button": {
              "default": {
                "container": {"default": {"bottom": "1em", "right": "0.6em", "borderRadius": "20px", "width": "1.9em", "height": "1.9em"}},
                "svg": {"styles": {"default": {"bottom": "0.4em", "left": "0.3em"}}}
              },
              "position": "inside-right"
            }
          }'

          introMessage={{text: 'Talk to me!'}}
          request={deepChatRequest}
          speechToText={{
            azure: {subscriptionKey: "20457bfbf6c9429c8dfc98f517390578", region: "westus"},
          }}
          
          textToSpeech={{lang: "us", volume: 0.9}}
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

export default Chatbot;



//   const chatElementRef = React.useRef(null);


//   React.useEffect(() => {
//     window.SpeechSDK = sdk;
//   }, []);

//   const deepChatRequest = {
//     url: 'http://localhost:8000/api/chat/', 
//     additionalBodyProps: {
//       model: 'gpt-3.5-turbo',
//       max_tokens: 200,
//       temperature: 0.7,
//       frequency_penalty: 0,
//       presence_penalty: 0,
//       top_p: 0.95,
//       stop: null
//     }
//   };

//   return (
//     <div>
//       <DeepChat
//           ref={chatElementRef}
//           style={{borderRadius: '10px'}}
//           introMessage={{text: 'Talk to your Alzi Bot!'}}
//           request={deepChatRequest}
//           speechToText={{
//             azure: {subscriptionKey: "20457bfbf6c9429c8dfc98f517390578", region: "westus"},
//           }}
//           requestBodyLimits={{maxMessages: -1}}
//           requestInterceptor={(details) => {
//             console.log(details);
//             return details;
//           }}
//           responseInterceptor={(response) => {
//             console.log(response);
//             return response;
//           }}
//         />
//     </div>
//   );
// }

