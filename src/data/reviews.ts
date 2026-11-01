export type Review = {
  name: string;
  when: string;
  text: string;
  avatar?: string;
  initial?: string;
  color?: string;
};

export const reviewSummary = {
  name: "Sukuti Ghar Hurstville",
  rating: "4.8",
  count: 16,
  writeReviewHref: "https://g.page/r/CSkPMndIk-7wEBM/review",
};

export const reviews: Review[] = [
  { name: "niraj bhandari", when: "a year ago", text: "Good food with good service and enviroment", avatar: "/images/avatar-niraj.png" },
  { name: "krishna sharma", when: "a year ago", text: "One is dear to me..😀😀😀", initial: "k", color: "#33691e" },
  { name: "Prabin Karki", when: "a year ago", text: "Very good place to hangout....\nCheers", initial: "P", color: "#7e57c2" },
];
