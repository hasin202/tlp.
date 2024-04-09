import BuyWithAmazonBtn from "../buy-with-amazon-btn";
import JournalContentInfo from "./content-info";

const JournalDescription = () => {
  return (
    <div className="md:w-2/6 flex flex-col justify-between">
      <div className="flex flex-col gap-4 mb-4 md:mb-0">
        <h2 className="font-sans text-xl">Hard Cover Journal</h2>
        <p className="font-sans">
          Embark on a transformative journey with &quot;The Limitless
          Project&quot; – a journal meticulously crafted to guide you through a
          91-day path of self-improvement. With each day structured to foster
          growth, this journal is your daily companion towards a disciplined,
          focused, and fulfilling life.
        </p>
        <JournalContentInfo />
      </div>
      <BuyWithAmazonBtn />
    </div>
  );
};

export default JournalDescription;