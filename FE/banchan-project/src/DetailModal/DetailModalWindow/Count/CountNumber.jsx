import * as S from "../../DetailModalStyles";
import * as CS from "@/Styles/commonStyles";

const CountNumber = ({ props }) => {
  return (
    <S.CountNumber>
      <CS.ColorFont.GRAY1_S_NORMAL>{props.count}</CS.ColorFont.GRAY1_S_NORMAL>
    </S.CountNumber>
  );
};

export default CountNumber;
