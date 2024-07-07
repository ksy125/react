import { useEffect, useState } from "react";
import TodoItem, { TodoItemProps } from "../molecule/Todoitem";
import {
  initializeTodoListData,
  localGet,
  localSet,
  userInput,
} from "../../utills/utill";
import AddButton from "../atom/AddButton";
import { INFO } from "../../constants/infoMessage";

// class : 시작하자마자(){localStrogate.get()}
// fc : useEffect(()=>{},[])

const Body = () => {
  const [id, setId] = useState<number>(0);
  const [todoitems, setTodoitems] = useState<TodoItemProps[]>([]);

  const addItem = () => {
    const newData = { id, contents: userInput(INFO.TODO) };
    setTodoitems((prev) => {
      const updatedData = [...prev, newData]; //저장할 데이터
      localSet(updatedData);
      return [...prev, newData];
    });
    setId((prev) => prev + 1);
  };

  const deleteItem = (id: number) => {
    setTodoitems((prev) => {
      const updatedData = prev.filter((value) => value.id !== id);
      localSet(updatedData);
      return updatedData;
    });
  };

  // useEffect : 재렌더링 해 주는 함수
  useEffect(() => {
    // utill.ts -> initializeTodolistData()
    initializeTodoListData({ setTodoitems, setId });
  }, []);

  return (
    <div className="flex flex-col items-center max-w-lg">
      <div className="bg-white p-16 shadow-lg w-full">
        {todoitems.map((v, i) => (
          <TodoItem key={v.id} {...v} onDelete={() => deleteItem(v.id)} />
        ))}
      </div>
      <div className="relative bottom-8">
        <AddButton handleClick={addItem} />
      </div>
    </div>
  );
};

export default Body;
