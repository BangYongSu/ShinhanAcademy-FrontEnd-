import React, {
    createContext,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
import { Button, Form, InputGroup, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const MyContext = createContext();

export const MyProvider = (props) => {
    const [member, setMember] = useState({ name: "", phone: "" }); //객체
    const [memberList, setMemberList] = useState([member]); //배열
    const nameInput = useRef(); //1.특정 DOM을 접근하기 위해 사용
    const phoneInput = useRef();
    let memberNo = useRef(1); //2.랜더링시 다시 초기화하지 않는다.(최초 초기화만 한다.)

    const changeHandler = (e) => {
        setMember({ ...member, [e.target.name]: e.target.value });
        //잘못된 코드 방식 console.log(member); 왜냐면, set은 비동기 처리를 하므로 set 수행 후 출력이 아님
    };
    const memberAdd = () => {
        //이미 있는 member라면 추가 막기(이름이 같거나 전화번호가 같은 경우)
        if (member.name === "" || member.phone === "") return;
        if (
            memberList.find(
                (item) =>
                    item.phone === member.phone || item.name === member.name
            )
        )
            return;

        //setMember({...member, id:memberNo.current}); //set은 비동기 //비동기를 같이 쓸 수 없다.
        const newMember = { ...member, id: memberNo.current };
        setMemberList([...memberList, newMember]);
        memberNo.current++;
    };

    useEffect(() => {
        console.log("component가 rendering될 때마다 수행됨");
    });
    useEffect(() => {
        console.log("component가 최초 rendering될 때 1회 수행됨");
    }, []);
    useEffect(() => {
        console.log(
            "component가 최초 rendering될 때 그리고 membername이 변경될 때마다 수행됨"
        );
        console.log(member);
        console.log(memberList);
        return () => {
            console.log("clean up...변경되기 전 값을 지우고자 할 때 사용");
        };
    }, [member, memberList]);

    //[]는 의존배열이라고 한다.
    // const printList = (memeberData, seq) => {
    //     return(<tr>
    //         <td>{memberData.id}</td>
    //         <td>{memberData.name}</td>
    //         <td>{memberData.phone}</td>
    //     </tr>);
    // }

    return (
        <>
            <MyContext.Provider
                value={{
                    member,
                    memberNo,
                    changeHandler,
                    nameInput,
                    phoneInput,
                    memberAdd,
                    memberList,
                }}
            >
                {props.children}
            </MyContext.Provider>
        </>
    );
};

export function ProviderTest(props) {
    return (
        <MyProvider>
            <LifeCycleFunc></LifeCycleFunc>
        </MyProvider>
    );
}


function LifeCycleFunc(props) {
    const {
        member,
        memberNo,
        changeHandler,
        nameInput,
        phoneInput,
        memberAdd,
        memberList,
    } = useContext(MyContext);
    return (
        <div>
            
            <h1>LifeCycleFunctionComponent 연습 : {member.name}</h1>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">ID</InputGroup.Text>
                <Form.Control
                    readOnly
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    name="id"
                    value={memberNo.current}
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">NAME</InputGroup.Text>
                <Form.Control
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={changeHandler}
                    name="name"
                    ref={nameInput}
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">PHONE</InputGroup.Text>
                <Form.Control
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={changeHandler}
                    name="phone"
                    ref={phoneInput}
                />
            </InputGroup>
            <Button variant="warning" onClick={memberAdd}>
                등록
            </Button>
            <Button variant="success" onClick={() => nameInput.current.focus()}>
                이름으로 이동
            </Button>
            <Button
                variant="success"
                onClick={() => phoneInput.current.focus()}
            >
                전화번호로 이동
            </Button>
            <hr />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>PHONE</th>
                    </tr>
                </thead>
                <tbody>
                    {memberList.map((memberData, seq) => (
                        <TRComponent key={seq} memberData={memberData} />
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default LifeCycleFunc;

function TRComponent(props) {
    const { memberData } = props;
    return (
        <tr>
            <TDComponent data={memberData.id} />
            <TDComponent data={memberData.name} />
            <TDComponent data={memberData.phone} />
        </tr>
    );
}

function TDComponent(props) {
    return <td>{props.data}</td>;
}

