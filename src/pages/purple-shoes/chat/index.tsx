import { ChangeEvent, useEffect, useState } from "react";
import queryString from "query-string";

const Chat = (props: any) => {
  const roomId = queryString.parse(props.location.search).roomId;
  const [state, setState] = useState("");
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
    console.log("hello world!");
    console.log("entered room : ", roomId);
  }, []);

  return (
    <>
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
