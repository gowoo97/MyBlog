import React from 'react';




const Registeration = () =>{
    return (
<div className='back'>
            <div className='LoginBox'>
                <h2>로그인</h2>
                <hr/>
                <h5>유저네임</h5>
                <input type="text" placeholder='UserName'/>
                <br/>
                <h5>패스워드</h5>
                <input type="text"  placeholder='Password'/>
                <input type="button" id="btt_reg" value="회원가입"></input>
            </div>
        </div>

    );
};

export default Registeration;