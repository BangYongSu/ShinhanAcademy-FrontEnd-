import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";

function EmpDetail(props) {
    const { empId } = useParams();
    const [emp, setEmp] = useState({});
    const navi = useNavigate();
    const changeHandler = useCallback( (e) => {
        setEmp({ ...emp, [e.target.name]: e.target.value });
    },[emp]);
    const handleSubmit = (e) => {
        e.preventDefault();
        axios({
            method:"put",
            url: "/rest/emp/update",
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

    useEffect(() => {
        console.log("emp change");
        console.log(emp);
    }, [emp]);

    useEffect(() => {
        axios({
            method: "get",
            url: `/rest/emp/detail/${empId}`,
        })
            .then((res) => {
                console.log(res);
                setEmp(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [empId]);

    return (
        <div>
            <h1>EMP 상세</h1>
            {emp && (
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} className="mb-3" controlId="employeeId">
                    <Form.Label column sm="2">
                        직원 아이디
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control
                        value={emp.employeeId||""}
                            name="employeeId"
                            onChange={changeHandler}
                            plaintext
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="firstName">
                    <Form.Label column sm="2">
                        직원 firstName
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control
                            defaultValue={emp.firstName || ""}
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
                            defaultValue={emp.lastName || ""}
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
                            defaultValue={emp.email || ""}
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
                            defaultValue={emp.phoneNumber || ""}
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
                            defaultValue={emp.hireDate || ""}
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
                            defaultValue={emp.jobId || ""}
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
                            defaultValue={emp.salary || ""}
                            name="salary"
                            onChange={changeHandler}
                        />
                    </Col>
                </Form.Group>
                <input
                    className="btn btn-primary"
                    type="submit"
                    value="저장"
                />{" "}
                <Link to="/emp/delete" state={{employeeId:emp.employeeId}}>
                    <Button type="button" variant="danger">
                        삭제
                    </Button>
                </Link>
            </Form>
            )}
                
        </div>
    );
}

export default EmpDetail;
