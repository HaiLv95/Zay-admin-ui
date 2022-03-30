import { useForm } from 'react-hook-form'
import { logon } from '../../api/account-instance';
export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onHandleSubmit = async data => {
        await logon(data).then(resp => {
            if (resp.status == 200) {
                console.log(resp.data)
                localStorage.setItem('token', resp.data.accessToken)
            }
        })
    }
    return (
        <div className='row justify-content-center'>
            <main className="form-signin col-md-3">
                <form onSubmit={handleSubmit(onHandleSubmit)}>
                    <img className="mb-4" src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width={72} height={57} />
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="username" placeholder="name@example.com" {...register("username")} />
                        <label htmlFor="username">Username</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="password" placeholder="Password" {...register("password")} />
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" defaultValue="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
                </form>
            </main>
        </div>
    )
}