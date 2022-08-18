import { useState, useEffect } from "react";
import { getMessages } from "../services/firebase";

function useMessages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = getMessages(setMessages);
    return unsubscribe;
  }, []);

  return messages;
}

export { useMessages };
