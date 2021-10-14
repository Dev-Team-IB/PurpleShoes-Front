import { createContext, ReactNode, useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io-client/build/typed-events";
import { messageType } from "../types/Chat";
import { ChatEvent } from "./ChatEvent";

type Props = {
  children: React.ReactNode;
  manager: string;
  user: string;
};

type SocketChatType = {
  socket: Socket<DefaultEventsMap, DefaultEventsMap> | undefined;
  action: { sendMessage: () => void };
  value: { messages: messageType[] };
};

export const SocketContext = createContext<
  Socket<DefaultEventsMap, DefaultEventsMap> | undefined
>(undefined);

export const SocketProvider = ({ children, user, manager }: Props) => {
  let socket: Socket<DefaultEventsMap, DefaultEventsMap> | undefined;
  useEffect(() => {
    console.log("hello world");
    socket = io("http://localhost:5000", {
      path: "/socketchat",
      reconnectionDelayMax: 10000,
      query: {
        user: user,
        manager: manager,
        room: manager + "_" + user,
      },
    });
    console.log("Connect socket chat");
    socket.on(ChatEvent.CONNECTION, () => {
      console.log("Connection Chat Server : ", manager, " / ", user);
      console.log(socket);
      socket?.emit(ChatEvent.CHAT_HISTROY);
    });
  }, []);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
