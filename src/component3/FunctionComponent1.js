import React, { useState } from "react";
import { Button, Form, InputGroup, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function FunctionComponent1(props) {
    const [color, setColor] = useState("red");
    const [message, setMessage] = useState("state관리 연습");
    const [mystyle, setMystyle] = useState({
        color: "blue",
        border: "1px solid red",
    });

    const handleColorChange = (arg) => {
        let selectColor = arg.target.innerHTML;
        setColor(selectColor);
        setMystyle({ color: selectColor, border: `1px solid ${selectColor}` });
    };
    return (
        <div>
            <button onClick={handleColorChange}>RED</button>{" "}
            <button onClick={handleColorChange}>GREEN</button>{" "}
            <button onClick={handleColorChange}>BLUE</button>{" "}
            <h1 style={{ color }}>{message}</h1>
            <h1 style={mystyle}>{message}</h1>
        </div>
    );
}

function FunctionComponent2(props) {
    const [member, setMember] = useState({ name: "아무개", age: 30 });
    const inputChange = (e) => {
        //스프레드 연산자
        let aa = e.target.name;
        setMember({ ...member, [aa]: e.target.value });
    };

    // for(let pro in window) {
    //     console.log(window[pro]); //변수를 쓸때는 [변수]
    //     console.log(window.pro); //window.pro라는 속성이 없어서 'FunctionComponent1.js:39 undefined' 가 나온다
    // }

    return (
        <div>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">이름</InputGroup.Text>
                <Form.Control
                    placeholder="이름을 입력하세요."
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={inputChange}
                    name="name"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">나이</InputGroup.Text>
                <Form.Control
                    placeholder="나이를 입력하세요."
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={inputChange}
                    name="age"
                />
            </InputGroup>
            <h1>
                입력정보 ===&gt; 이름:{member.name},나이:{member.age}
            </h1>
        </div>
    );
}

function FunctionComponent3(props) {
    const [userName, setuserName] = useState("보현");
    const [sendMessage, setSendMessage] = useState("빨리와");
    const initMemo = { username: userName, message: sendMessage };
    const [memo, setMemo] = useState(initMemo);
    const [memoList, setMemoList] = useState([
        memo,
        { username: "정우", message: "화이팅!!" },
    ]);

    const clearListener = () => {
        setSendMessage("");
        setuserName("");
    };

    const inputChangeHandler = (e) => {
        if (e.target.name === "username") {
            setuserName(e.target.value);
        } else if (e.target.name === "message") {
            setSendMessage(e.target.value);
        }
        setMemo({ ...memo, [e.target.name]: e.target.value }); //비동기처리
        console.log(memo); //변경된 값이 아님 //set 이전값이 출력된다.
    };

    const memoAdd = () => {
        setMemoList([...memoList, memo]); //비동기처리
        console.log(memoList); //setMemoList 이전 값이 출력된다. (set보다 출력이 먼저 수행된다.)
    };

    const arr = [1, 2, 3, 4];
    const arr2 = [10, 20, 30, 40];
    const arr3 = [...arr, ...arr2]; //1차원 요소들 합치기 [1,2,3,4,10,20,30,40]
    const arr4 = [arr, arr2]; //2차원 배열 [[1,2,3,4][10,20,30,40]]

    return (
        <div>
            <h2>이름은 {userName}</h2>
            <h2>메시지는 {sendMessage}</h2>
            이름은{" "}
            <input
                type="text"
                placeholder="이름입력"
                value={userName}
                onChange={inputChangeHandler}
                name="username"
            ></input>
            메세지는
            <input
                type="text"
                placeholder="message입력"
                value={sendMessage}
                onChange={inputChangeHandler}
                name="message"
            ></input>
            <Button variant="success" onClick={memoAdd}>
                메세지담기
            </Button>
            <Button variant="success" onClick={clearListener}>
                지우기
            </Button>
            <hr />
            memo...{memo.username}.....{memo.message}
            <hr />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>메세지</th>
                    </tr>
                </thead>
                <tbody>
                    {memoList.map((item, index) => (
                        <tr key={index}>
                            <td>{item.username}</td>
                            <td>{item.message}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export {
    FunctionComponent1 as default,
    FunctionComponent2,
    FunctionComponent3,
};
