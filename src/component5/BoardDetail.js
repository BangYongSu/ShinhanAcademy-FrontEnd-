import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";

function BoardDetail(props) {
    const { bno } = useParams(); //주소창에서 parameter bno 를 추출한다. //route 등록된 것을 확인해야함. =>> <Route path="/detail/:bno" element={<BoardDetail />}></Route>
    const [board, setBoard] = useState({});
    const navi = useNavigate();

    const changeHandler = useCallback(
        (e) => {
            setBoard({ ...board, [e.target.name]: e.target.value });
        },
        [board]
    );

    const handleSubmit = (e) => {
        e.preventDefault(); //Form의 input들을 가지고 action을 수행하는게 form인데, 이것을 막는 함수.
        axios({
            method: "put",
            url: "/rest/webboard/update.do",
            data: board,
        })
            .then((res) => {
                console.log(res.data === 0 ? "수정 성공" : "수정 실패");
                navi("/board/list");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        //board가 바뀌면(rendering 중인 것도 board가 바뀌는거니 console이 찍힘)
        console.log("board change");
        console.log(board);
    }, [board]);

    useEffect(() => {
        axios({
            method: "get",
            url: `/rest/webboard/detail.do/${bno}`,
        })
            .then((res) => {
                console.log(res);
                setBoard(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [bno]);

    return (
        <div>
            <BoardDetailDisplay
                board={board}
                changeHandler={changeHandler}
                handleSubmit={handleSubmit}
            >
                <h1>Board Detail @@@: {bno}</h1>
            </BoardDetailDisplay>
        </div>
    );
}

function BoardDetailDisplay({ board, children, changeHandler, handleSubmit }) {
    return (
        <div>
            {children}
            {board && (
                <Form onSubmit={handleSubmit}>
                    <Form.Group as={Row} className="mb-3" controlId="bno">
                        <Form.Label column sm="2">
                            게시글 번호
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                defaultValue={board.bno || ""}
                                name="bno"
                                plaintext
                                //readOnly
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="title">
                        <Form.Label column sm="2">
                            제목
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                value={board.title || ""}
                                name="title"
                                onChange={changeHandler}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="content">
                        <Form.Label column sm="2">
                            내용
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                value={board.content || ""}
                                name="content"
                                onChange={changeHandler}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="writer">
                        <Form.Label column sm="2">
                            작성자
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                value={board.writer || ""}
                                name="writer"
                                onChange={changeHandler}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="regdate">
                        <Form.Label column sm="2">
                            등록일
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                defaultValue={board.regdate || ""}
                                name="regdate"
                                plaintext
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group
                        as={Row}
                        className="mb-3"
                        controlId="updatedate"
                    >
                        <Form.Label column sm="2">
                            수정일
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                defaultValue={board.updatedate || ""}
                                name="updatedate"
                                plaintext
                            />
                        </Col>
                    </Form.Group>
                    <input
                        className="btn btn-primary"
                        type="submit"
                        value="저장"
                    />{" "}
                    <Link to="/board/delete" state={{bno:board.bno}}>
                        <Button type="button" variant="danger">
                            삭제
                        </Button>
                    </Link>
                </Form>
            )}
        </div>
    );
}

export default BoardDetail;
