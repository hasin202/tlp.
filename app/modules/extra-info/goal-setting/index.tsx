import ConfigurableCTA from "../../call-to-actions/configurable-cta";

const goals = [
  "Start your journey by following a goal setting framework inspired by warren buffet.",
  "Think about 25 goals you want to achieve at some point in your life.",
  "Pick the 5 goals that would have the biggest positive impact on you if you could complete them now.",
  "Set milestones and tick them of as you get closer to achieving them.",
];

const GoalSetting = () => {
  return (
    <div className="flex flex-col gap-8 md:flex-row-reverse md:justify-end md:gap-16 md:items-center">
      <div className="flex flex-col gap-4 md:gap-8">
        <h2 className="font-galderglynn text-3xl md:text-5xl">
          Goal setting guidance
        </h2>
        <ul className="flex flex-col gap-2">
          {goals.map((goal, key) => {
            return (
              <li
                className="relative before:content-['+'] before:absolute before:left-0 before:top-0"
                key={key}
              >
                <p className="ml-6">{goal}</p>
              </li>
            );
          })}
        </ul>
        <ConfigurableCTA ctaText="Achieve Your Goals!" />
      </div>
      <img src="/assets/goals.png" className="md:w-[50%]" />
    </div>
  );
};

export default GoalSetting;
