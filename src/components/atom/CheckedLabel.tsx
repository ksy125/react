import { ERROR } from "../../constants/errorMessage";
import { TEXTSTYLE } from "../../styles/textStyle";

export type CheckedLabelProps = {
  isChecked?: boolean;
  contents?: string;
};

// npm install react-icons --save
const CheckedLabel = ({
  isChecked = false,
  contents = ERROR.NOCONTENT,
}: CheckedLabelProps) => {
  return (
    <span className={isChecked ? TEXTSTYLE.DONE : TEXTSTYLE.TODO}>
      {contents}
    </span>
  );
};

export default CheckedLabel;
