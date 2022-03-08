import React from "react";
import Title from "./Title/Title";
import Questions from "./QuestionsMenu/Questions";
import CallBack from "./CallBack/CallBack";

const SectionMain = () => {
  return (
    <div>
      <section className="SectionContainer">
        <Title />
        <Questions />
        <CallBack />
      </section>
    </div>
  );
};
export default SectionMain;
