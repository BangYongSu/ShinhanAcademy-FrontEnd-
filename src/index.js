import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import MyCar from "./component1/MyCar";
import ComponentTest from "./component1/ComponentTest";
import MyComponentA, {
    MyComponentB,
    ConstTest,
    VarTest,
    FuncTest1,
    FuncTest2,
    FuncTest3,
} from "component2/JSXTest";
import MyComponentC from "component2/CSSTest";
import MyComponentD from "component2/PropsTest";

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("상수" + ConstTest);
console.log("변수" + VarTest);

root.render(
    <>
        {/* <MyComponentA></MyComponentA>
        <MyComponentB></MyComponentB>
        <FuncTest1></FuncTest1>
        <FuncTest2></FuncTest2>
        <FuncTest3></FuncTest3>
        <App /> 
        <MyComponentC />*/}
        <MyComponentD />
    </>
);

reportWebVitals();
