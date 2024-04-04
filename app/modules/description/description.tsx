import JournalContentInfo from "./content-info";

const JournalDescription = () => {
  return (
    <div className="md:w-2/6 flex flex-col gap-4">
      <h2 className="font-sans text-xl">Hard Cover Journal</h2>
      <p className="font-sans">
        Embark on a transformative journey with &quot;The Limitless
        Project&quot; – a journal meticulously crafted to guide you through a
        91-day path of self-improvement. With each day structured to foster
        growth, this journal is your daily companion towards a disciplined,
        focused, and fulfilling life.
      </p>
      <JournalContentInfo />
      <a
        className="flex items-center justify-center gap-4 bg-white text-black w-full font-sans rounded py-4"
        target="_blank"
        href="https://www.amazon.co.uk/Limitless-Project-Unlock-Your-Potential/dp/B0CVGVSVPV/ref=sr_1_1?crid=37EE7VBRHG2RG&dib=eyJ2IjoiMSJ9.9GIXRLLkhTA4jEGVUSl_C4PVzXg67BloQ17eh2LZATf6ntC-yDZtOHn-B4tUT0v3xlMwl_GMcY-nfB2RcFC-7LnWG3ul_ILzNJ4OF1IMehwC0hZSxs-ZupHJsl6Ola-yIFy-f0Gc6uWusD24YYO40RVj4YXBNz12CdZ2capRej4ij5nygbqz-8yki8RY2msS1K8ffGLgRZi8rG6CxWDx70ZvquBzfaRWajXGxG5TvxU.ipLeNwBZSUlpAHyRb0pX4ads2oFggsYK_JYPsliaf3U&dib_tag=se&keywords=the+limitless+project&qid=1712180904&sprefix=the+limitless+pr%2Caps%2C95&sr=8-1"
      >
        <img src="/imgs/amazon.svg" className="w-6" />
        <p>Buy On Amazon</p>
      </a>
    </div>
  );
};

export default JournalDescription;
