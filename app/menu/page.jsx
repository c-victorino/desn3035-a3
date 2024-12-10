import Link from "next/link";
import MenuCards from "../components/MenuCard";

export default function Menu() {
  return (
    <section className="section-menu">
      <div className="max-width">
        <h1 className="menu-title">Menu</h1>
        <p className="menu-text">
          Explore a selection of our finest dishes, prepared fresh daily with
          the best ingredients to bring the flavors of Japan to your table.
        </p>

        <div className="menu-card-container">
          <MenuCards />
        </div>
      </div>
    </section>
  );
}
