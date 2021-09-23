import { ChangeEvent, useEffect, useState } from "react";
import queryString from "query-string";
import io from "socket.io-client";

const Chat = (props: any) => {
  const roomId = queryString.parse(props.location.search).roomId;
  if (roomId == undefined) {
    return <>wrong room id</>;
  }
  const [state, setState] = useState("");

  const socket = io("http://localhost:5000", {
    path: "/socketchat",
  });
  socket.on("connect", () => {
    console.log("connection server");
  });

  const KeyEventHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      console.log("Type :", state);
      textSubmit();
    }
  };
  const stateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };
  const textSubmit = () => {
    console.log("textSubmit :", state);
    setState("");
  };

  useEffect(() => {
    console.log("entered room : ", roomId);
  }, []);

  return (
    <>
      <div>connected room {roomId}</div>
      <input
        type="text"
        value={state}
        onChange={stateChange}
        onKeyDown={KeyEventHandler}
      />
      <input type="button" value="전송" onClick={textSubmit} />
    </>
  );
};

export default Chat;
