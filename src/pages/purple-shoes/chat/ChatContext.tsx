import { createContext, useEffect, useState } from "react";
import { ChatContextType } from "./types/Chat";

interface Props {
  children: JSX.Element | JSX.Element[];
}

//ChatContext는 socket에 대한 값을 가지고 있습니다.
const ChatContext = createContext<ChatContextType | undefined>(undefined);

const ChatProvider = ({ children }: Props): JSX.Element => {
  useEffect(() => {}, []);
  return (
    <ChatContext.Provider value={undefined}>{children}</ChatContext.Provider>
  );
};

export { ChatContext, ChatProvider };
