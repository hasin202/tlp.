import MailInput from "./input";

const MailingList = () => {
  return (
    <div className="flex flex-col gap-8 items-center justify-between w-full">
      <h1 className="text-2xl font-bold">Get a Free Gift!</h1>
      <p className="w-[24rem] text-center">
        Sign up to the limitless mailing list for deals, updates and improvement
        insights.
      </p>
      <MailInput />
    </div>
  );
};

export default MailingList;
