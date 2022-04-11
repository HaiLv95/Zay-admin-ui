import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { logon } from '../../api/account-instance';
export default function Login() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onHandleSubmit = async data => {
        await logon(data).then(resp => {
            if (resp.status == 200) {
                localStorage.setItem('token', 'Bearer ' + resp.data.accessToken)
                localStorage.setItem('authenticated', 'true')
                localStorage.setItem('username', data.username)
                console.log('token', localStorage.getItem('token'))
                //timeout 2h
                setTimeout(() => {
                    localStorage.setItem('token', '')
                    console.log('logout')
                    localStorage.setItem('authenticated', 'false')
                    localStorage.setItem('username', '')
                }, 7200000)
                navigate('/home')
            }
        })
    }
    return (
        <div className='row justify-content-center'>
            <main className="form-signin col-md-3 mb-3">
                <form onSubmit={handleSubmit(onHandleSubmit)}>
                    <img className="mb-4" src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width={72} height={57} />
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="username" placeholder="exampleUsername" {...register("username", { required: true })} />
                        <label htmlFor="username">Username</label>
                        {errors.ussername && (<span className='text-danger'>Username is not empty</span>)}
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="password" placeholder="Password" {...register("password", { required: true })} />
                        <label htmlFor="password">Password</label>
                        {errors.password && (<span className='text-danger'>password is not empty</span>)}
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
                </form>

            </main>
        </div>
    )
}