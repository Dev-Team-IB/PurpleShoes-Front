// 추후에 기능이 추가 될시 View와 Component로 분리 할 예정

import { InputChatType } from "./types/Chat";

const ChatInput = (props: InputChatType) => {
  return (
    <div>
      <input
        type="text"
        value={props.message}
        onChange={props.setMessage}
        onKeyDown={props.KeyEventHandler}
      />
      <input type="button" onClick={props.sendMessage} />
    </div>
  );
};

export default ChatInput;
