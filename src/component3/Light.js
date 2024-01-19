import React from "react";

const Light = ({ room, on }) => {
    console.log(room, on);
    return <div>{on ? "💡" : "⬛"}</div>;
};

// 상기 코드는 props를 바로 변수 처리 해줌.
// const Light = (props) => {
//     var { room, on } = props;
//     console.log(room, on);
//     return <div>{on ? "💡" : "⬛"}</div>;
// };

//export default Light;
export default React.memo(Light); //내것만 수행