import CallbackTest from "component3/CallbackTest";
import LifeCycleClassComponent from "component3/LifeCycleClassComponent";
import LifeCycleFunctionComponent from "component3/LifeCycleFunctionComponent";
import MemoTest from "component3/MemoTest";
import { MyTimer } from "component3/MyTimer";
import SmartHome from "component3/SmartHome";
import StateClassComponent from "component3/StateClassComponent";
import StateFunctionComponent from "component3/StateFunctionComponent";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";

function Day4HOME(props) {
    return (
        <Routes>
            <Route path="/" element={<Day4HOMEComp />} />
            <Route path="/timer" element={<MyTimer />} />
            <Route path="/reactmemo" element={<SmartHome />} />
            <Route path="/usecallback" element={<CallbackTest />} />
            <Route path="/usememo" element={<MemoTest />} />
            <Route path="/lifeclass" element={<LifeCycleClassComponent />} />
            <Route path="/useeffect" element={<LifeCycleFunctionComponent />} />
            <Route path="/setstate" element={<StateClassComponent />} />
            <Route path="/usestate" element={<StateFunctionComponent />} />
        </Routes>
    );
}

const Day4HOMEComp = () => {
    return (
        <div>
            <h1>Day4에서 배운 내용</h1>
            <ul>
                <li>
                    <Link to="/day4/timer">타이머</Link>
                </li>
                <li>
                    <Link to="/day4/usememo">data memo</Link>
                </li>
                <li>
                    <Link to="/day4/usecallback">function memo</Link>
                </li>
                <li>
                    <Link to="/day4/reactmemo">component memo</Link>
                </li>
                <li>
                    <Link to="/day4/lifeclass">class lifecycle</Link>
                </li>
                <li>
                    <Link to="/day4/useeffect">function lifecycle</Link>
                </li>
                <li>
                    <Link to="/day4/setstate">class 상태관리</Link>
                </li>
                <li>
                    <Link to="/day4/usestate">function 상태관리</Link>
                </li>
            </ul>
        </div>
    );
};

export default Day4HOME;
