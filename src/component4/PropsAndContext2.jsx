import React, { createContext, useContext, useState } from "react";

export const MyContext2 = createContext();

export const MyProvider2 = (props) => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <MyContext2.Provider value={{ count, setCount }}>
                {props.children}
            </MyContext2.Provider>
        </div>
    );
};

export function PropsAndContext2(props) {
    const inlineStyle = {
        border: "1px solid green",
        margin: "10px",
    };
    return (
        <div style={inlineStyle}>
            <MyProvider2>
                <Left1></Left1>
                <Right1></Right1>
            </MyProvider2>
        </div>
    );
}

function Right1() {
    return (
        <div>
            <h1>Right1</h1>
            <Right2></Right2>
        </div>
    );
}

function Right2() {
    return (
        <div>
            <h1>Right2</h1>
            <Right3></Right3>
        </div>
    );
}

function Right3() {
    const { setCount, count } = useContext(MyContext2);
    return (
        <div>
            <h1>Right3</h1>
            <button onClick={() => setCount(count + 1)}>증가</button>
        </div>
    );
}

function Left1() {
    return (
        <div>
            <h1>Left1</h1>
            <Left2></Left2>
        </div>
    );
}

function Left2() {
    return (
        <div>
            <h1>Left2</h1>
            <Left3></Left3>
        </div>
    );
}

function Left3() {
    const { count } = useContext(MyContext2);
    return (
        <div>
            <h1>Left3</h1>
            <p>count: {count}</p>
        </div>
    );
}
