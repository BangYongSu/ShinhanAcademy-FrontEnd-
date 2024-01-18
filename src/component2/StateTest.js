import React, { Component } from "react";

class StateTest extends Component {
    constructor() {
        super();
        this.state = { count: 0, message: "class를 이용한 state관리" };
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleClick3 = (event) => {
            var target = event.target.innerHTML;
            console.log("target", target);
            if (target === "증가") {
                this.setState({
                    count: this.state.count + 1,
                    message: "ADD를 수행함",
                });
            } else {
                this.setState({
                    count: this.state.count - 1,
                    message: "MINUS를 수행함",
                });
            }
        };
    }

    //선언적 함수 : this(this를 객체로 연결)
    //화살표 함수 : this(this가 자동연결)
    handleClick = (event) => {
        var target = event.target.innerHTML;
        console.log("target", target);
        if (target === "증가") {
            this.setState({
                count: this.state.count + 1,
                message: "ADD를 수행함",
            });
        } else {
            this.setState({
                count: this.state.count - 1,
                message: "MINUS를 수행함",
            });
        }
    };
    handleClick2(event) {
        var target = event.target.innerHTML;
        console.log("target", target);
        if (target === "증가") {
            this.setState({
                count: this.state.count + 1,
                message: "ADD를 수행함",
            });
        } else {
            this.setState({
                count: this.state.count - 1,
                message: "MINUS를 수행함",
            });
        }
    };
    render() {
        const { count, message } = this.state;
        //this.stete.count = 100; //불가능한 코드
        //this.setState({count: count+100}); //가능한 코드
        return (
            <div>
                <p>
                    현재값 :{count}..........{message}
                </p>
                <button
                    onClick={() =>
                        this.setState({
                            count: count + 1,
                            message: "ADD를 수행함",
                        })
                    }
                >
                    증가
                </button>
                <button onClick={this.handleClick}>증가</button>
                <button onClick={this.handleClick}>handleClick감소</button>
                <button onClick={this.handleClick2}>handleClick2감소</button>
                <button onClick={this.handleClick3}>handleClick3감소</button>
            </div>
        );
    }
}

export default StateTest;
