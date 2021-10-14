import { useContext, useEffect, useState } from "react";
import { ChatEvent } from "./socket/ChatEvent";
import { SocketContext } from "./socket/SocketContext";
import { ChatHistoryType, messageType } from "./types/Chat";

const ChatList = () => {
  const chatSocket = useContext(SocketContext);
  const [messages, setMessages] = useState<messageType[]>();

  useEffect(() => {
    chatSocket?.on(ChatEvent.CONNECTION, () => {
      console.log("Connection Chat Server ");
      console.log(chatSocket);
      chatSocket?.emit(ChatEvent.CHAT_HISTROY);
    });
    chatSocket?.on(ChatEvent.CHAT_HISTROY, (chatHistory: ChatHistoryType) => {
      setMessages(chatHistory.messages);
      console.log(chatHistory.messages);
    });

    chatSocket?.on(ChatEvent.NEW_MESSAGE, (message: messageType) => {
      console.log("New Message : ", message);
      setMessages(() => messages?.concat(message));
    });
  }, []);

  const chatList = messages?.map((mes: messageType) => {
    return <div key={1}>{mes.content}</div>;
  });

  return <>{chatList}</>;
};

export default ChatList;
