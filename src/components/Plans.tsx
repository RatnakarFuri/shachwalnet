import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    speed: "25 Mbps",
    prices: { "1 Month": "₹400", "3 Months": "₹1,150", "6 Months": "₹2,100", "12 Months": "₹3,600" },
    bonuses: { "6 Months": null, "12 Months": null },
    features: ["Unlimited Data", "No Speed Throttling", "24/7 Support"],
    popular: false,
  },
  {
    speed: "50 Mbps",
    prices: { "1 Month": "₹500", "3 Months": "₹1,500", "6 Months": "₹3,000", "12 Months": "₹5,900" },
    bonuses: { "6 Months": "+2 Months Free", "12 Months": "+5 Months Free" },
    features: ["Unlimited Data", "No Speed Throttling", "24/7 Support", "Bonus Validity"],
    popular: false,
  },
  {
    speed: "100 Mbps",
    prices: { "1 Month": "₹700", "3 Months": "₹2,000", "6 Months": "₹4,000", "12 Months": "₹7,800" },
    bonuses: { "6 Months": "+2 Months Free", "12 Months": "+5 Months Free" },
    features: ["Unlimited Data", "No Speed Throttling", "Priority Support", "Bonus Validity"],
    popular: true,
  },
  {
    speed: "200 Mbps",
    prices: { "1 Month": "₹999", "3 Months": "₹2,700", "6 Months": "₹4,500", "12 Months": "₹8,500" },
    bonuses: {},
    features: ["Unlimited Data", "No Speed Throttling", "Priority Support", "Best for Business"],
    popular: false,
  },
  {
    speed: "300 Mbps",
    prices: { "1 Month": "₹1,499", "3 Months": "₹4,200", "6 Months": "₹6,500", "12 Months": "₹11,500" },
    bonuses: {},
    features: ["Unlimited Data", "No Speed Throttling", "Priority Support", "Best for Business"],
    popular: false,
  },
];

const durations = ["1 Month", "3 Months", "6 Months", "12 Months"] as const;

const Plans = () => (
  <section id="plans" className="py-[60px] md:py-[70px] lg:py-[90px] px-4 bg-[hsl(220,20%,97.5%)]">
    <div className="container mx-auto max-w-7xl text-center">
      <h2 className="text-[26px] md:text-[34px] lg:text-[38px] font-bold text-primary mb-2 tracking-tight">
        Our Broadband Plans
      </h2>
      <p className="text-[15px] text-[hsl(220,6%,50%)] mb-10 md:mb-14">
        Affordable Unlimited Internet Plans for Banjar, Jibhi &amp; Tirthan
      </p>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-7 sm:gap-8 lg:gap-10">
        {plans.map((p) => (
          <div
            key={p.speed}
            className={`relative bg-card rounded-[14px] px-6 pt-6 pb-6 text-left transition-all duration-200 ease-out flex flex-col
              ${p.popular
                ? "border-2 border-accent shadow-[0_4px_24px_-4px_hsl(38,92%,56%,0.18)]"
                : "border border-[hsl(220,14%,91%)] shadow-[0_2px_12px_-4px_hsl(220,20%,60%,0.10)]"
              }
              hover:-translate-y-1 hover:shadow-[0_8px_28px_-6px_hsl(220,20%,60%,0.16)]`}
          >
            {/* Popular badge */}
            {p.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <Badge className="bg-accent text-accent-foreground border-0 px-3.5 py-1 text-xs font-semibold rounded-full shadow-sm">
                  Most Popular
                </Badge>
              </div>
            )}

            {/* Speed title */}
            <h3 className="text-[20px] font-semibold text-primary tracking-[-0.01em] mt-2">
              Up to {p.speed}
            </h3>

            {/* Price — show 1 month as headline */}
            <div className="mt-4">
              <span className="text-[30px] md:text-[36px] lg:text-[40px] font-bold text-primary leading-none tracking-tight">
                {p.prices["1 Month"]}
              </span>
              <span className="text-[14px] text-[hsl(220,6%,60%)] ml-1 font-normal">/month</span>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-border mt-5 mb-4" />

            {/* Duration pricing rows */}
            <div className="space-y-4 mb-5">
              {durations.map((d) => (
                <div key={d} className="flex items-baseline justify-between text-[14px]">
                  <span className="text-[hsl(220,6%,44%)] font-medium">{d}</span>
                  <div className="text-right">
                    <span className="font-semibold text-primary">{p.prices[d]}</span>
                    {p.bonuses[d] && (
                      <span className="block text-[12px] font-semibold text-accent mt-0.5">{p.bonuses[d]}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="space-y-2.5 mb-6 flex-1">
              {p.features.map((f) => (
                <div key={f} className="flex items-center gap-2.5 text-[15px] text-[hsl(220,6%,27%)] font-medium">
                  <Check size={16} className="text-accent shrink-0" strokeWidth={2.5} />
                  {f}
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button
              asChild
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-[10px] h-12 text-[16px] font-semibold transition-transform duration-200 hover:scale-[1.02]"
            >
              <a href="#contact">Get This Plan</a>
            </Button>
          </div>
        ))}
      </div>

      {/* Plan details */}
      <div className="mt-12 text-[15px] text-[hsl(220,6%,50%)] space-y-1">
        <p><strong className="text-primary">Speed:</strong> Up to selected Mbps</p>
        <p><strong className="text-primary">Data:</strong> Unlimited Data</p>
        <p><strong className="text-primary">Bonus:</strong>{" "}
          <span className="text-accent font-semibold">Select plans include bonus validity for long-term subscriptions</span>
        </p>
      </div>
    </div>
  </section>
);

export default Plans;
