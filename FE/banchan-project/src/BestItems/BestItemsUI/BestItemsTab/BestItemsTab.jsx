import BestItemsTabTitle from "./BestItemsTabTitle";

const BestItemsTab = ({ titleList, setBestItemsData, URL }) => {
  return (
    <>
      <BestItemsTabTitle
        {...{ titleList, setBestItemsData, URL }}
      ></BestItemsTabTitle>
    </>
  );
};

export default BestItemsTab;
