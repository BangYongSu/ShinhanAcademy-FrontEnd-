import React from "react";
import Header, { Header2 } from "./Header";
import Menu, { score } from "./Menu";
import Content, { MyFunc } from "./Content";

function ComponentTest(props) {
    console.log("점수는" + score);
    return (
        <div>
            <Header></Header>
            <Header2></Header2>
            <Menu></Menu>
            <Content></Content>
            <MyFunc></MyFunc>
        </div>
    );
}

export default ComponentTest;
