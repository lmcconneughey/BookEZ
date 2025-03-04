'use client'

import { doSocialLogin } from "../../actions/index"
import SocialLogin from "../social-login/SocialLogin"
import { doCredentialLogin } from "../../actions/index"
import { useRouter } from "next/navigation"
import { useState } from "react"

const LoginForm = () => {
    const router = useRouter()
    const [error, setError] = useState("")

    async function handleFormSubmit(event) {
        event.preventDefault()

        try {
            const formData = new FormData(event.currentTarget);

            const response = await doCredentialLogin(formData)
            console.log(response);
            
            if(!response) {
                setError(response.error.message)
            } else {
                router.push('/store/home')
            }

        } catch (error) {
            console.error(error)
            setError("please check credentials")
        }
    }
    return (
        <div>
            <div className="text-el text-red-500" >{error}</div>
            <form onSubmit={handleFormSubmit} >
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
                <div className="flex flex-col justify-center">
                    <button type="submit" className="min-w-32 rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                        Login with Credentials
                    </button>
                </div>
                
            </form>
            <SocialLogin />
        </div>
    )
}

export default LoginForm