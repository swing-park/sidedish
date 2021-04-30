import { useState, useEffect } from "react";
import BestItemsTitle from "./BestItemsTitle";
import BestItemsTab from "./BestItemsUI/BestItemsTab/BestItemsTab";
import BestItemsCardWrapper from "./BestItemsUI/BestItemsCardWrapper";
import URL from "@/utils/URL";
import * as S from "./BestItemsStyles";

const BestItems = ({ handleClickCard }) => {
  const [titleList, setTitleList] = useState([]);
  const [bestItemsData, setBestItemsData] = useState({});

  const getTitleListData = async () => {
    const rawData = await fetch(URL.BESTDISH).then((res) => res.json());

    return rawData.reduce((titleList, title) => {
      titleList.push(title.best_category_name);
      return titleList;
    }, []);
  };

  const getBestItemsData = async (id) => {
    const rawData = await fetch(`${URL.BESTDISH}/${id}`).then((res) =>
      res.json()
    );
    return rawData;
  };

  useEffect(() => {
    getTitleListData().then((res) => {
      setTitleList(res);
    });
  }, []);

  useEffect(() => {
    getBestItemsData(1).then((res) => {
      setBestItemsData(res);
    });
  }, []);

  if (!bestItemsData) return null;

  return (
    <S.BestItems>
      <BestItemsTitle />
      <BestItemsTab
        URL={URL.BESTDISH}
        {...{ titleList, setBestItemsData }}
      ></BestItemsTab>
      <BestItemsCardWrapper
        {...{ bestItemsData, handleClickCard }}
      ></BestItemsCardWrapper>
    </S.BestItems>
  );
};

export default BestItems;
