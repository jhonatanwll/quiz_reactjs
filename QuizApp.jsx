import { useContext } from "react";
import { QuizProvider } from "./context/quiz";
import App from "./App";
import "./index.css"; // Você pode renomear para QuizApp.css para evitar conflitos

// Componente principal que encapsula todo o aplicativo Quiz
const QuizApp = () => {
  return (
    <div className="quiz-app-wrapper">
      <QuizProvider>
        <App />
      </QuizProvider>
    </div>
  );
};

export default QuizApp;
