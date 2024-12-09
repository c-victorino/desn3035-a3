export default function Page() {
  return (
    <><section class="section-landing">
      <div class="landing">
        <div class="landing-content">
          <h1 class="landing-heading">Finding Nemo</h1>
          <p class="landing-text">
            At Finding Nemo, we blend the rich traditions of Japanese cuisine
            with a modern twist. Our chefs use only the freshest ingredients to
            craft sushi, sashimi, and Japanese dishes that delight the senses.
          </p>
          <a class="landing-cta" href="./menu.html">
            View Full Menu
          </a>
        </div>

        <div class="center-box">
          <img
            src="./assets/img/landing-page-sushi.png"
            alt="Illustration of a sushi"
            class="landing-image" />
        </div>
      </div>
    </section><section class="section-why">
        <div class="max-width">
          <h2 class="section-why-title">Why Choose Us?</h2>


          <div class="container-flex-card">
            <div class="card-why">
              <i class="fa-solid fa-tag"></i>
              <h3>Best Offer</h3>
              <p>We give the best offer for our valuable customers.</p>
            </div>

            <div class="card-why">
              <i class="fa-solid fa-bowl-food"></i>
              <h3>Fresh Food</h3>
              <p>We serve only fresh quality food.</p>
            </div>

            <div class="card-why">
              <i class="fa-solid fa-truck"></i>
              <h3>Food Delivery</h3>
              <p>We offer free delivery right at your door steps.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section class="section-review">
        <div class="max-width">
          <h2>Whats the word on the street?</h2>

          <div class="review-card">
            <div class="review-text">
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

          <div class="review-card">
            <img src="./assets/img/rev-2.jpg" alt="sushi between chopstick" />
            <div class="review-text">
              <h4>MJ Diamond 5/5</h4>
              <p>
                Absolutely the best sushi experience I've had! Fresh ingredients
                and beautiful presentation. Highly recommend!"
              </p>
            </div>
          </div>

          <div class="review-card">
            <div class="review-text">
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
