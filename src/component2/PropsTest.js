import React, { Component } from "react";

//선언적 함수
function MyComponentD4(props) {}

//리터럴 방식
const MyComponentD = (props) => {
    const arr = ["HTML", "CSS", "Javascript", "React"];
    const bookPrice = 30000;

    return (
        <div>
            <h1>부모Component</h1>
            <MyComponentD2 title="React" price={bookPrice} subject={arr}>
                <strong>첫번째 Child</strong>
            </MyComponentD2>
            <MyComponentD3 title="SpringBoot" price={50000} subject={arr}>
                <strong>두번째 자식</strong>
            </MyComponentD3>
            <MyComponentD3 />
        </div>
    );
};

class MyComponentD3 extends Component {
    constructor(props) {
        super(props); //생성자는 생략 가능, constructor()를 정의한다면 반드시 코드 전에 부모 생성자를 호출해야 한다.
        console.log("MyComponentD3 생성자" + this.props.title);
        console.log(this.props.price + 12345);
        this.myname = "은경";
        this.age = 20;
    }
    render() {
        //비구조화 할당을 이용하기
        const { title, price, children, subject } = this.props;
        return (
            <div style={{ backgroundColor: "#eef9f2" }}>
                <h2>자식Component2(class로 component만들기)</h2>
                <p>title: {this.props.title}</p>
                <p>price: {this.props.price}</p>
                <p>children: {this.props.children}</p>
                <p>title: {title}</p>
                <p>price: {price}</p>
                <p>children: {children}</p>
                <hr />
                <h3>나의 이름은 {this.myname}</h3>
                <h3>나의 나이는 {this.age}</h3>
            <ul>
                {subject &&
                    subject.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
            </div>
        );
    }
}

function MyComponentD2(parameters) {
    //함수의 매개변수 이름은 사용자가 정한다. props=>parameters, 주의: arguments는 기본 제공되므로 사용할 수 없다.(예약됨)
    //비구조화 할당을 이용하기
    const { title, price, children, subject } = parameters; //비구조화 할당
    const myname = "은경";
    const age = 20;

    return (
        <div style={{ backgroundColor: "#fff2f4" }}>
            <h2>자식Component1(function으로 component만들기)</h2>
            <p>타이틀은 {parameters.title}</p>
            <p>가격은 {parameters.price}</p>
            <p>children {parameters.children}</p>
            <p>타이틀은 {title}</p>
            <p>가격은 {price}</p>
            <p>children {children}</p>
            <hr />
            <h3>나의 이름은 {myname}</h3>
            <h3>나의 나이는 {age}</h3>
            <ul>
                {subject &&
                    subject.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    );
}

export default MyComponentD;
