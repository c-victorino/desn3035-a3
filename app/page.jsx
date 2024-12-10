import Image from "next/image";

export default function Page() {
  return (
    <><section className="section-landing">
      <div className="landing">
        <div className="landing-content">
          <h1 className="landing-heading">Finding Nemo</h1>
          <p className="landing-text">
            At Finding Nemo, we blend the rich traditions of Japanese cuisine
            with a modern twist. Our chefs use only the freshest ingredients to
            craft sushi, sashimi, and Japanese dishes that delight the senses.
          </p>
          <a className="landing-cta" href="./menu.html">
            View Full Menu
          </a>
        </div>

        <div className="center-box">
          <Image
            // src={fish}
             src="/images/landing-page-sushi.png"
            alt="Illustration of a sushi"
            width={317}        
            height={363}  
            className="landing-image" />
        </div>
      </div>
    </section><section className="section-why">
        <div className="max-width">
          <h2 className="section-why-title">Why Choose Us?</h2>


          <div className="container-flex-card">
            <div className="card-why">
              <i className="fa-solid fa-tag"></i>
              <h3>Best Offer</h3>
              <p>We give the best offer for our valuable customers.</p>
            </div>

            <div className="card-why">
              <i className="fa-solid fa-bowl-food"></i>
              <h3>Fresh Food</h3>
              <p>We serve only fresh quality food.</p>
            </div>

            <div className="card-why">
              <i className="fa-solid fa-truck"></i>
              <h3>Food Delivery</h3>
              <p>We offer free delivery right at your door steps.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-review">
        <div className="max-width">
          <h2>Whats the word on the street?</h2>

          <div className="review-card">
            <div className="review-text">
              <h4>John Doe 5/5</h4>
              <p>
                I liked it all very much. I will come here again with my family.
                Recommended!
              </p>
            </div>
            <img
              src="./assets/img/jakub-dziubak-iOHJKJqO6E0-unsplash.jpg"
              alt="back rectangle plate that contains different type of sushi, presented on a table"
            />
          </div>

          <div className="review-card">
            <img src="./assets/img/rev-2.jpg" alt="sushi between chopstick" />
            <div className="review-text">
              <h4>MJ Diamond 5/5</h4>
              <p>
                Absolutely the best sushi experience I've had! Fresh ingredients
                and beautiful presentation. Highly recommend!"
              </p>
            </div>
          </div>

          <div className="review-card">
            <div className="review-text">
              <h4>Carlo V. 5/5</h4>
              <p>
                Every dish was a work of art. The freshness and quality of the
                sushi is unbeatable!
              </p>
            </div>
            <img
              src="./assets/img/rev-3.jpg"
              alt="serving board containing numerous sushi of different kind."
            />
          </div>
        </div>
      </section>
      </>
  );
}
