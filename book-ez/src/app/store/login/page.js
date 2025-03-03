import Link from "next/link";
import LoginForm from "../../ui/log-in-out-form/LoginForm";

const LogIn = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-center text-3xl my-3 text-gray-500">Log In</div>
      <div >
        <LoginForm />
      </div>
      <div>
        <p className="text-center text-3xl my-3 text-gray-500">
          Not Registered?
        </p>
        <Link href="/store/register" className="mx-2 underline flex flex-col justify-center items-center ">
          Register
        </Link>
      </div>
    </div>
  );
};

export default LogIn;
