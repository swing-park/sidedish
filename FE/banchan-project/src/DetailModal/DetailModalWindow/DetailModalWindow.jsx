import { useState, useEffect } from "react";
import DetailMainImage from "./DetailMainImage";
import ThumbNails from "./ThumbNails/ThumbNails";
import ItemInfo from "./ItemInfo/ItemInfo";
import Delivery from "./Delivery/Delivery";
import Count from "./Count/Count";
import Prices from "./Prices/Prices";
import RecommendedItems from "./RecommendedItems/RecommendedItems";
import * as S from "../DetailModalStyles";
import * as CS from "@/Styles/commonStyles";

const DetailModalWindow = (props) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [mainImg, setMainImg] = useState(null);
  const [count, setCount] = useState(0);
  const [stockOverFlag, setStockOverFlag] = useState(false);

  const getData = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        if (json.message) {
          throw Error(json.message);
        } else {
          setData(json);
          setMainImg(json.main_image);
        }
      })
      .catch((err) => {
        console.error(err);
        setError(true);
      });
  };

  const handleMainImg = ({ target: { src } }) => {
    setMainImg(src);
  };

  const handleStockOver = (boolean) => {
    setStockOverFlag(boolean);
  };

  const manageCountLimit = ({
    countNumber,
    lowerLimit = 0,
    upperLimit = 30,
  }) => {
    if (countNumber < lowerLimit) return lowerLimit;
    else if (countNumber > upperLimit) return upperLimit;
    else {
      return countNumber;
    }
  };

  useEffect(() => {
    getData(props.detailUrl);
  }, [props.detailUrl]);

  if (!data || error) return null;

  return (
    <>
      <S.CloseButtonWrapper>
        <CS.Button.CLOSE_BUTTON onClick={props.handleModalFlag} />
      </S.CloseButtonWrapper>
      <S.DetailModalWindow>
        <S.DetailWrapper>
          <S.DetailModalPropWrapper>
            <CS.Box.FLEX_COLUMN_BOX>
              <DetailMainImage mainImg={mainImg} />
              <ThumbNails
                thumbNails={data.thumb_images}
                handleMainImg={handleMainImg}
              />
            </CS.Box.FLEX_COLUMN_BOX>
          </S.DetailModalPropWrapper>

          <S.DetailModalPropWrapper>
            <ItemInfo data={data} />
            <Delivery data={data} />
            <Count
              count={manageCountLimit({
                countNumber: count,
              })}
              setCount={setCount}
              stock={data.stock}
              handleStockOver={handleStockOver}
            />
            <Prices
              count={manageCountLimit({
                countNumber: count,
              })}
              item_id={data.item_id}
              price={data.s_price}
              stock={data.stock}
              stockOverFlag={stockOverFlag}
              handleModalFlag={props.handleModalFlag}
            />
          </S.DetailModalPropWrapper>
        </S.DetailWrapper>

        <RecommendedItems
          recommended={data.recommended}
          handleClickCard={props.handleClickCard}
        />
      </S.DetailModalWindow>
    </>
  );
};

export default DetailModalWindow;
