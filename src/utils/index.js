export const getScoreClass = (score) => {
  if (score.includes("A")) return "score--success";
  if (score.includes("B")) return "score--advert";
  if (score.includes("C")) return "score--danger";
};

export const getScoreColor = (score) => {
  if (score.includes("A")) return "var(--color-success-veryhigh)";
  if (score.includes("B")) return "var(--color-advert-veryhigh)";
  if (score.includes("C")) return "var(--color-danger-veryhigh)";
};
