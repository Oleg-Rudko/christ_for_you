import React from "react";
import Questions from "./QuestionsMenu/Questions";
import Title from "./Title/Title";

const Main = () => {
  return (
    <section className="Section">
      <div className="SectionContainer">
        <Title />
        <Questions />
      </div>
    </section>
  );
};

export default Main;
