import { doLogout } from "../../actions/index";

const Logout = () => {
    return(
        <form action={doLogout}>
            <button 
                type="submit"
                className="min-w-32  rounded-md bg-red-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                Logout
            </button>
        </form>
    )
}

export default Logout