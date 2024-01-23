import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import BoardList from "./BoardList";
import { Button } from "react-bootstrap";
import BoardInsert from "./BoardInsert";
import BoardDetail from "./BoardDetail";
import BoardDelete from "./BoardDelete";

function BoardHOME(props) {
    return (
        <div>
            <h1>Board 작업들</h1>
            <ul>
                <li>
                    <Link to="list">{/* 상대경로 */}
                        <Button variant="success">조회</Button>
                    </Link>{" "}
                    <Link to="insert">{/* 상대경로 */}
                        <Button variant="success">입력</Button>
                    </Link>{" "}
                </li>
            </ul>
            <Routes>
                <Route path="/list" element={<BoardList />}></Route>
                <Route path="/insert" element={<BoardInsert />}></Route>
                <Route path="/detail/:bno" element={<BoardDetail />}></Route>
                <Route path="/delete" element={<BoardDelete />}></Route>
            </Routes>
        </div>
    );
}

export default BoardHOME;
