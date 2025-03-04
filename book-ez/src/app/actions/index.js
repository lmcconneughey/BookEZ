'use server'

import { signIn, signOut } from "../../auth"

export async function doSocialLogin(formData) {
    const action = formData.get("action")
    await signIn(action, {redirectTo: "/store/home"})//<< specify rout to be redirected to after signin
    //console.log(action);
    
}

export async function doLogout(formdata) {//<< for logout, no action needed!
    await signOut({redirectTo: "/store"})
}
// server action for authorize
export async function doCredentialLogin(formData) {
    try {
        const response = await signIn("credentials", {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false//<< incase of error, will handle redirect at login form
        });
        return response
    } catch (error) {
        throw new Error(error.message)
    }
}
