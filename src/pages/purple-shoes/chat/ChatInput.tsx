// 추후에 기능이 추가 될시 View와 Component로 분리 할 예정

import { useContext, useState } from "react";
import { ChatContext } from "./ChatContext";
import { ChatEvent } from "./socket/ChatEvent";
import { SocketContext } from "./socket/SocketContext";

const ChatInput = () => {
  const chatSocket = useContext(SocketContext);
  const [message, setMessage] = useState("");
  const sendMessage = (message: string) => {
    console.log("send Message", message);
    chatSocket?.emit(ChatEvent.SEND_MESSAGE, message);
    setMessage("");
  };
  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setMessage(e.target.value);
        }}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key == "Enter") sendMessage(message);
        }}
      />
      <input type="button" onClick={() => sendMessage(message)} />
    </div>
  );
};

export default ChatInput;
