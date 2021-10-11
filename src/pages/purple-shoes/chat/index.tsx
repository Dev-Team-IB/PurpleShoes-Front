import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChatInputView from "./ChatInput";
import { ChatProvider } from "./ChatContext";
const Chat = (props: any) => {
  const manangerName = props.match.params.manager;
  const userName = props.match.params.user;
  return (
    <>
      <ChatProvider>
        <div>Header</div>
        <ChatListView />
        <ChatInputView />
      </ChatProvider>
    </>
  );
};

export default Chat;
