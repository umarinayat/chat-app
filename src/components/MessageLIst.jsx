import { useAuth } from "../hooks/useAuth";
import { useMessages } from "../hooks/useMessages";

import { useLayoutEffect } from "react";
import { useRef } from "react";

function MessageList() {
  const containerRef = useRef(null);
  const { user } = useAuth();
  const messages = useMessages();

  useLayoutEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  });

  return (
    <div className="flex-1 mb-4 " ref={containerRef}>
      <ul className="h-full flex flex-col items-start">
        {messages.map((x) => (
          <Message key={x.id} message={x} isOwnMessage={x.uid === user.uid} />
        ))}
      </ul>
    </div>
  );
}

function Message({ message, isOwnMessage }) {
  const { displayName, text } = message;
  return (
    <li className="pr-2 pl-2 mb-2 bg-gray-900 rounded-lg text-left">
      <h4 className="mb-2 text-sky-500">
        {isOwnMessage ? "You" : displayName}
      </h4>
      <div className="text-white text-xl">{text}</div>
    </li>
  );
}

export { MessageList };
