import { Button } from "@/components/ui/button";
import BuyWithAmazonBtn from "../call-to-actions";
import getCountryBasedUrl from "../call-to-actions/use-country-based-url";

const Hero = async () => {
  const url = await getCountryBasedUrl();

  return (
    <div
      id="hero"
      className="relative w-full flex flex-col items-center justify-center min-h-[80vh] md:min-h-[90vh] gap-8 md:pt-6"
    >
      <img
        className=" md:max-w-[35rem] xl:max-w-[40rem] 2xl:max-w-[55rem]"
        src="/assets/hero.webp"
      />
      <div className="flex gap-2 md:gap-4">
        <a href="#mailing_list">
          <Button className="w-40 md:w-44 2xl:w-64">Get A Free Gift!</Button>
        </a>
        <BuyWithAmazonBtn link={url} />
      </div>
      {!url && (
        <div className="max-w-72 md:max-w-[35rem] xl:max-w-[40rem] 2xl:max-w-[55rem] text-xs text-center text-gray-400">
          <p>Sorry, we don&apos;t currently ship to your country.</p>
          <br />
          <p>
            Sign up for our mailing list to stay updated. Something exciting is
            coming soon!
          </p>
        </div>
      )}
    </div>
  );
};

export default Hero;
