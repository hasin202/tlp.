import MailInput from "./input";

const MailingList = () => {
  return (
    <div
      id="mailing_list"
      className="flex flex-col gap-8 items-center justify-between w-full px-4"
    >
      <h1 className="text-2xl font-bold text-center">
        Want a Free Wallpaper Pack?
      </h1>
      <p className="w-full md:w-[24rem] text-center">
        Sign up to the limitless mailing list for deals, updates and improvement
        insights.
      </p>
      <MailInput />
    </div>
  );
};

export default MailingList;
