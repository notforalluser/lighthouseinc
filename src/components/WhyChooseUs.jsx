import {
  UserCheck,
  Settings,
  Target,
  Zap,
  PiggyBank,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    title: "Certified Curriculum",
    description:
      "Industry-backed programs designed to match current job needs and skills.",
    icon: UserCheck,
  },

  {
    title: "Experienced Mentors",
    description:
      "Mentors and coaches who have worked in training, hiring, and tech operations.",
    icon: Settings,
  },

  {
    title: "Placement Support",
    description:
      "Mock interviews, resume reviews, and employer-ready preparation.",
    icon: Target,
  },

  {
    title: "Recruitment Network",
    description:
      "A growing employer network that connects you with pre-vetted candidates.",
    icon: Zap,
  },

  {
    title: "Flexible Programs",
    description:
      "Online and blended delivery options for working professionals.",
    icon: PiggyBank,
  },

  {
    title: "Proven Outcomes",
    description: "High placement rates and measurable skill growth.",
    icon: TrendingUp,
  },
];

function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-28 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-red-700 font-semibold uppercase tracking-[4px]">
            Why Lighthouse Inc.
          </p>

          <h2 className="heading-font text-4xl mt-4">
            Results Driven Training
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-md card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-5">
                  <Icon size={26} className="text-red-700" />
                </div>

                <h3 className="font-bold text-xl mb-3">{item.title}</h3>

                <p className="text-slate-500 leading-7">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
