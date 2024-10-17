import { MdOutlineHive } from "react-icons/md";

import { GetCategory } from "../../Services/Api/GetNewsFilterProperties/GetCategory.api";
const handleCategory = async (GetApi) => {
  const data = await GetApi();
  const array = [];
  data.map((it, index) => {
    array.push({
      id: it.id,
      name: it.categoryName,
    });
  });
  return array;
};

export const NewsFilterOptions = [
  {
    id: 1,
    filterTitle: "دسته بندی",
    icon: MdOutlineHive,
    label: await handleCategory(GetCategory),
  },
];
