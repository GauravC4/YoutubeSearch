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

export { condenseViews };
