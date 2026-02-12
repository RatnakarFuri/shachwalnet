import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", mobile: "", area: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("New Connection Request");
    const body = encodeURIComponent(
      `Name: ${form.name}\nMobile: ${form.mobile}\nArea: ${form.area}\nMessage: ${form.message}`
    );
    window.location.href = `mailto:shachwalsolutions@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-[50px] md:py-[80px] px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10 text-center">Get Connected Today</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact details */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-primary flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-accent" /> Head Office
              </h3>
              <p className="text-muted-foreground text-sm ml-7">
                Ward No. 01, VPO Jibhi<br />Tehsil Banjar (9/28)<br />District Kullu, Himachal Pradesh
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-accent" /> Site Office
              </h3>
              <p className="text-muted-foreground text-sm ml-7">
                Near Old Bus Stand, Main Bazar<br />Banjar, District Kullu
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary flex items-center gap-2 mb-2">
                <Mail className="w-5 h-5 text-accent" /> Email
              </h3>
              <a href="mailto:shachwalsolutions@gmail.com" className="text-sm text-muted-foreground ml-7 hover:text-accent transition-colors">
                shachwalsolutions@gmail.com
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-primary flex items-center gap-2 mb-2">
                <Phone className="w-5 h-5 text-accent" /> Customer Support
              </h3>
              <div className="ml-7 space-y-1">
                <a href="tel:+917018917405" className="block text-sm text-muted-foreground hover:text-accent transition-colors">70189-17405</a>
                <a href="tel:+919816691149" className="block text-sm text-muted-foreground hover:text-accent transition-colors">98166-91149</a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="mobile">Mobile Number</Label>
              <Input id="mobile" type="tel" required value={form.mobile} onChange={(e) => setForm({ ...form, mobile: e.target.value })} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="area">Area</Label>
              <Input id="area" required value={form.area} onChange={(e) => setForm({ ...form, area: e.target.value })} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-1" />
            </div>
            <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg h-11">
              Apply for New Connection
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
