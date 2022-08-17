import { useAuth } from "../hooks/useAuth";

const Unauthenticated = () => {
  const { login } = useAuth();
  return (
    <>
      <div className="flex justify-center p-20 ">
        <h2 className="text-8xl text-white font-mono">
          Log in to join the chat room!
        </h2>
      </div>
      <div className="flex justify-center align-middle h-50">
        <button
          onClick={login}
          className="bg-emerald-700 text-white rounded-xl text-6xl font-stronge font-serif p-5"
        >
          Login with Google
        </button>
      </div>
    </>
  );
};

export default Unauthenticated;
