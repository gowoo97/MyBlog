import { Component } from 'react';
import './LoginTemplate.scss'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

class LoginTemplate extends Component{

    render(){
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
                <input type="button" id="btt_login" value="로그인"></input>
                <p>계정이 없으신가요? <Link to="/">계정만들기</Link></p>
            </div>
        </div>
        );
    }

}

export default LoginTemplate;