import axios from 'axios';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function BoardDelete(props) {
    const location = useLocation(); //state 추출하려고 이용
    const delBno = location.state.bno;
    const navi = useNavigate();

    axios({
        method:"delete",
        url:`/rest/webboard/delete.do/${delBno}`
    }).then((res)=>{
        console.log(res.data);
        alert(res.data);
        navi("/board/list");
    }).catch((err)=>{
        console.log(err);
    });

    return (
        <div>
            
        </div>
    );
}

export default BoardDelete;