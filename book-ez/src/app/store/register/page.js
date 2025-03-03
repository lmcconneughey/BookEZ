import RegistrationForm from "../../ui/log-in-out-form/RegistrationForm";
import Link from "next/link";

const RegisterPage = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <RegistrationForm />
            <div>
                <p className="text-center text-3xl my-3 text-gray-500">
                    Already have an account?
                </p>
                <Link
                    href="/store/login"
                    className="mx-2 underline flex flex-col justify-center items-center "
                >
                    Login
                </Link>
            </div>
        </div>
    );
};

export default RegisterPage;
