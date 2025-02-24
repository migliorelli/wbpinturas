export function anos() {
  const timestamp1 = Date.now();
  const timestamp2 = new Date("09/13/1996");

  const millisPorAno = 1000 * 60 * 60 * 24 * 365.25;
  const dif = Math.abs(timestamp1 - timestamp2.getTime());
  return Math.floor(dif / millisPorAno);
}
