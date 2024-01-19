import React, { Component } from "react";
import propTypes from "prop-types";

class LifeCycleClassComponent extends Component {
    //state = { title: "준비", buttonVisible: false };

    constructor(props) {
        super(props);
        console.log("LifeCycleClassComponent............constructor");
        this.state = { title: "준비", buttonVisible: false };
    }

    componentDidMount() {
        console.log(
            "LifeCycleClassComponent............componentDidMount(생성됨)"
        );
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("LifeCycleClassComponent............shouldComponentUpdate");
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(
            "LifeCycleClassComponent............componentDidUpdate(수정)"
        );
    }

    componentWillUnmount() {
        console.log(
            "LifeCycleClassComponent............componentWillUnmount(제거)"
        );
    }

    render() {
        console.log("LifeCycleClassComponent............render");
        const { title, buttonVisible } = this.state;
        return (
            <div>
                <h1>LifeCycleClassComponent연습</h1>
                <button
                    onClick={() =>
                        this.setState({ title: "보이기", buttonVisible: true })
                    }
                >
                    자식컴포넌트 보이기
                </button>
                {buttonVisible && (
                    <div>
                        <LifeCycleClassComponent2 title={title} />
                        <button onClick={()=> this.setState({ title: "준비", buttonVisible: false })}>다시시작</button>
                    </div>
                )}
            </div>
        );
    }
}

class LifeCycleClassComponent2 extends Component {
    //state = { title: "준비", buttonVisible: false };

    constructor(props) {
        super(props);
        console.log("자식LifeCycleClassComponent............constructor");
    }

    componentDidMount() {
        console.log(
            "자식LifeCycleClassComponent............componentDidMount(생성됨)"
        );
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("자식LifeCycleClassComponent............shouldComponentUpdate");
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(
            "자식LifeCycleClassComponent............componentDidUpdate(수정)"
        );
    }

    componentWillUnmount() {
        console.log(
            "자식LifeCycleClassComponent............componentWillUnmount(제거)"
        );
    }

    render() {
        console.log("자식LifeCycleClassComponent............render");
        return (
            <div>
                <h1 style={{backgroundColor:"orange"}}>이 부분은 자식이 출력합니다.</h1>
            </div>
        );
    }
}

export default LifeCycleClassComponent;
