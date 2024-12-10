import Link from 'next/link';

export default function Menu() {
  return (
    <section class="section-menu">
    <div class="max-width">
      <h1 class="menu-title">Menu</h1>
      <p class="menu-text">
        Explore a selection of our finest dishes, prepared fresh daily with
        the best ingredients to bring the flavors of Japan to your table.
      </p>

      <div class="menu-card-container">
        <div class="menu-card">
          <h3>Something</h3>
          <img
            src="./assets/img/menu-1.jpg"
            alt="a plate of sushi on a black plate"
          />
          <a href="#" class="menu-cta">$7.99</a>
        </div>

        <div class="menu-card">
          <h3>Something</h3>
          <img
            src="./assets/img/menu-2.jpg"
            alt="a plate of sushi with chopstick in the image"
          />
          <a href="#" class="menu-cta">$5.99</a>
        </div>

        <div class="menu-card">
          <h3>Something</h3>
          <img
            src="./assets/img/menu-3.jpg"
            alt="a serving of fresh japanese sushi / sashimi"
          />
          <a href="#" class="menu-cta">$9.99</a>
        </div>

        <div class="menu-card">
          <h3>Something</h3>
          <img src="./assets/img/menu-4.jpg" alt="salmon and rice" />
          <a href="#" class="menu-cta">$4.99</a>
        </div>

        <div class="menu-card">
          <h3>Something</h3>
          <img src="./assets/img/menu-5.jpg" alt="japanese rice ball" />
          <a href="#" class="menu-cta">$6.99</a>
        </div>

        <div class="menu-card">
          <h3>Something</h3>
          <img
            src="./assets/img/menu-6.jpg"
            alt="serving of sushi on a bowl, with a hand applying finial touch to the plate to serve"
          />
          <a href="#" class="menu-cta">$11.99</a>
        </div>
      </div>
    </div>
  </section>
  );
}