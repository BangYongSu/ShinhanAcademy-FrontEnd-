import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function EmpList(props) {
    const [empList, setEmpList]  = useState();

    useEffect(()=>{
        axios({
            method: "get",
            url:"/rest/emp/list",
        }).then((res)=>{
            console.log("??");
            console.log(res.data);
            setEmpList(res.data)
        }).catch((err)=>{
            console.log(err);
        });
    },[])
    return (
        <div>
            <h1>Emp List</h1>
            <EmpDisplay empList = {empList}/>
        </div>
    );
}

function EmpDisplay({empList}) {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>직원ID</th>
                    <th>firstName</th>
                    <th>lastName</th>
                    <th>email</th>
                    <th>phoneNumber</th>
                    <th>hireDate</th>
                    <th>jobId</th>
                    <th>salary</th>
                    <th>commissionPct</th>
                    <th>managerId</th>
                    <th>departmentId</th>
                </tr>
            </thead>
            <tbody>
                {empList &&
                    empList.map((emp, index) => (
                        <tr key={`id${index}`}>
                            <td>
                                <Link to={`/emp/detail/${emp.employeeId}`}>
                                    {emp.employeeId}
                                </Link>
                            </td>
                            <td>{emp.firstName}</td>
                            <td>{emp.lastName}</td>
                            <td>{emp.email}</td>
                            <td>{emp.phoneNumber}</td>
                            <td>{emp.hireDate}</td>
                            <td>{emp.jobId}</td>
                            <td>{emp.salary}</td>
                            <td>{emp.commissionPct}</td>
                            <td>{emp.managerId}</td>
                            <td>{emp.departmentId}</td>
                        </tr>
                    ))}
            </tbody>
        </Table>
    );
}


export default EmpList;