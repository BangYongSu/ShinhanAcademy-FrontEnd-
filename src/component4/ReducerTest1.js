import React, { useReducer, useState } from "react";

//직접 상태관리 : useState()
//분리된 상태관리 : useReducer();

//state: 상태값을 관리(현재 상태를 받아서 다음 상태로 변경하고자 한다.)
//action: type에 따라 동작을 결정
function reducer(state, action) {
    switch (action.type) {
        case "PLUS":
            return state + 1;
        case "MINUS":
            return state - 1;
        default:
            return state;
    }
}

function Counter1(props) {
    const [su, dispatch] = useReducer(reducer, 0);
    const plusHandler = () => dispatch({type:"PLUS"});
    const minusHandler = () => dispatch({type:"MINUS"});

    return (
        <div>
            <h1>useState 이용하기</h1>
            <p>현재값 : {su}</p>
            <button onClick={plusHandler}>더하기</button>
            <button onClick={minusHandler}>빼기</button>
        </div>
    );
}

export default Counter1;
