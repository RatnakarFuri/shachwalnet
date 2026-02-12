import { Wallet, Wifi, MapPin, Eye, Zap, Headphones } from "lucide-react";

const features = [
  { icon: Wallet, title: "Affordable Unlimited Plans", desc: "Budget-friendly broadband for every household." },
  { icon: Wifi, title: "High-Speed & Stable Network", desc: "Consistent speeds powered by fiber & wireless tech." },
  { icon: MapPin, title: "Strong Local Presence", desc: "Serving Banjar, Jibhi & Tirthan communities." },
  { icon: Eye, title: "Transparent Pricing", desc: "No hidden fees. What you see is what you pay." },
  { icon: Zap, title: "Quick Installation", desc: "Fast setup so you're connected without delay." },
  { icon: Headphones, title: "Dedicated Customer Support", desc: "Responsive local support when you need it." },
];

const WhyChooseUs = () => (
  <section className="py-[50px] md:py-[80px] px-4">
    <div className="container mx-auto max-w-7xl text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10">Why Choose Us</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f) => (
          <div key={f.title} className="flex flex-col items-center text-center p-6">
            <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <f.icon className="w-7 h-7 text-accent" />
            </div>
            <h3 className="font-semibold text-primary text-lg mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
