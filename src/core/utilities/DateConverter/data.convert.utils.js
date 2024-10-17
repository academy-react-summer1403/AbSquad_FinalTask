export const handleDateFormat = (dateVal) => {
  const d = new Date(dateVal);
  return d.toLocaleDateString("fa-IR");
};
