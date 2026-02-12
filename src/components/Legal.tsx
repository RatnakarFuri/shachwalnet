import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Legal = () => (
  <section className="py-[50px] md:py-[80px] px-4 bg-secondary/30">
    <div className="container mx-auto max-w-3xl">
      <Accordion type="single" collapsible>
        <AccordionItem value="privacy">
          <AccordionTrigger className="text-primary font-semibold">Privacy Policy</AccordionTrigger>
          <AccordionContent className="text-muted-foreground text-sm leading-relaxed space-y-3">
            <p>
              We collect basic customer information such as name, contact details, address proof, and identity documents for service activation, billing, and regulatory compliance.
            </p>
            <p>
              We do not sell or rent customer information. Data is protected using appropriate administrative and technical safeguards.
            </p>
            <p>
              Contact: <a href="mailto:shachwalsolutions@gmail.com" className="text-accent hover:underline">shachwalsolutions@gmail.com</a>
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="terms">
          <AccordionTrigger className="text-primary font-semibold">Terms & Conditions</AccordionTrigger>
          <AccordionContent className="text-muted-foreground text-sm leading-relaxed space-y-3">
            <p>For plans more than 3 months, router security deposit – ₹1000. No Installation Charges.</p>
            <p>For 1 month plan, router security deposit – ₹1000. Installation Charges – ₹1000.</p>
            <p>Documents Required: ID Proof / Address Proof / Passport Size Photo.</p>
            <p>Terms & Conditions may differ as per plan.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </section>
);

export default Legal;
