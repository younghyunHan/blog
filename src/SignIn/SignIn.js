import { Link } from 'react-router-dom';
import './SignIn.css';

function SignIn() {
  return (
    <div id='signIn'>
      <form id='SignInForm'>
        <h1 id='SignInFormName'>Blog</h1>
        <input
          id='userId'
          type='text'
          placeholder='전화번호, 사용자 이름 또는 이메일'
        />
        <input id='userPassword' type='password' placeholder='비밀번호' />
        <Link to='/main'>
          <button type='button' id='signInBtn'>
            로그인
          </button>
        </Link>
      </form>
    </div>
  );
}

export default SignIn;
