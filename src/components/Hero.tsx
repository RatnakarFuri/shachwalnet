import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => (
  <section id="home" className="py-20 md:py-[80px] px-4">
    <div className="container mx-auto max-w-7xl grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight mb-4">
          Always Fast.<br />Always Connected.
        </h1>
        <p className="text-muted-foreground text-lg mb-8 max-w-md">
          Reliable, Affordable & Unlimited Broadband Services for Homes and Businesses in Banjar, Jibhi & Tirthan.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg px-6 h-11">
            <a href="#contact">Get New Connection</a>
          </Button>
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg px-6 h-11">
            <a href="#plans">View Plans</a>
          </Button>
        </div>
      </div>
      <div>
        <img
          src={heroImage}
          alt="High-speed broadband internet service in Himachal Pradesh"
          className="w-full aspect-video object-cover rounded-lg"
          loading="lazy"
        />
      </div>
    </div>
  </section>
);

export default Hero;
