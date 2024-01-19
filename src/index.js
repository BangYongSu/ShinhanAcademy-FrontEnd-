import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import SmartHome from "component3/SmartHome";

const root = ReactDOM.createRoot(document.getElementById("root"));
//console.log("상수" + ConstTest);
//console.log("변수" + VarTest);

//const hobbyArr = ["축구","게임","공부","골프"];

root.render(
    <>
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
        <CallbackTest></CallbackTest>*/}
        <SmartHome></SmartHome>
    </>
);

reportWebVitals();
