const { useState, useEffect } = require("react");

export const MyTimer = () => {
    const [currentTime, setCurrentTime] = useState("00:00:00");
    const now = () => {
        const date = new Date();
        const h = String(date.getHours()).padStart(2, "0");
        const m = String(date.getMinutes()).padStart(2, "0");
        const s = String(date.getSeconds()).padStart(2, "0");
        setCurrentTime(`${h}:${m}:${s}`);
        console.log("타이머실행");
    };
    useEffect(() => {
        const timer = setTimeout(now, 1000); //1초 후에 1번 now함수를 수행한다.
        return () => {
            clearTimeout(timer);
        };
    }, [currentTime]);
    return (
        <div>
            <p>{currentTime}</p>
        </div>
    );
};
