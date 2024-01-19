import React, { Component } from "react";

class StateClassComponent extends Component {
    //state = {su:0};
    constructor(props) {
        super(props);
        this.state = { su: 0 };
        this.plus = this.plus.bind(this);
    }
    //선언적함수
    plus() {
        this.setState({ su: this.state.su + 1 });
        //setState() 이전에 수행한다.
        console.log("더하기가 잘 되고 있나?" + this.state.su);
    }
    //화살표함수는 this가 자동으로 bind된다.
    plus2 = () => {
        this.setState({ su: this.state.su + 1 }, ()=> {
            //setState() 이후에 수행한다. callback 함수
            console.log("더하기가 잘 되고 있나?" + this.state.su);
        });
    };
    buttonClick = (evt) => {
        let btnText = evt.target.innerHTML;
        if (btnText === "+") {
            this.setState({ su: this.state.su + 1 });
        } else if (btnText === "-") {
            this.setState({ su: this.state.su - 1 });
            //this.state.su = this.state.su - 1 //불가 //상태값을 직접 변경하지 못함.
        }
    };
    render() {
        const { su } = this.state;
        return (
            <div>
                <h1>StateClassComponent 연습</h1>
                <p>
                    현재값: {this.state.su}...........{su}
                </p>
                <button onClick={() => this.setState({ su: su + 1 })}>+</button>
                <button onClick={this.plus}>+</button>
                <button onClick={this.plus2}>+</button>
                <button onClick={this.buttonClick}>+</button>
                <button onClick={this.buttonClick}>-</button>
            </div>
        );
    }
}

export default StateClassComponent;
