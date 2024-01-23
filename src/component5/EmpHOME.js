import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';
import EmpList from './EmpList';
import EmpInsert from './EmpInsert';
import EmpDetail from './EmpDetail';
import EmpDelete from './EmpDelete';

function EmpHOME(props) {
    return (
        <div>
            <h1>EMP HOME</h1>
            <ul>
                <li>
                    <Link to="list">{/* 상대경로 */}
                        <Button variant="success">직원 조회</Button>
                    </Link>{" "}
                    <Link to="insert">{/* 상대경로 */}
                        <Button variant="success">직원 입력</Button>
                    </Link>{" "}
                </li>
            </ul>
            <Routes>
                <Route path="/list" element={<EmpList />}></Route>
                <Route path="/insert" element={<EmpInsert />}></Route>
                <Route path="/detail/:empId" element={<EmpDetail />}></Route>
                <Route path="/delete" element={<EmpDelete />}></Route>
            </Routes>
        </div>
    );

}

export default EmpHOME;