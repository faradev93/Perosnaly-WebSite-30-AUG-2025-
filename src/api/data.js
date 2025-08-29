export const skillDataWeb = [
  { id: 5, skill: "HTML", level: "Advanced" },
  { id: 2, skill: "CSS", level: "Expert" },
  { id: 1, skill: "JavaScript", level: "Intermediate" },
  { id: 3, skill: "Tailwind", level: "Advanced" },
  { id: 4, skill: "React JS", level: "Advanced" },
  { id: 7, skill: "NextJS", level: "Familiar" },
  { id: 6, skill: "NodeJS", level: "Familiar" },
  ,
];

export const getLevelPercent = (level) => {
  switch (level) {
    case "Expert":
      return 100;
    case "Advanced":
      return 80;
    case "Intermediate":
      return 50;
    case "Familiar":
      return 30;
    default:
      return 50;
  }
};
