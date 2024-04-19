import SellingPoint from "./selling-point";
import goalData from "./data/goal-data";
import journallingData from "./data/journalling-data";
import reviewsData from "./data/reviews-data";
import matrixData from "./data/matrix-data";
const SellingPointsContainer = () => {
  return (
    <>
      <SellingPoint data={goalData} />
      <SellingPoint data={journallingData} />
      <SellingPoint data={reviewsData} />
      <SellingPoint data={matrixData} />
    </>
  );
};

export default SellingPointsContainer;
