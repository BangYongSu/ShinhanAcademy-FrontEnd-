import React, { Component } from "react";

function MyComponentD(props) {
    return (
        <div>
            <h1>부모Component</h1>
            <MyComponentD2 title="React" price="20000">
                <strong>첫번째 Child</strong>
            </MyComponentD2>
            <MyComponentD3 title="SpringBoot" price="50000">
                <strong>두번째 자식</strong>
            </MyComponentD3>
        </div>
    );
}

class MyComponentD3 extends Component {
    render() {
        //비구조화 할당을 이용하기
        const { title, price, children } = this.props;
        return (
            <div>
                <h2>자식Component2</h2>
                <p>title: {this.props.title}</p>
                <p>price: {this.props.price}</p>
                <p>children: {this.props.children}</p>
                <p>title: {title}</p>
                <p>price: {price}</p>
                <p>children: {children}</p>
            </div>
        );
    }
}

export function MyComponentD2(parameters) {
    //함수의 매개변수 이름은 사용자가 정한다. props=>parameters, 주의: arguments는 기본 제공되므로 사용할 수 없다.(예약됨)
    //비구조화 할당을 이용하기
    const { title, price, children } = parameters; //비구조화 할당

    return (
        <div>
            <h2>자식Component1</h2>
            <p>타이틀은 {parameters.title}</p>
            <p>가격은 {parameters.price}</p>
            <p>children {parameters.children}</p>
            <p>타이틀은 {title}</p>
            <p>가격은 {price}</p>
            <p>children {children}</p>
        </div>
    );
}

export default MyComponentD;
