import { createContext, useEffect, useMemo, useState } from "react";
import ChatSocket from "./socket/Socket";
import { ChatContextType } from "./types/Chat";

type Props = {
  children: JSX.Element | JSX.Element[];
  manager: string;
  user: string;
};
let chatSocket: any;
//ChatContext는 socket에 대한 값을 가지고 있습니다.
const ChatContext = createContext(chatSocket);
const ChatProvider = ({ children, manager, user }: Props): JSX.Element => {
  useEffect(() => {
    chatSocket = ChatSocket(manager, user);
  }, []);
  return (
    <ChatContext.Provider value={chatSocket}>{children}</ChatContext.Provider>
  );
};

export { ChatContext, ChatProvider };
