import { TEXTSTYLE } from "../../styles/textStyle";

export type LabelProps = {
  isChecked?: boolean;
  contents?: string;
};

// npm install react-icons --save
const Label = ({ isChecked = false, contents = "내용 없음" }: LabelProps) => {
  return (
    <span className={isChecked ? TEXTSTYLE.DONE : TEXTSTYLE.TODO}>
      {contents}
    </span>
  );
};

export default Label;

