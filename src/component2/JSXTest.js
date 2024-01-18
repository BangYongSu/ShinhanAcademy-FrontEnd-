import React, { Fragment } from "react";

function MyComponentA(props) {
    var score = 100;
    var a = null;
    var b = false; //boolean은 true 또는 false여도 그 문자가 그대로 출력되지는 않는다.
    //var b = 10 > 1 ? "크다" : "작다";
    var c = undefined;

    console.log(true && "hello"); // hello
    console.log(false && "hello"); // false
    console.log("hello" && "bye"); // bye
    console.log(null && "hello"); // null
    console.log(undefined && "hello"); //undefined
    console.log("" && "hello"); // ''
    console.log(0 && "hello"); // 0
    console.log(1 && "hello"); // hello

    //환경변수 읽기
    console.log("public경로 : " + process.env.PUBLIC_URL); //경로 default는 공백임
    console.log("MYNAME : " + process.env.REACT_APP_MYNAME);
    console.log("MY_EMAIL : " + process.env.REACT_APP_MY_EMAIL);
    console.log("REACT_APP으로 시작 안함 : " + process.env.MY_ADDRESS);
    console.log("REACT_APP_ENV_TEST : " + process.env.REACT_APP_ENV_TEST);

    return (
        <Fragment>
            <h1>JSX문법 익히기</h1>
            <div>
                <p>1.Root는 1개여야 한다.</p>
                <p>2.자바스크립트 표현식 점수는={score}</p>
                <p>3.빈 tag == Fragment</p>
                <p>4.3항연산자: {score >= 90 ? <b>합격</b> : <b>불합격</b>}</p>
                <p>5.조건부랜더링: {score >= 90 && "합격"}</p>
                <p>6. 주석{/* !!!!!!!!!!!!!!!!! */}</p>
                <p>
                    7.null, false, undefined: {a} {b} {c}{" "}
                </p>
            </div>
        </Fragment>
    );
}

export function MyComponentB(props) {
    const hobbyArr = ["농구", "축구", "볼링", "골프", "공부"];
    const hobbyArr2 = hobbyArr.map((hobby, index) => (
        <li key={index}>{hobby}</li>
    ));

    for (let i = 0; i < hobbyArr.length; i++) {
        console.log(hobbyArr[i]);
    }

    function f(item, index) {
        return <li key={index}>{item}</li>;
    }

    const hobbyArr3 = hobbyArr.map(f);

    console.log("hobbyArr2", hobbyArr2);
    return (
        <div>
            <h1>나의 취미</h1>
            <ul>{hobbyArr2}</ul>
            <hr />
            <ul>{hobbyArr3}</ul>
            <hr />
            <ul>{hobbyArr.map(f)}</ul>
            <hr />
            <ul>
                {hobbyArr.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
                {/* 함수 f() 호출 */}
                {f("신한DS", "A100")}
            </ul>
        </div>
    );
}
export const ConstTest = 100;
export var VarTest = 200;
export function FuncTest1() {
    return <p>funcTest1</p>;
}
export function FuncTest2() {
    return <p>funcTest2</p>;
}
export const FuncTest3 = () => {
    return <p>funcTest3</p>;
};

export default MyComponentA;
