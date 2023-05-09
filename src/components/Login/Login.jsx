import { login } from "../../firebase";
import "./login.scss";
const Login = () => {
    return (
        <div className="grid login">
            <button className="primary" onClick={login}>
                <i className='bx bxl-google'></i>Sign in with Google
            </button>
        </div>
    )
}

export default Login;