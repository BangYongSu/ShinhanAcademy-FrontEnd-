import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
    ConstTest,
    VarTest,
} from "component2/JSXTest";
import StateTest from "component2/StateTest";

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("상수" + ConstTest);
console.log("변수" + VarTest);

const hobbyArr = ["축구","게임","공부","골프"];

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
        <YourComponent2 myname="은경" myage={30} hobby={hobbyArr}>함수 class로 만들기</YourComponent2>*/}
        <StateTest></StateTest>
    </>
);

reportWebVitals();
