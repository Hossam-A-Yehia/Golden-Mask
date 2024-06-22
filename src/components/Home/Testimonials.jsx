import SpecialHeading from "./SpecialHeading";
import IMG from "../../assets/Home/about/about-bg.png";
import Slider from "./TestimonialsSlider/Slider";
export default function Testimonials() {
  return (
    <section id="testimonials" className="mt-[80px] container mx-auto relative">
      <SpecialHeading
        heading="Testimonials"
        title="don't take our word for it"
      />

      <Slider />
    </section>
  );
}
