import { useState } from "react";
import { MessageList } from "./components/MessageLIst";

import { useAuth } from "./hooks/useAuth";
import { sendMessage } from "./services/firebase";

const ChatRoom = () => {
  const [value, setValue] = useState();
  const { user } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(user, value);
    setValue("");
  };

  return (
    <div className="flex justify-center">
      <div className=" flex flex-row p-16 w-4/5 h-4/5 border-2 border-white ">
        <form className="w-full" onSubmit={handleSubmit}>
          <MessageList />
          <input
            className="p-1 rounded-md bg-gray-900 text-white w-4/5 h-10"
            type="text"
            placeholder="Enter a message"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded ml-3">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatRoom;
