import ChatRoom from "./ChatRoom";
import { useAuth } from "./hooks/useAuth";
import AuthenticatedApp from "./components/AuthenticatedApp";
import UnAuthenticatedApp from "./components/UnauthenticatedApp";

function App() {
  const { user } = useAuth();
  return (
    <div>
      <div className="flex justify-center content-center">
        <h1 className="text-white font-bold text-5xl p-5">
          <span>💬</span>Chat APP
        </h1>
      </div>
      {user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
    </div>
  );
}

export default App;
