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