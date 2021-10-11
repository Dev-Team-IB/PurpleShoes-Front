import { useState } from "react";
import io, { Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io-client/build/typed-events";
import { ChatHistoryType, messageType } from "../types/Chat";
import { ChatEvent } from "./ChatEvent";

const ChatSocket = (manager: string, user: string) => {
  let socket: Socket<DefaultEventsMap, DefaultEventsMap>;
  const [messages, setMessages] = useState<messageType[]>([]);

  socket = io("http://localhost:5000", {
    path: "/chat",
    reconnectionDelayMax: 10000,
    query: {
      user: user,
      manager: manager,
      room: manager + "_" + user,
    },
  });
  console.log("Socket Chat initialize Done.");

  socket.on("connect", () => {
    console.log("Connection Chat Server : ", manager, " / ", user);
    socket.emit(ChatEvent.CHAT_HISTROY);
  });

  socket.on(ChatEvent.CHAT_HISTROY, (chatHistory: ChatHistoryType) => {
    setMessages(chatHistory.messages);
    console.log(chatHistory.messages);
  });

  socket.on(ChatEvent.NEW_MESSAGE, (message: messageType) =>
    console.log(message.content)
  );

  const sendMessage = (message: string) => {
    socket.emit(ChatEvent.SEND_MESSAGE, message, (res: number, date?: Date) => {
      if (res == 200) {
        // HTTP 200 OK
        setMessages((messages) =>
          messages.concat({
            content: message,
            user: user,
            date: date?.toString(),
            isImage: false,
          } as messageType)
        );
      }
    });
  };
};

export default ChatSocket;
