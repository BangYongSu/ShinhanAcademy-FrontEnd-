import React, { useState } from "react";

function StateFunctionComponent(props) {
    //Top level에서만 Hooks를 사용 가능하다.(일반 함수에서는 불가)
    const [count, setCount] = useState(0);  //count=0;
    const [message, setInfo] = useState("버튼을 누르면 값이 변경... 화면이 자동 변경");  //count=0;
    const plus = () => {
        setCount(count+1);
        setInfo("ADD");
    };

    const btnClick = (event) => {
        let btnText = event.target.innerHTML;
        if(btnText === "+") {
            setCount(count+1);
            setInfo("ADD");
        } else if(btnText === "-") {
            setCount(count-1);
            setInfo("MINUS");
        }
    };

    return (
        <div>
            <h1>StateFunctionComponent 연습</h1>
            <p>
                현재값: {count} 메시지: {message}
            </p>
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={plus}>+</button>
            <button onClick={btnClick}>+</button>
            <button onClick={btnClick}>-</button>
        </div>
    );
}

export default StateFunctionComponent;
