import BuyWithAmazonBtn from "../../call-to-actions";
import ConfigurableCTA from "../../call-to-actions/configurable-cta";

const points = [
  {
    title: "The Accountability Tracker",
    point:
      "Start each day by logging your sleep and screen time from the day before to build awareness of how you spend your time.",
  },
  {
    title: "The Daily Game Plan",
    point:
      "Prioritize your tasks with a clear checklist that maps out your day for targeted action and productivity.",
  },
  {
    title: "The Non-Negotiable's",
    point:
      "Commit to daily habits that enhance well-being – from progressively increasing step goals and hydration to mindful mornings and focused reading.",
  },
  {
    title: "The Gratitude Space",
    point:
      "End each day with positive reflection, noting down moments of gratitude to nurture a positive outlook.",
  },
];

const Journalling = () => {
  return (
    <div className="flex flex-col-reverse gap-8 md:flex-row-reverse md:justify-end md:gap-16 md:items-center">
      <img src="/assets/daily.png" className="md:w-[50%]" />
      <div className="flex flex-col gap-4 md:gap-8">
        <h2 className="font-galderglynn text-3xl md:text-5xl">
          13 weeks of journalling
        </h2>
        <ul className="flex flex-col gap-2 w-[95%]">
          {points.map((point, key) => {
            return (
              <li
                className="relative before:content-['+'] before:absolute before:left-0 before:top-0 before:font-bold"
                key={key}
              >
                <p className="ml-6 font-bold text-lg">{point.title}</p>
                <p className="ml-6">{point.point}</p>
              </li>
            );
          })}
        </ul>
        <ConfigurableCTA ctaText="Start Journalling Now!" />
      </div>
    </div>
  );
};

export default Journalling;
