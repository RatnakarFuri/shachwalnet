import { Button } from "@/components/ui/button";

const plans = [
  { speed: "25 Mbps", prices: ["₹400", "₹1,150", "₹2,100", "₹3,600"], bonuses: [null, null, null, null] },
  { speed: "50 Mbps", prices: ["₹500", "₹1,500", "₹3,000", "₹5,900"], bonuses: [null, null, "+2 Months Free", "+5 Months Free"] },
  { speed: "100 Mbps", prices: ["₹700", "₹2,000", "₹4,000", "₹7,800"], bonuses: [null, null, "+2 Months Free", "+5 Months Free"] },
  { speed: "200 Mbps", prices: ["₹999", "₹2,700", "₹4,500", "₹8,500"], bonuses: [null, null, null, null] },
  { speed: "300 Mbps", prices: ["₹1,499", "₹4,200", "₹6,500", "₹11,500"], bonuses: [null, null, null, null] },
];

const durations = ["1 Month", "3 Months", "6 Months", "12 Months"];

const Plans = () => (
  <section id="plans" className="py-[50px] md:py-[80px] px-4 bg-background">
    <div className="container mx-auto max-w-7xl text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">Our Broadband Plans</h2>
      <p className="text-muted-foreground mb-10">Affordable Unlimited Internet Plans for Banjar, Jibhi & Tirthan</p>

      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-primary text-primary-foreground">
              <th className="py-3 px-4 text-left rounded-tl-lg">Speed</th>
              {durations.map((d) => (
                <th key={d} className="py-3 px-4 last:rounded-tr-lg">{d}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {plans.map((p, i) => (
              <tr key={p.speed} className={i % 2 === 0 ? "bg-background" : "bg-secondary/50"}>
                <td className="py-4 px-4 font-semibold text-primary text-left border-b border-border">Up to {p.speed}</td>
                {p.prices.map((price, j) => (
                  <td key={j} className="py-4 px-4 border-b border-border text-center">
                    <span className="font-semibold">{price}</span>
                    {p.bonuses[j] && (
                      <span className="block text-xs font-semibold text-accent mt-1">{p.bonuses[j]}</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-4">
        {plans.map((p) => (
          <div key={p.speed} className="border border-border rounded-lg p-4 text-left">
            <h3 className="font-bold text-primary mb-3">Up to {p.speed}</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {durations.map((d, j) => (
                <div key={d} className="bg-secondary/50 rounded-lg p-3 text-center">
                  <div className="text-muted-foreground text-xs mb-1">{d}</div>
                  <div className="font-semibold">{p.prices[j]}</div>
                  {p.bonuses[j] && (
                    <div className="text-xs font-semibold text-accent mt-1">{p.bonuses[j]}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Plan details */}
      <div className="mt-8 text-sm text-muted-foreground space-y-1">
        <p><strong>Speed:</strong> Up to selected Mbps</p>
        <p><strong>Data:</strong> Unlimited Data</p>
        <p><strong>Bonus:</strong> <span className="text-accent font-semibold">Select plans include bonus validity for long-term subscriptions</span></p>
      </div>

      <Button asChild className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg px-8 h-11">
        <a href="#contact">Get New Connection</a>
      </Button>
    </div>
  </section>
);

export default Plans;
