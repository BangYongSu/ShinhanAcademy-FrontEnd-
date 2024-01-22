import React, { useCallback, useEffect, useReducer, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, InputGroup, Table } from "react-bootstrap";

const emptyBoard = {
    bno: 0,
    title: "",
    content: "",
    writer: "",
    active: false,
};
const initBoard = {
    board: emptyBoard,
    boardList: [
        {
            bno: 1,
            title: "월요일",
            content: "힘들어😢",
            writer: "유은경",
            active: false,
        },
    ],
};

//업무로직 =>> 상태관리 함
function boardReducer(state, action) {
    switch (action.type) {
        case "INPUT":
            return {
                ...state,
                board: { ...state.board, [action.name]: action.value },
            };
        case "ADD":
            return {
                ...state,
                board: emptyBoard,
                boardList: state.boardList.concat(action.board),
                //boardList:[...boardList, action.board] //방법2
            };
        case "DEL":
            return {
                ...state,
                boardList: state.boardList.filter((b) => b.bno !== action.bno),
            };
        case "UPDATE":
            return {
                ...state,
                boardList: state.boardList.map((b) =>
                    b.bno === action.bno ? { ...b, active: !b.active } : b
                ),
            };
        default:
            return state;
    }
}

function BoardProps(props) {
    let nextBno = useRef(2); //rendering 시에 다시 초기화하지 않음. 값 유지
    
    const [state, dispatcher] = useReducer(boardReducer, initBoard);
    const {board, boardList} = state;

    const changeHandler = (e) => {
        dispatcher({type:"INPUT", name:[e.target.name], value:e.target.value});
    };
    const addHandler = () => {
        if (board.title === "" || board.content === "" || board.writer === "")
            return;
        const newBoard = { ...board, bno: nextBno.current };
        dispatcher({type:"ADD", board: newBoard});
        nextBno.current++;
    };

    const delHandler = (bno) => {
        dispatcher({type:"DEL", bno});
    };

    const updateHandler = (bno) => {
        dispatcher({type:"UPDATE", bno});
    };

    return (
        <div>
            <InputBoard
                changeHandler2={changeHandler}
                addHandler={addHandler}
                board={board}
            ></InputBoard>
            <DisplayBoard
                boardList={boardList}
                delHandler={delHandler}
                updateHandler={updateHandler}
            ></DisplayBoard>
        </div>
    );
}

export function InputBoard({ changeHandler2, addHandler, board }) {
    return (
        <div>
            <h1>Board Reducer 이용하기</h1>
            <InputGroup className="mb-3">
                <InputGroup.Text id="a">Default</InputGroup.Text>
                <Form.Control
                    aria-label="title입니다."
                    name="title"
                    onChange={changeHandler2}
                    value={board.title}
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="b">content</InputGroup.Text>
                <Form.Control
                    aria-label="content입니다."
                    name="content"
                    onChange={changeHandler2}
                    value={board.content}
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="c">writer</InputGroup.Text>
                <Form.Control
                    aria-label="writer입니다."
                    name="writer"
                    onChange={changeHandler2}
                    value={board.writer}
                />
            </InputGroup>
            <MyButton addHandler={addHandler}>ADD(+)</MyButton>
        </div>
    );
}
function MyButton({ addHandler, children }) {
    return (
        <Button variant="success" onClick={addHandler}>
            {children}
        </Button>
    );
}

export function DisplayBoard({ boardList, delHandler, updateHandler }) {
    return (
        <Table striped bordered hover style={{ verticalAlign: "middle" }}>
            <thead>
                <tr>
                    <th>bno</th>
                    <th>title</th>
                    <th>content</th>
                    <th>writer</th>
                    <th>active</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {boardList &&
                    boardList.map((board, seq) => (
                        <tr key={seq}>
                            <td>{board.bno}</td>
                            <td
                                style={{
                                    color: board.active ? "red" : "black",
                                }}
                            >
                                {board.title}
                            </td>
                            <td>{board.content}</td>
                            <td>{board.writer}</td>
                            <td>{board.active.toString()}</td>
                            <td>
                                <Button
                                    variant="danger"
                                    onClick={() => delHandler(board.bno)}
                                >
                                    DEL
                                </Button>{" "}
                                <Button
                                    variant="info"
                                    onClick={() => updateHandler(board.bno)}
                                >
                                    UPDATE
                                </Button>{" "}
                            </td>
                        </tr>
                    ))}
            </tbody>
        </Table>
    );
}

export default BoardProps;
