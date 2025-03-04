'use client'

import SocialLogin from "../social-login/SocialLogin";
import { useRouter } from "next/navigation";

const RegistrationForm = () => {
    const router = useRouter()
    async function handleSubmit (event) {
        event.preventDefault() 
        
        try {
            const forData = new FormData(event.currentTarget)//<< passing to the FormData Obj
            const name = forData.get('name')//<< we're getting the values from our input fields
            const email = forData.get('email')
            const password = forData.get('password')
            //console.log(email);
            const response = await fetch("../../api/register", {//<<must have this file structure to get the response
                method: 'POST',
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            })

            response.status === 201 && router.push('/store/login')// if req success direct to user home

        } catch (error) {
            console.log(error.message);
            
        }
    }

    return (
        <div>
            <form 
                onSubmit={handleSubmit}
                className="my-5 flex flex-col items-center border p-3 border-gray-200 rounded-md">
                <div className="my-2">
                    <label htmlFor="email">Name</label>
                    <input
                        className="border mx-2 border-b-gray-500 rounded"
                        type="text"
                        name="name"
                        id="name"
                    />
                </div>
                <div className="my-2">
                    <label htmlFor="email">Email</label>
                    <input
                        className="border mx-2 border-b-gray-500 rounded"
                        type="email"
                        name="email"
                        id="email"
                    />
                </div>
                <div className="my-2">
                    <label htmlFor="password">Password</label>
                    <input
                        className="border mx-2 border-b-gray-500 rounded"
                        type="password"
                        name="password"
                        id="password"
                    />
                </div>
                <button
                    type="submit"
                    className="min-w-32 rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                    Credential Login
                </button>
            </form>
            <SocialLogin />
        </div>
    );
};

export default RegistrationForm;
