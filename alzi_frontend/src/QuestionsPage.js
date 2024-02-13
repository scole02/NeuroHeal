import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiBaseUrl = `${process.env.REACT_APP_API_URI}`; // Update with your actual API base URL

const QuestionsPage = () => {
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

  return (
    <div>
      {questions.map((question, index) => (
        <div key={index} style={{ marginBottom: '10px' }}>
          <input
            type="text"
            value={question.question}
            onChange={(e) => handleChange(index, 'question', e.target.value)}
            placeholder="Question"
          />
          <input
            type="text"
            value={question.answer}
            onChange={(e) => handleChange(index, 'answer', e.target.value)}
            placeholder="Answer"
          />
          <button onClick={() => handleUpdate(index)}>Save</button>
        </div>
      ))}
      <button onClick={() => setQuestions([...questions, { _id: '', question: '', answer: '' }])}>
        Add Question
      </button>
    </div>
  );
};

export default QuestionsPage;
