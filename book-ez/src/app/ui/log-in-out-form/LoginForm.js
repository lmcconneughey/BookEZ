import { doSocialLogin } from "../../actions/index"
import SocialLogin from "../social-login/SocialLogin"
const LoginForm = () => {
    return (
        <div>
            <form>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input 
                        className="border mx-2 border-gray-500 rounded"
                        type="email"
                        name="email"
                        id="email"
                    />
                </div>
                <div>
                <label htmlFor="Password">Password</label>
                    <input 
                        className="border mx-2 border-gray-500 rounded"
                        type="password"
                        name="password"
                        id="password"
                    />
                </div>
                <button type="submit" className="min-w-32  rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                    Login with Credentials
                </button>
            </form>
            <SocialLogin />
        </div>
    )
}

export default LoginForm