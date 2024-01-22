import React, { createContext, useContext, useState } from "react";

//전역 영역 생성
export const CounterContext = createContext();

//전역 영역의 Context 제공
export const CounterProvider = (props) => {
    const [count, setCount] = useState(0);
    const addHandler = () => setCount(count + 1);
    const minusHandler = () => setCount(count - 1);
    const [username, setUsername] = useState("");
    const [mystyle, setMystyle] = useState({
        border: "3px solid green",
        color: "red",
    });

    return (
        <div>
            <CounterContext.Provider
                value={{
                    count: count,
                    addHandler,
                    minusHandler,
                    username,
                    mystyle,
                    setUsername,
                    setMystyle,
                }}
            >
                {props.children}
            </CounterContext.Provider>
        </div>
    );
};

function CounterContextManagement(props) {
    return (
        <div>
            <CounterProvider>
                <CountLabel></CountLabel>
                <PlusButton></PlusButton>
                <NameChange></NameChange>
            </CounterProvider>
        </div>
    );
}

export function CountLabel(props) {
    const { count, username } = useContext(CounterContext);
    return (
        <div>
            <h1>CountLabel Component</h1>
            <p>count: {count}</p>
            <p>name: {username}</p>
        </div>
    );
}

export function PlusButton(props) {
    const { addHandler } = useContext(CounterContext);
    return (
        <div>
            <h1>PlusButton Component</h1>
            <button onClick={addHandler}>(+)클릭</button>
        </div>
    );
}

export function NameChange(props) {
    const { setUsername, username } = useContext(CounterContext);
    return (
        <div>
            <h1>NameChange Component</h1>
            <p>username: {username}</p>
            <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
            ></input>
        </div>
    );
}

export default CounterContextManagement;
