import coverageImage from "@/assets/coverage-image.jpg";

const Coverage = () => (
  <section id="coverage" className="py-[50px] md:py-[80px] px-4">
    <div className="container mx-auto max-w-7xl text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Currently Serving</h2>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {["Banjar", "Jibhi", "Tirthan"].map((area) => (
          <span key={area} className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-medium">
            {area}
          </span>
        ))}
      </div>
      <img
        src={coverageImage}
        alt="Broadband coverage in Banjar Jibhi Tirthan Himachal Pradesh"
        className="w-full max-w-4xl mx-auto aspect-video object-cover rounded-lg mb-6"
        loading="lazy"
      />
      <p className="text-muted-foreground max-w-2xl mx-auto">
        We are continuously expanding our network across rural and semi-urban Himachal Pradesh to deliver dependable broadband connectivity.
      </p>
    </div>
  </section>
);

export default Coverage;
