export const handleDateFormat = (dateVal = "") => {
  let formattedDate = "";
  const date = new Date(dateVal);
  const d = date.toLocaleString("fa-IR", { day: "numeric" });
  const m = date.toLocaleString("fa-IR", { month: "long" });
  const y = date.toLocaleString("fa-IR", { year: "numeric" });
  formattedDate = d + " " + m + " " + y;

  return formattedDate;
};
