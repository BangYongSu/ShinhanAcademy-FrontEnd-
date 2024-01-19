import React, { useState } from "react";
import { useMemo } from "react";
const MemoTest = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const increment = () => {
        setCount((c) => c + 1);
    };
    const addTodo = () => {
        setTodos((t) => [...t, "NewTodo"]);
    };
    const expensiveCalculation = (num) => {
        console.log("Calculating...");
        for (let i = 0; i < 1000000000; i++) {
            num += 1;
        }
        return num;
    };

    //1.렌더링할때마다오래걸리는작업이수행된다.....
    //const calculation = expensiveCalculation(count);
    //2.count가변경시에만수행한다.
    //const calculation = useMemo(() => expensiveCalculation(count), [count]);  //값을 저장한다.

    //의존 배열에 지정한 변수의 값이 변경되지 않으면 기억했던 값을 그대로 사용한다. (재호출하지 않는다.)
    const calculation = useMemo(() => expensiveCalculation(count),[count]);

    return (
        <div>
            <div>
                <hr />
                <h2>MyTodos</h2>
                {todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>;
                })}
                <button className="btn btn-danger" onClick={addTodo}>
                    AddTodo
                </button>
            </div>
            <div>
                Count:{count}
                <button className="btn btn-success" onClick={increment}>
                    +
                </button>
                <h2>ExpensiveCalculation:{calculation}</h2>
            </div>
        </div>
    );
};
export default MemoTest;
