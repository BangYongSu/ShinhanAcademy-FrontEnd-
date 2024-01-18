import React, { Component } from "react";

function YourComponent1(param) {
    const { myname, myage, hobby } = param;
    return (
        <div>
            <p>{myname}</p>
            <p>{myage}</p>
            <ul>
                {hobby &&
                    hobby.map((item, index) => (
                        <li key={"A" + index}>{item}</li>
                    ))}
            </ul>
        </div>
    );
}

class YourComponent2 extends Component {
    constructor(aa) {
        super(aa);
        this.score = 100;
        this.myname2 = aa.myname;
    }
    study() {
        console.log(this.score);
    }
    getScore() {}
    render() {
        const { myname, myage, hobby } = this.props;
        return (
            <div>
                <h1>{this.props.children}</h1>
                <p>{myname}</p>
                <p>{this.myname2}</p>
                <p>{this.props.myname}</p>
                <p>{myage}</p>
                <ul>
                    {hobby &&
                        hobby.map((item, index) => (
                            <li key={"B" + index}>{item}</li>
                        ))}
                </ul>
            </div>
        );
    }
}

export { YourComponent1 as default, YourComponent2 };
