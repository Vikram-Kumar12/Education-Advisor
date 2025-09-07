import React from "react";
import ExploreStreams from "../components/QuizPage/ExploreStreams";
import QuizIntroduction from "../components/QuizPage/QuizIntroduction";
import QuizQuestion from "../components/QuizPage/QuizQuestion";
import QuizResults from "../components/QuizPage/QuizResults";
import LearningResources from "../components/LearningResouces";


const QuizePage = () => {
  return (
    <div className="w-full flex flex-col">
      <QuizIntroduction/>
      {/* <ExploreStreams /> */}
      {/* <QuizResults/> */}
      {/* <LearningResources/> */}
      {/* <Dashboard/> */}
    </div>
  );
};

export default QuizePage;

/*
Make my next component that is Dashboard, based on same UI, balck and orange okay.
In my dashboard, I want side navbar :
  In side navbar my items is:
    Dashboard
    Quiz
    Courses
    Collegse
    Timeline
    Resources
    Settings
In top navbar, its left side is website logo and name and right side is user profile okay.

Ab jab user sidename pr koi itmes par click karega uske according uska items show karwayneg. I provide a refrence image okay.
*/
