export const parseDate = (originDate) => {
  const date = new Date(originDate);

  const dateString =
    date.getFullYear() +
    "年" +
    (date.getMonth() + 1) +
    "月" +
    date.getDate() +
    "日";

  return dateString;
};
