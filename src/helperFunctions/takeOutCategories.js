export const takeOutCategories = (arr) => {
  // The biggest cateogry id is 24

  const categories1 = arr
    .filter((obj) => obj.category_id === 6)
    .map((obj, index) => {
      obj.value = (index + 1) * 100;
      return obj;
    });
  const categories2 = arr
    .filter((obj) => obj.category_id === 2)
    .map((obj, index) => {
      obj.value = (index + 1) * 100;
      return obj;
    });
  const categories3 = arr
    .filter((obj) => obj.category_id === 3)
    .map((obj, index) => {
      obj.value = (index + 1) * 100;
      return obj;
    });
  const categories4 = arr
    .filter((obj) => obj.category_id === 4)
    .map((obj, index) => {
      obj.value = (index + 1) * 100;
      return obj;
    });
  const categories5 = arr
    .filter((obj) => obj.category_id === 7)
    .map((obj, index) => {
      obj.value = (index + 1) * 100;
      return obj;
    });

  const resArr = [
    categories1,
    categories2,
    categories3,
    categories4,
    categories5,
  ];

  return resArr;
};
