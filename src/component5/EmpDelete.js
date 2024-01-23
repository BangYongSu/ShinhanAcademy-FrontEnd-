import axios from 'axios';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function EmpDelete(props) {
    const location = useLocation(); //state 추출하려고 이용
    const empId = location.state.employeeId;
    const navi = useNavigate();

    axios({
        method:"delete",
        url:`/rest/emp/delete/${empId}`
    }).then((res)=>{
        console.log(res.data);
        alert(res.data);
        navi("/emp/list");
    }).catch((err)=>{
        console.log(err);
    });

    return (
        <div>
            
        </div>
    );
}

export default EmpDelete;