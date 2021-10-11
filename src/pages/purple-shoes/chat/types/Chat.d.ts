export type ChatHistoryType = {
  manager: string;
  user: string;
  messages: messageType[];
  startDate: string;
  endDate: string;
};

export type messageType = {
  content: string;
  isImage: boolean;
  user: string;
  date: string;
};

export type InputChatType = {
  message: string;
  setMessage: () => void;
  sendMessage: () => void;
  KeyEventHandler: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export type ChatContextType = {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
  messages: messageType[];
};
