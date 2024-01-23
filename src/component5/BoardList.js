import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function BoardList(props) {
    const [boardList, setBoardList] = useState([]);

    //lifecycle 관리 : 최초 rendering 시 1회만 하고자 한다.
    useEffect(() => {
        axios({
            method: "get",
            url: "/rest/webboard/list.do",
        })
            .then((response) => {
                console.log(response.data);
                setBoardList(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <h1>Board 목록</h1>
            <BoardDisplay boardList={boardList} />
        </div>
    );
}

function BoardDisplay({ boardList }) {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>bno</th>
                    <th>title</th>
                    <th>content</th>
                    <th>writer</th>
                    <th>등록일</th>
                    <th>수정일</th>
                </tr>
            </thead>
            <tbody>
                {boardList &&
                    boardList.map((board, index) => (
                        <tr key={`id${index}`}>
                            <td>
                                <Link to={`/board/detail/${board.bno}`}>
                                    {board.bno}
                                </Link>
                            </td>
                            <td>{board.title}</td>
                            <td>{board.content}</td>
                            <td>{board.writer}</td>
                            <td>{board.regdate}</td>
                            <td>{board.updatedate}</td>
                        </tr>
                    ))}
            </tbody>
        </Table>
    );
}

export default BoardList;
