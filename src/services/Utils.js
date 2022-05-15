const upto2Decimal = (num) => Math.round(num * 100) / 100;

const condenseViews = (views) => {
  const thousand = 1000;
  const million = 1000000;
  const billion = 1000000000;

  if (views > billion) return `${upto2Decimal(views / billion)}B`;
  else if (views > million) return `${upto2Decimal(views / million)}M`;
  else if (views > thousand) return `${upto2Decimal(views / thousand)}K`;

  return views;
};

const timeStringTransfrom = (time) => {
  time = time.substring(2, time.length - 1);
  time = time.replace("H", ":").replace("M", ":");
  time = time
    .split(":")
    .map((unit) =>
      Number(unit).toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })
    )
    .join(":");

  if (time.length == 2) time = ["00", time].join(":");
  return time;
};

const dateTimeAgo = (dateString) => {
  let vidDate = new Date(dateString);
  let today = new Date();

  if (vidDate.getFullYear() !== today.getFullYear())
    return `${today.getFullYear() - vidDate.getFullYear()}Y ago`;

  if (vidDate.getMonth() !== today.getMonth())
    return `${today.getMonth() - vidDate.getMonth()}M ago`;

  if (vidDate.getDay() !== today.getDay())
    return `${today.getDay() - vidDate.getDay()}D ago`;

  return "Now";
};

export { condenseViews, timeStringTransfrom, dateTimeAgo };
