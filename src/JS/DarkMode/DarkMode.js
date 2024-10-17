export const HandleDarkMode = (mode) => {
  const htmlTag = document.getElementsByTagName("html");
  if (mode == "on") {
    htmlTag[0].classList.add("dark");
  } else if (mode == "off") {
    htmlTag[0].classList.remove("dark");
  }
};
