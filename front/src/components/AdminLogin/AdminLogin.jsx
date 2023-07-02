import './AdminLogin.scss';
import { useForm } from 'react-hook-form';
import { adminLogin } from '../../utils/AdminRoute';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
function AdminLogin() {
    const { register, handleSubmit} = useForm();
    const navigate = useNavigate();
    function onSubmit(e) {
        axios.post(adminLogin, e)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                navigate(`/${import.meta.env.VITE_LINK}`)
            })
            .catch(err => {
                alert('Wrong credentials')
            })
    }
    return (
        <>
            <div id="admin-login-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder='Username' {
                        ...register('username', { required: true })
                    } />
                    <input type="password" placeholder='Password'{
                        ...register('password', { required: true })
                    } />
                    <button>Login</button>
                </form>
            </div>
        </>
    )
}
export default AdminLogin;