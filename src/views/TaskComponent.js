// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const apiBaseUrl = 'http://localhost:8000/api'; // Update with your actual API base URL


// export default function TasksComponent(){
//     const [questions, setQuestions] = useState([{ _id: '', question: '', answer: '' }]);

//     useEffect(() => {
//       fetchQuestions();
//     }, []);
  
//     const fetchQuestions = async () => {
//       try {
//         const response = await axios.get(`${apiBaseUrl}/questions/`);
//         setQuestions(response.data.length ? response.data : [{ _id: '', question: '', answer: '' }]);
//       } catch (error) {
//         console.error('Failed to fetch questions:', error);
//       }
//     };
  
//     const handleUpdate = async (index) => {
//       const question = questions[index];
//       if (question._id) {
//         try {
//           await axios.put(`${apiBaseUrl}/question/${question._id}/`, question);
//           alert('Question updated successfully.');
//         } catch (error) {
//           console.error('Failed to update question:', error);
//         }
//       } else {
//         try {
//           const response = await axios.post(`${apiBaseUrl}/question/`, question);
//           fetchQuestions(); // Refresh the list to include the new question with its ID
//           alert('Question added successfully.');
//         } catch (error) {
//           console.error('Failed to add question:', error);
//         }
//       }
//     };
  
//     const handleChange = (index, field, value) => {
//       const updatedQuestions = [...questions];
//       updatedQuestions[index][field] = value;
//       setQuestions(updatedQuestions);
//     };
  
//     return (
//       <div>
//         {questions.map((question, index) => (
//           <div key={index} style={{ marginBottom: '10px' }}>
//             <input
//               type="text"
//               value={question.question}
//               onChange={(e) => handleChange(index, 'question', e.target.value)}
//               placeholder="Question"
//             />
//             <input
//               type="text"
//               value={question.answer}
//               onChange={(e) => handleChange(index, 'answer', e.target.value)}
//               placeholder="Answer"
//             />
//             <button onClick={() => handleUpdate(index)}>Save</button>
//           </div>
//         ))}
//         <button onClick={() => setQuestions([...questions, { _id: '', question: '', answer: '' }])}>
//           Add Question
//         </button>
//       </div>
//     );
//   };

import React, { useState, useEffect } from 'react';
import axios from 'axios';

//const apiBaseUrl = 'http://localhost:8000/api'; // Update with your actual API base URL
const apiBaseUrl = 'https://alzi-django-web-app.azurewebsites.net/api'; // Update with your actual API base URL

export default function TasksComponent() {
  const [questions, setQuestions] = useState([{ _id: '', question: '', answer: '' }]);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
              const response = await axios.get(`${apiBaseUrl}/questions/`);
              setQuestions(response.data.length ? response.data : [{ _id: '', question: '', answer: '' }]);
            } catch (error) {
              console.error('Failed to fetch questions:', error);
            }
  };

  const handleUpdate = async (index) => {
    const question = questions[index];
      if (question._id) {
        try {
          await axios.put(`${apiBaseUrl}/question/${question._id}/`, question);
          alert('Question updated successfully.');
        } catch (error) {
          console.error('Failed to update question:', error);
        }
      } else {
        try {
          const response = await axios.post(`${apiBaseUrl}/question/`, question);
          fetchQuestions(); // Refresh the list to include the new question with its ID
          alert('Question added successfully.');
        } catch (error) {
          console.error('Failed to add question:', error);
        }
      }
  };

  const handleChange = (index, field, value) => {
    const updatedQuestions = [...questions];
          updatedQuestions[index][field] = value;
          setQuestions(updatedQuestions);
  };

  // Inline styles
  const buttonStyle = {
    padding: '10px 15px',
    margin: '5px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  const inputStyle = {
    padding: '10px',
    margin: '5px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    width: 'calc(50% - 22px)', // 50% width - (padding+border+margin) to make it fit in line
  };

  const formStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10px',
    background: '#f7f7f7',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div>
      {questions.map((question, index) => (
        <div key={index} style={formStyle}>
          <input
            type="text"
            value={question.question}
            onChange={(e) => handleChange(index, 'question', e.target.value)}
            placeholder="Question"
            style={inputStyle}
          />
          <input
            type="text"
            value={question.answer}
            onChange={(e) => handleChange(index, 'answer', e.target.value)}
            placeholder="Answer"
            style={inputStyle}
          />
          <button onClick={() => handleUpdate(index)} style={buttonStyle}>
            ✏ Save
          </button>
        </div>
      ))}
      <div style={{ textAlign: 'center' }}>
        <button
          onClick={() => setQuestions([...questions, { _id: '', question: '', answer: '' }])}
          style={buttonStyle}
        >
          ➕ Add Question
        </button>
      </div>
    </div>
  );
}