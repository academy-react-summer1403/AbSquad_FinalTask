import { MdOutlineHive } from "react-icons/md";
import { GoStack } from "react-icons/go";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { GetLevel } from "../../Services/Api/GetFilterProperties/GetLevel.api.js";
import { GetType } from "../../Services/Api/GetFilterProperties/GetType.api.js";
import { GetTeacher } from "../../Services/Api/GetFilterProperties/GetTeacher.api.js";

const handleLevel = async (GetApi) => {
  const data = await GetApi();
  const array = [];
  data.map((it, index) => {
    array.push({ id: it.id, name: it.levelName });
  });
  return array;
};
const handleTech = async (GetApi) => {
  const data = await GetApi();
  const array = [];
  data.map((it, index) => {
    array.push({ id: it.id, name: it.techName });
  });
  return array;
};
const handleTeacher = async (GetApi) => {
  const data = await GetApi();
  const array = [];
  data.map((it, index) => {
    array.push({ id: it.teacherId, name: it.fullName });
  });
  return array;
};
export const FilterOptions = [
  {
    id: 1,
    filterTitle: "دسته بندی",
    icon: MdOutlineHive,
    label: await handleTech(GetType),
  },
  {
    id: 2,
    filterTitle: "سطح آموزشی",
    icon: GoStack,
    label: await handleLevel(GetLevel),
  },
  //[{ name: "مبتدی" }, { name: "متوسط" }, { name: "پیشرفته" }]
  {
    id: 3,
    filterTitle: "اساتید",
    icon: LiaChalkboardTeacherSolid,
    label: await handleTeacher(GetTeacher),
  },
];
