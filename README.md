# Perfect Rank Project

1. Create a New Project using Vite
2. Add Website Logo: Please check the logo in the "img" folder and add it to the website.
3. Integrate Tailwind CSS into the project for styling and layout.
4. Install Font Awesome to use its icons in the project.

# This Colour used for the website

- Main Blue [#5a4bda] after hover -> [#4437b8]
- Main Black (Headings) [#1b2124] or [#3d3d3d]
- Gray [#757575]

# Font

- Poppins, serif































logic

To implement a **mock test pattern** using **React and Redux**, follow this logic:

---

### **Features**
1. **Save & Next**: Saves the selected answer and moves to the next question.
2. **Mark for Review & Next**: Marks the question for review and moves to the next question.
3. **Previous**: Allows users to go back and change answers.
4. **Submit**: Submits the test and shows the result.

---

## **Step 1: Setup Redux Store**
Install Redux Toolkit:

```sh
npm install @reduxjs/toolkit react-redux
```

Create a Redux store inside `/redux/store.js`:

```javascript
import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./quizSlice";

const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
});

export default store;
```

---

## **Step 2: Create Quiz Slice**
Inside `/redux/quizSlice.js`:

```javascript
import { createSlice } from "@reduxjs/toolkit";
import { questions } from "../data/questions"; // Import questions from a data file

const initialState = {
  currentQuestionIndex: 0,
  userResponses: {}, // { questionId: { answer: "option", status: "saved/review" } }
  reviewList: [],
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    saveAnswer: (state, action) => {
      const { questionId, answer } = action.payload;
      state.userResponses[questionId] = { answer, status: "saved" };
      if (state.currentQuestionIndex < questions.length - 1) {
        state.currentQuestionIndex += 1;
      }
    },
    markForReview: (state, action) => {
      const { questionId, answer } = action.payload;
      state.userResponses[questionId] = { answer, status: "review" };
      if (!state.reviewList.includes(questionId)) {
        state.reviewList.push(questionId);
      }
      if (state.currentQuestionIndex < questions.length - 1) {
        state.currentQuestionIndex += 1;
      }
    },
    previousQuestion: (state) => {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex -= 1;
      }
    },
    submitQuiz: (state) => {
      console.log("Final Responses:", state.userResponses);
    },
  },
});

export const { saveAnswer, markForReview, previousQuestion, submitQuiz } = quizSlice.actions;
export default quizSlice.reducer;
```

---

## **Step 3: Connect Redux to React**
In `main.jsx`:

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

---

## **Step 4: Build the Quiz Component**
Create `/components/Quiz.jsx`:

```javascript
import { useDispatch, useSelector } from "react-redux";
import { saveAnswer, markForReview, previousQuestion, submitQuiz } from "../redux/quizSlice";
import { questions } from "../data/questions";

const Quiz = () => {
  const dispatch = useDispatch();
  const { currentQuestionIndex, userResponses } = useSelector((state) => state.quiz);
  const currentQuestion = questions[currentQuestionIndex];

  const handleSaveNext = (option) => {
    dispatch(saveAnswer({ questionId: currentQuestion.id, answer: option }));
  };

  const handleReviewNext = (option) => {
    dispatch(markForReview({ questionId: currentQuestion.id, answer: option }));
  };

  const handlePrevious = () => {
    dispatch(previousQuestion());
  };

  const handleSubmit = () => {
    dispatch(submitQuiz());
  };

  return (
    <div className="p-6 border rounded shadow-lg">
      <h2 className="text-xl font-bold">{currentQuestionIndex + 1}. {currentQuestion.question}</h2>
      
      <ul className="mt-4">
        {currentQuestion.options.map((option, index) => (
          <li key={index} className="p-2 border rounded cursor-pointer hover:bg-blue-200"
            onClick={() => handleSaveNext(option)}>
            {option}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex gap-2">
        {currentQuestionIndex > 0 && (
          <button onClick={handlePrevious} className="p-2 bg-gray-400 text-white rounded">Previous</button>
        )}

        <button onClick={() => handleSaveNext()} className="p-2 bg-blue-500 text-white rounded">Save & Next</button>

        <button onClick={() => handleReviewNext()} className="p-2 bg-yellow-500 text-white rounded">Mark Review & Next</button>

        {currentQuestionIndex === questions.length - 1 && (
          <button onClick={handleSubmit} className="p-2 bg-green-500 text-white rounded">Submit</button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
```

---

## **Step 5: Define Questions Data**
Create `/data/questions.js`:

```javascript
export const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: "Paris",
  },
  {
    id: 2,
    question: "Which language is used for web development?",
    options: ["Python", "C++", "JavaScript", "Swift"],
    answer: "JavaScript",
  },
  {
    id: 3,
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
];
```

---

## **Step 6: Setup Routing**
Modify `App.jsx`:

```javascript
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quiz from "./components/Quiz";

function App() {
  return (
    <Router>
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Quiz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
```

---

## **Step 7: Run the App**
```sh
npm run dev
```

---

### **Final Features Implemented**
✅ **Save & Next**: Saves the answer and moves to the next question.  
✅ **Mark for Review & Next**: Marks the question for later review and moves forward.  
✅ **Previous Question**: Allows navigation to the previous question.  
✅ **Submit**: Submits the test and stores answers in Redux.  

Would you like additional features like a timer or user authentication? 🚀
