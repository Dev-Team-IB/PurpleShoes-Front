import { ChangeEvent, useEffect, useState } from "react";
import queryString from "query-string";
import io, { Socket, Manager } from "socket.io-client";
import { ChatEvent } from "./ChatEvent";
import { DefaultEventsMap } from "socket.io-client/build/typed-events";

type ChatType = {
  list: [{ user: string; time: string; content: string }];
};

let socket: Socket<DefaultEventsMap, DefaultEventsMap>;

const Chat = (props: any) => {
  const userId = queryString.parse(props.location.search).user;

  if (userId == undefined) {
    return <>wrong room id</>;
  }

  const [state, setState] = useState("");
  const [chatHistory, setChatHistory] = useState<string[]>([]);

  //https://socket.io/docs/v4/client-api/#event-connect

  const KeyEventHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      sendMessage();
    }
  };
  const stateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };
  const sendMessage = () => {
    if (state === "") return;
    socket.emit(ChatEvent.NEW_MESSAGE, state);
    setState("");
  };

  useEffect(() => {
    console.log("entered room : ", userId);

    socket = io("http://localhost:5000", {
      path: "/socketchat",
      reconnectionDelayMax: 10000,
      query: {
        user: `${userId}`,
      },
    });
    socket.on("connect", () => {
      console.log("connection server");
      socket.emit(ChatEvent.CHAT_HISTROY);
    });
    socket.on(ChatEvent.NEW_MESSAGE, (message: string) => {
      setChatHistory((chatHistory) => chatHistory.concat(message));
      console.log(chatHistory);
    });
    socket.on(ChatEvent.CHAT_HISTROY, () => {
      //send client to history
    });
  }, []);

  return (
    <>
      <div>connected room {userId}</div>
      <input
        type="text"
        value={state}
        onChange={stateChange}
        onKeyDown={KeyEventHandler}
      />
      <input type="button" value="전송" onClick={sendMessage} /> <br />
      {chatHistory?.map((e, i) => {
        return <div key={i}>{e}</div>;
      })}
    </>
  );
};

export default Chat;
