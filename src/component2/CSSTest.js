import React from "react";
import "component2/My.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Badge, Stack, Button } from "react-bootstrap";

//React에서 css사용
//외부 css ==>> 1)import 2)className속성을 이용한다.
//내부 css(inline) ==>> 반드시 객체일 것 {}. style={}
function MyComponentC(props) {
    const inlineStyle = {
        border: "3px dotted blue",
        color: "orange",
        fontSize: "30px",
    };

    return (
        <header style={{ border: "1px solid gray" }}>
            <h1 className="myStyle">반갑습니다....</h1>
            <h2 className="myStyle2">React배우기전 선수지식은?</h2>
            <p style={inlineStyle}>Style연습..inline</p>
            <p style={inlineStyle} className="myStyle2">
                Style연습...class이름
            </p>
            <button className="btn btn-danger">내가만든이름</button>
            <Badge bg="secondary" as={Button}>
                New
            </Badge>
            <Stack direction="horizontal" gap={2}>
                <Button as="a" variant="primary">
                    Button as link
                </Button>
                <Button as="a" variant="success">
                    Button as link
                </Button>
            </Stack>
            <Button variant="primary">Primary</Button>{" "}
            <Button variant="secondary">Secondary</Button>{" "}
            <Button variant="success">Success</Button>{" "}
            <Button variant="warning">Warning</Button>{" "}
            <Button variant="danger">Danger</Button>{" "}
            <Button variant="info">Info</Button>{" "}
            <Button variant="light">Light</Button>{" "}
            <Button variant="dark">Dark</Button>
            <Button variant="link">Link</Button>
            <button type="button" className="btn">
                Basic
            </button>
            <button type="button" className="btn btn-primary">
                Primary
            </button>
            <button type="button" className="btn btn-secondary">
                Secondary
            </button>
            <button type="button" className="btn btn-success">
                Success
            </button>
            <button type="button" className="btn btn-info">
                Info
            </button>
            <button type="button" className="btn btn-warning">
                Warning
            </button>
            <button type="button" className="btn btn-danger">
                Danger
            </button>
            <button type="button" className="btn btn-dark">
                Dark
            </button>
            <button type="button" className="btn btn-light">
                Light
            </button>
            <button type="button" className="btn btn-link">
                Link
            </button>
        </header>
    );
}

export default MyComponentC;
