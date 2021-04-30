import * as S from "../../BestItemsStyles";
import * as CS from "@/Styles/commonStyles";

const BestItemsHoverText = ({ deliveryType }) => {
  return deliveryType ? (
    <>
      <S.BestItemsHoverTopText>
        <CS.ColorFont.WHITE_XL_BOLD>
          {deliveryType[0]}
        </CS.ColorFont.WHITE_XL_BOLD>
      </S.BestItemsHoverTopText>
      <S.BestItemsHoverBottomText>
        <CS.ColorFont.WHITE_XL_BOLD>
          {deliveryType[1]}
        </CS.ColorFont.WHITE_XL_BOLD>
      </S.BestItemsHoverBottomText>
    </>
  ) : null;
};

export default BestItemsHoverText;
