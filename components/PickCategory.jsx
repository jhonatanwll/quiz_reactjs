import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Category from "../img/category.svg";

import "../styles/PickCategory.css";

const PickCategory = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  const chooseCategoryAndReorderQuestions = (category) => {
    dispatch({ type: "START_GAME", payload: category });

    dispatch({ type: "REORDER_QUESTIONS" });
  };

  return (
    <div id="category">
      <h2>Escolha uma categoria</h2>
      <p>As perguntas serão referentes a uma das linguagens abaixo:</p>
      <div>
        {quizState.questions.map((questions) => (
          <button
            onClick={() =>
              chooseCategoryAndReorderQuestions(questions.category)
            }
            key={questions.category}
          >
            {questions.category}
          </button>
        ))}{" "}
      </div>
      <img src={Category} alt="Categorias do Quiz" />
    </div>
  );
};

export default PickCategory;
