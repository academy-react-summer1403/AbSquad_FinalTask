export const handleActivePages = (setIsActive, loc) => {
  let index = 0;
  switch (loc) {
    case "/":
      index = 0;
      break;
    case "/CoursePage":
      index = 1;
      break;
    case "/NewsPage":
      index = 2;
      break;
    case "/ContactUs":
      index = 3;
      break;
  }
  setIsActive(index);
};
