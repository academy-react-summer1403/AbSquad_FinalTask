import HouseIcon from "../../../assets/Svgs/Header/HamMenu/house.svg";
import BookIcon from "../../../assets/Svgs/Header/HamMenu/book.svg";
import CellIcon from "../../../assets/Svgs/Header/HamMenu/cellphone.svg";
import NewsIcon from "../../../assets/Svgs/Header/HamMenu/news.svg";
const NavLinks = [
  {
    img: HouseIcon,
    title: "خانه",
    desc: "صفحه اصلی",
    navRoute: "/",
  },
  {
    img: BookIcon,
    title: "دوره ها",
    desc: "تمامی دوره های برگزار شده یا درحال برگزاری",
    navRoute: "/CoursePage",
  },
  {
    img: CellIcon,
    title: "اخبار و مقالات",
    desc: "خبر های پژوهشگاه و مقالاتی مرتبط با برنامه نویسی و ...",
    navRoute: "/NewsPage",
  },
  { img: NewsIcon, title: "ارتباط با ما", desc: "", navRoute: "/" },
];
export default NavLinks;
