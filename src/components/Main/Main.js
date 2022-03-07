import React from "react";
import Questions from "./QuestionsMenu/Questions";
import Title from "./Title/Title";
import CallBack from "./CallBack/CallBack";

const Main = () => {
  return (
    <section className="Section">
      <div className="SectionContainer">
        <Title />
        <Questions />
        <CallBack />
      </div>
    </section>
  );
};

export default Main;
