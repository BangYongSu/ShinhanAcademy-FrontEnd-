import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import BoardProps from "component4/BoardPropsReducer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter1 from "component4/ReducerTest1";
import { BoardContextManagement } from "component4/BoardContextManagement";
import CounterContextManagement from "component4/CounterContextManagement";
import { ProviderTest } from "component4/ProviderTest";
import PropsAndContext from "component4/PropsAndContext";
import { PropsAndContext2 } from "component4/PropsAndContext2";
import Day4HOME from "component4/Day4HOME";

const root = ReactDOM.createRoot(document.getElementById("root"));
//console.log("상수" + ConstTest);
//console.log("변수" + VarTest);

//const hobbyArr = ["축구","게임","공부","골프"];

root.render(
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/reducer1" element={<Counter1 />} />
                <Route path="/reducer2" element={<BoardProps />} />
                <Route
                    path="/boardcontext"
                    element={<BoardContextManagement />}
                />
                <Route
                    path="/countcontext"
                    element={<CounterContextManagement />}
                />
                <Route path="/provider" element={<ProviderTest />} />
                <Route
                    path="/props"
                    element={
                        <>
                            <PropsAndContext />
                            <PropsAndContext2 />
                        </>
                    }
                />
                <Route path="/day4/*" element={<Day4HOME />} />
            </Routes>
        </BrowserRouter>
        {/* <MyComponentA></MyComponentA>
        <MyComponentB></MyComponentB>
        <FuncTest1></FuncTest1>
        <FuncTest2></FuncTest2>
        <FuncTest3></FuncTest3>
        <App /> 
        <MyComponentC />
        <MyComponentD />
        <YourComponent1 myname="은경" myage={30} hobby={hobbyArr}>함수 Component로 만들기</YourComponent1>
        <YourComponent2 myname="은경" myage={30} hobby={hobbyArr}>함수 class로 만들기</YourComponent2>
        <StateTest></StateTest>
        <StateClassComponent></StateClassComponent>
        <StateFunctionComponent></StateFunctionComponent>
        <FunctionComponent1></FunctionComponent1>
        <FunctionComponent2></FunctionComponent2>
        <FunctionComponent3></FunctionComponent3>
        <LifeCycleFunctionComponent></LifeCycleFunctionComponent>
        <MemoTest></MemoTest>
        <CallbackTest></CallbackTest>
        <SmartHome></SmartHome>
        <BoardProps></BoardProps>
        <BoardContextManagement></BoardContextManagement>
        <CounterContextManagement></CounterContextManagement>
        <BoardContextManagememt2 />
        <ProviderTest />
        <PropsAndContext></PropsAndContext>
        <PropsAndContext2></PropsAndContext2>
        <Counter1></Counter1>
        <BoardProps></BoardProps>*/}
    </>
);

reportWebVitals();
