import ConfigurableCTA from "../../call-to-actions/configurable-cta";

const points = [
  "Engage in deep reflection with a review that helps align your actions with your goals.",
  "Set intentions and plan actionable steps for the week ahead.",
  "Track and build up to three key habits, reinforcing the discipline essential for success.",
];

const WeeklyReviews = () => {
  return (
    <div className="flex flex-col gap-8 md:flex-row-reverse md:justify-end md:gap-16 md:items-center">
      <div className="flex flex-col gap-4 md:gap-8">
        <h2 className="font-galderglynn text-3xl md:text-5xl">
          Goal setting guidance
        </h2>
        <ul className="flex flex-col gap-2">
          {points.map((goal, key) => {
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
        <ConfigurableCTA ctaText="Set yourself up for Success" />
      </div>
      <img src="/assets/review.png" className="md:w-[50%]" />
    </div>
  );
};

export default WeeklyReviews;
