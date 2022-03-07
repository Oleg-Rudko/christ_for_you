import React from "react";
import { questionsMenuOne } from "../../ConstantsForQuestionsMenu/QuestionsMenuOne";
// import { questionsMenuTwo } from "../../ConstantsForQuestionsMenu/QuestionsMenuTwo";
// import { questionsMenuThree } from "../../ConstantsForQuestionsMenu/QuestionsMenuThree";

const Questions = () => {
  return (
    <div className="QuestionsMenuFlex">
      <ul className="QuestionsMenu">
        <li>
          {questionsMenuOne.map((el) => (
            <a>{el.question}</a>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default Questions;
