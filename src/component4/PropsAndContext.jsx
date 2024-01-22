import React, { useContext, useState } from "react";

function PropsAndContext(props) {
    const [count, setCount] = useState(0);
    const inlineStyle = {
        border: "1px solid red",
        margin: "10px",
    };
    return (
        <div style={inlineStyle}>
            <Left1 count={count}></Left1>
            <Right1 setCount={setCount} count={count}></Right1>
        </div>
    );
}

function Right1({ setCount, count }) {
    return (
        <div>
            <h1>Right1</h1>
            <Right2 setCount={setCount} count={count}></Right2>
        </div>
    );
}

function Right2({ setCount, count }) {
    return (
        <div>
            <h1>Right2</h1>
            <Right3 setCount={setCount} count={count}></Right3>
        </div>
    );
}

function Right3({ setCount, count }) {
    return (
        <div>
            <h1>Right3</h1>
            <button onClick={() => setCount(count + 1)}>증가</button>
        </div>
    );
}

function Left1({ count }) {
    return (
        <div>
            <h1>Left1</h1>
            <Left2 count={count}></Left2>
        </div>
    );
}

function Left2({ count }) {
    return (
        <div>
            <h1>Left2</h1>
            <Left3 count={count}></Left3>
        </div>
    );
}

function Left3({ count }) {
    return (
        <div>
            <h1>Left3</h1>
            <p>count: {count}</p>
        </div>
    );
}

export default PropsAndContext;
