import { DataType, Point } from "./types";

const points: Point[] = [
  {
    title: "See your progress at a glance",
    info: "As days turn to weeks and weeks into months this matrix will show the journey of your dedication and progress. It will become a visual guide to easily show you when you were locked in and not so locked in on your journey.",
  },
  {
    title: "Feel a sense of achievement",
    info: "Every shaded box celebrates a promise kept and marks a step towards the person you're becoming. Now that's something to be proud of.",
  },
];

const matrixData: DataType = {
  img: "/assets/matrix.png",
  title: "The Limitless Matrix",
  points: points,
  ctaText: "Launch Your Limitless Journey!",
  imgPositionLeft: false,
};

export default matrixData;
