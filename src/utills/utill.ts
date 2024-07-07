import { Dispatch, SetStateAction } from "react";
import { TodoItemProps } from "../components/molecule/Todoitem";
import { APIKEY } from "../constants/apiKey";
import { ERROR } from "../constants/errorMessage";

// programmer == 아키텍처
export const alarm = () => alert(ERROR.NOFUNCTION);
export const userInput = (msg: string) => prompt(msg) || ERROR.NOCONTENT;
// JSON.stringify() : obj -> string
// localStorage.setItem(String(id), JSON.stringify(newData));
export const localSet = (value: any) =>
  localStorage.setItem(APIKEY.LOCAL, JSON.stringify(value));
export const localGet = () => localStorage.getItem(APIKEY.LOCAL) || "[]";

type initializeTodoListParams = {
  setTodoitems: Dispatch<SetStateAction<TodoItemProps[]>>;
  setId: Dispatch<SetStateAction<number>>;
};

export const initializeTodoListData = ({
  setTodoitems,
  setId,
}: initializeTodoListParams) => {
  const mappedArray = JSON.parse(localGet()).map((v: any, i: number) => ({
    id: i,
    contents: v.contents,
  }));
  localSet(mappedArray);
  setTodoitems(mappedArray); // 정석 setTodoitems((prev)=>...)
  setId(mappedArray.length);
};

