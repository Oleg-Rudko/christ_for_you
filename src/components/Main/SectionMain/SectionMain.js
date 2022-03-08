import React from "react";
import Title from "./Title/Title";
import Questions from "./QuestionsMenu/Questions";
import CallBack from "./CallBack/CallBack";

const SectionMain = () => {
  return (
    <section className="SectionAbout">
      <div className="SectionContainerQuestions">
        <Title />
        <Questions />
        <CallBack />
      </div>
    </section>
  );
};
export default SectionMain;
