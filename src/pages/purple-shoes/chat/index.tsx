import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChatInput from "./ChatInput";
import ChatList from "./ChatList";
import { SocketProvider } from "./socket/SocketContext";

const Chat = (props: any) => {
  const manangerName = props.match.params.manager;
  const userName = props.match.params.user;
  return (
    <>
      <SocketProvider manager={manangerName} user={userName}>
        <div>Header</div>
        <ChatList />
        <ChatInput />
      </SocketProvider>
    </>
  );
};

export default Chat;
