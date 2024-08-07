import { useState } from "react";
import Label from "../atom/CheckedLabel";
import RoundCheckBox from "../atom/RoundCheckBox";
import TrashIcon from "../atom/TrashIcon";
import AddButton from "../atom/AddButton";
import CheckedLabel from "../atom/CheckedLabel";

// SOLID = S[단일책임] ? ? ? D[역전 의존성]
// 단일 책임 : 함수나 클래스는 한 가지 기능만 수행해라.
// 역전 의존성 : 작은 것부터 큰 것 순서대로 만들어라.

export type TodoItemProps = {
  id: number;
  contents: string;
  onDelete?: () => void;
};

const TodoItem = ({ contents, onDelete }: TodoItemProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleCheck = () => setIsChecked((prev) => !prev);

  const obj = {
    roundCheckBox: {
      isChecked,
      handleCheck,
    },
    CheckedlLabel: {
      isChecked, // Label.tsx -> TEXTSTYLE.DONE(true) : TEXTSTYLE.TODO(false)
      contents, // contents 없으면 "내용 없음"으로 나옴
    },
    trashIcon: {
      onDelete,
    },
  };

  return (
    <div className="flex items-center gap-5">
      <RoundCheckBox {...obj.roundCheckBox} />
      <CheckedLabel {...obj.CheckedlLabel} />
      {isChecked && <TrashIcon {...obj.trashIcon} />}
    </div>
  );
};

export default TodoItem;
