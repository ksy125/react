import { CiMenuBurger } from "react-icons/ci";
import { TEXTSTYLE } from "../../styles/textStyle";
import { ERROR } from "../../constants/errorMessage";

export type PureLabelProps = {
  contents?: string;
};

// npm install react-icons --save
const PureLabel = ({ contents = ERROR.NOCONTENT }: PureLabelProps) => {
  return <span className="text-white font-bold text-lg">{contents}</span>;
};

export default PureLabel;
