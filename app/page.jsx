import Image from "next/image";
import ReviewCards from "./components/reviewCards";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Page() {
  return (
    <>
      <section className="section-landing">
        <div className="landing">
          <div className="landing-content">
            <h1 className="landing-heading">Finding Nemo</h1>
            <p className="landing-text">
              At Finding Nemo, we blend the rich traditions of Japanese cuisine
              with a modern twist. Our chefs use only the freshest ingredients
              to craft sushi, sashimi, and Japanese dishes that delight the
              senses.
            </p>
            <a className="landing-cta" href="./menu">
              View Full Menu
            </a>
          </div>

          <div className="center-box">
            <img
              src="/images/landing-page-sushi.png"
              className="landing-image"
              alt="Illustration of a sushi"
            />
          </div>
        </div>
      </section>
      <section className="section-why">
        <div className="max-width">
          <h2 className="section-why-title">Why Choose Us?</h2>

          <div className="container-flex-card">
            <WhyChooseUs />
          </div>
        </div>
      </section>

      <section className="section-review">
        <div className="max-width">
          <h2>Whats the word on the street?</h2>
          <ReviewCards />
        </div>
      </section>
    </>
  );
}
