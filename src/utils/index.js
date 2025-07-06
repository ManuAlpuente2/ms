export const getScoreClass = (score) => {
  if (score.includes("A")) return "score--success";
  if (score.includes("B")) return "score--advert";
  if (score.includes("C")) return "score--danger";
};
