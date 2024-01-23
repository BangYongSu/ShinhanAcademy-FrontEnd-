import axios from "axios";
import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function EmpInsert(props) {
    const [emp, setEmp] = useState({});
    const navi = useNavigate();
    const changeHandler = (e) => {
        setEmp({ ...emp, [e.target.name]: e.target.value });
    };
    const insertHandler = () => {
        axios({
            method: "post",
            url: "/rest/emp/insert",
            data: emp,
        })
            .then((res) => {
                console.log(res.data === 0 ? "입력 성공" : "입력 실패");
                navi("/emp/list");
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div>
            <h1>EMP 입력</h1>
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="employeeId">
                    <Form.Label column sm="2">
                        직원 아이디
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control
                            defaultValue=""
                            name="employeeId"
                            onChange={changeHandler}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="firstName">
                    <Form.Label column sm="2">
                        직원 firstName
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control
                            defaultValue=""
                            name="firstName"
                            onChange={changeHandler}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="lastName">
                    <Form.Label column sm="2">
                        직원 lastName
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control
                            defaultValue=""
                            name="lastName"
                            onChange={changeHandler}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="email">
                    <Form.Label column sm="2">
                        직원 email
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control
                            defaultValue=""
                            name="email"
                            onChange={changeHandler}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="phoneNumber">
                    <Form.Label column sm="2">
                        직원 phoneNumber
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control
                            defaultValue=""
                            name="phoneNumber"
                            onChange={changeHandler}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="hireDate">
                    <Form.Label column sm="2">
                        직원 hireDate
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control
                            defaultValue=""
                            name="hireDate"
                            onChange={changeHandler}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="jobId">
                    <Form.Label column sm="2">
                        직원 jobId
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control
                            defaultValue=""
                            name="jobId"
                            onChange={changeHandler}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="salary">
                    <Form.Label column sm="2">
                        직원 salary
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control
                            defaultValue=""
                            name="salary"
                            onChange={changeHandler}
                        />
                    </Col>
                </Form.Group>
                <input
                    onClick={insertHandler}
                    className="btn btn-primary"
                    type="button"
                    value="등록"
                />
            </Form>
        </div>
    );
}

export default EmpInsert;
