export const pageCalculation = (
  courseNum,
  type,
  setTotalPageResultArray,
  setTotalPageResult
) => {
  if (type == "Grid") {
    const result = Math.ceil(courseNum / 9);
    // an auxilary array
    const array = [];
    for (let i = 1; i <= result; i++) {
      array.push({ pageNumber: i });
    }
    setTotalPageResultArray([...array]);
    setTotalPageResult(result);
  } else if (type == "Table") {
    const result = Math.ceil(courseNum / 8);
    const array = [];
    for (let i = 1; i <= result; i++) {
      array.push({ pageNumber: i });
    }
    setTotalPageResultArray([...array]);
    setTotalPageResult(result);
  }
};
