export const skillDataWeb = [
  { id: 1, skill: "HTML", level: "Advanced" },
  { id: 2, skill: "Tailwind CSS", level: "Expert" },
  { id: 3, skill: "JavaScript", level: "Intermediate" },
  { id: 4, skill: "React JS", level: "Advanced" },
  { id: 5, skill: "NextJS", level: "Familiar" },
  { id: 6, skill: "NodeJS", level: "Familiar" },
  { id: 7, skill: "Google Sheet", level: "Intermediate" },
  { id: 8, skill: "Design PH&AE", level: "Intermediate" },
  { id: 9, skill: "JQL", level: "Intermediate" },
  { id: 10, skill: "KosKeshi", level: "Expert" },
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
