import React from "react";
import HomePage from "../pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Authentication/Login";
import Register from "../components/Authentication/Register";
import QuizePage from "../pages/QuizePage";
import QuizQuestion from "../components/QuizPage/QuizQuestion";
import ShapeIt from "../components/QuizPage/ShapeIt";
import QuizResults from "../components/QuizPage/QuizResults";
import ScienceStream from "../components/QuizPage/ScienceStream";
import CommerceStream from "../components/QuizPage/CommerceStream";
import ArtsStream from "../components/QuizPage/ArtsStream";
import VocationalStream from "../components/QuizPage/VocationalStream";
import DashboardPage from "../pages/DashboardPage";





const ReactRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Register/>}/>


       
        <Route path="/quize" element={<QuizePage />} />
        <Route path="/start-quize" element={<QuizQuestion />} />
        <Route path="/shape-it" element={<ShapeIt />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/quize-result" element={<QuizResults />} />
        <Route path="/science-stream" element={<ScienceStream />} />
        <Route path="/commerce-stream" element={<CommerceStream />} />
        <Route path="/arts-stream" element={<ArtsStream />} />
        <Route path="/vocational-stream" element={<VocationalStream />} />

        
   
           </Routes>
  
    </>
  );
};

export default ReactRouter;
