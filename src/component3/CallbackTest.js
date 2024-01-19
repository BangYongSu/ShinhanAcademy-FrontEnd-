import React, { useEffect, useState } from "react";
import { useCallback } from "react";
const CallbackTest = () => {
    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(true);

    //useCallback() 처리 안함 : rendering시 마다 함수를 만든다.
    /* const upHandler = () => {setCount(count + 1); }; /
    
    //최초한번만 함수를 만듦
    / const upHandler = useCallback(() => {
    setCount(count + 1);
    }, []); */
 
    //count가 변경시에는 함수 다시 만들고 다른 상태값 변경시에는 저장된 함수를 재사용
    const upHandler = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    useEffect(() => {
        console.log("upHandler가 변경됨");
    }, [upHandler]);
    
    return (
        <div>
            <p>count:{count}</p>
            <button onClick={upHandler}>증가</button>
            <button onClick={() => setToggle(!toggle)}>
                {toggle.toString()}
            </button>
        </div>
    );
};
export default CallbackTest;
