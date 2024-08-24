const formatDate = (date: string): string => {
  const listMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const monthName = listMonth[parseInt(month) - 1];
  return `${monthName} ${year}`;
};

export default formatDate;
