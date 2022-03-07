import React from "react";
import {
  questionsMenuOne,
  questionsMenuTwo,
  questionsMenuThree,
} from "../../../constants";

const Questions = () => {
  return (
    <div className="QuestionsMenuFlex">
      <ul className="QuestionsMenu">
        {questionsMenuOne.map(({ question }, idx) => (
          <li className="QuestionMenuItems" key={idx}>
            <a className="QuestionMenuLinks" href="/">
              {question}
            </a>
          </li>
        ))}
      </ul>
      <ul>
        {questionsMenuTwo.map(({ question }, idx) => (
          <li className="QuestionMenuItems" key={idx}>
            <a className="QuestionMenuLinks" href="/">
              {question}
            </a>
          </li>
        ))}
      </ul>
      <ul>
        {questionsMenuThree.map(({ question }, idx) => (
          <li className="QuestionMenuItems" key={idx}>
            <a className="QuestionMenuLinks" href="/">
              {question}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Questions;
