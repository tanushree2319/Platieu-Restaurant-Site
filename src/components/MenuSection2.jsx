import React from "react";
import GarlicCheeseBread from "../assets/Menu/GarlicCheeseBread.png";
import StuffedMushrooms from "../assets/Menu/StuffedMushrooms.png";
import BruschettaAlPomodoro from "../assets/Menu/BruschettaAlPomodoro.png";
import MiniCrabCakes from "../assets/Menu/MiniCrabCakes.png";
import ConfitDeCanard from "../assets/Menu/ConfitDeCanard.jpg";
import CreamyPumpkinSoup from "../assets/Menu/HerbRoastedChicken.png";
import CrispyCaesarSalad from "../assets/Menu/CrispyCaesarSalad.png";
import CapreseSkewers from "../assets/Menu/CreamyPumpkinSoup.png";
import Soufflé from "../assets/Menu/Soufflé.jpg";
import HerbRoastedChicken from "../assets/Menu/CapreseSkewers.png";
import SearedSalmonFillet from "../assets/Menu/SearedSalmon.png";
import WildMushroomRisotto from "../assets/Menu/WildMushroomRisotto.png";
import contactBg from "../assets/Home/Section5-Map.png";

const menuItems = [
  {
    name: "Garlic Cheese Bread",
    type: "Appetizer",
    price: "€7",
    desc: "Toasted baguette with a blend of mozzarella cheese and garlic butter. Lorem ipsum dolor sit amet siur behe vadaw montap.",
    img: GarlicCheeseBread,
  },
  {
    name: "Stuffed Mushrooms",
    type: "Main Course",
    price: "€5",
    desc: "Oven-roasted mushrooms filled with melted cheese, sautéed onions, and a hint of herbs. A perfect balance of creamy and earthy flavors.",
    img: StuffedMushrooms,
  },
  {
    name: "Bruschetta al Pomodoro",
    type: "Appetizer",
    price: "€8",
    desc: "Freshly toasted bread topped with ripe tomatoes, garlic, olive oil, and basil leaves. A classic Italian appetizer full of vibrant taste.",
    img: BruschettaAlPomodoro,
  },
  {
    name: "Mini Crab Cakes",
    type: "Appetizer",
    price: "€11",
    desc: "Indulge in our exquisite golden-seared crab cakes, perfectly paired with a zesty lemon aioli and a hint of fresh dill.",
    img: MiniCrabCakes,
  },
  {
    name: "Confit De Canard",
    type: "Main Course",
    price: "€11",
    desc: "A French classic of tender, salt-cured duck leg confit. Served with roasted fingerling potatoes, seasonal root vegetables, and a delicate herb-infused jus.",
    img: ConfitDeCanard,
  },
  {
    name: "Creamy Pumpkin Soup",
    type: "Appetizer",
    price: "€9",
    desc: "A smooth and velvety pumpkin soup made with fresh cream, seasonal spices, and topped with crispy croutons for extra texture.",
    img: CreamyPumpkinSoup,
  },
  {
    name: "Crispy Caesar Salad",
    type: "Appetizer",
    price: "€6",
    desc: "Crisp romaine lettuce tossed with garlic croutons, parmesan shavings, and our signature Caesar dressing made in-house.",
    img: CrispyCaesarSalad,
  },
  {
    name: "Caprese Skewers",
    type: "Appetizer",
    price: "€7",
    desc: "Delicious cherry tomatoes paired with creamy mozzarella balls and fresh basil leaves, all beautifully arranged on skewers.",
    img: CapreseSkewers,
  },
  {
    name: "Soufflé Pancakes",
    type: "Dessert",
    price: "€10",
    desc: "A triple-stack of airy, melt-in-your-mouth pancakes served with signature berry reduction, fresh blueberries, and Madagascar vanilla Chantilly cream.",
    img: Soufflé,
  },
  {
    name: "Herb Roasted Chicken",
    type: "Main Course",
    price: "€15",
    desc: "Indulge in our exquisite slow-roasted chicken, perfectly marinated with aromatic garlic and fragrant rosemary.",
    img: HerbRoastedChicken,
  },
  {
    name: "Seared Salmon Fillet",
    type: "Main Course",
    price: "€17",
    desc: "Pan-seared salmon served over mashed potatoes with lemon butter sauce and seasonal vegetables.",
    img: SearedSalmonFillet,
  },
  {
    name: "Wild Mushroom Risotto",
    type: "Main Course",
    price: "€13",
    desc: "Arborio rice slow-cooked with special mushrooms, parmesan, and a splash of white wine.",
    img: WildMushroomRisotto,
    faded: true,
  },
];

const menuTabs = [
  "All Menu",
  "Appetizer",
  "Main Course",
  "Dessert",
  "Beverage",
];

export default function MenuSection2() {
  return (
    <section className="menu-section2 py-5">
      <div className="menu2-bg" style={{ backgroundImage: `url(${contactBg})` }} />
      <div className="menu2-wrapper">
        <h2 className="menu2-title">Today Menu</h2>
        <div className="menu2-tabs mb-5">
          {menuTabs.map((tab, i) => (
            <button key={tab} className={`menu2-tab${i === 0 ? " active" : ""}`}>{tab}</button>
          ))}
        </div>
        <div className="menu2-grid">
          {menuItems.map((item) => (
            <div className={`menu2-card${item.faded ? " faded" : ""}`} key={item.name}>
              <div className="menu2-img-wrap">
                <img src={item.img} alt={item.name} className="menu2-img" />
              </div>
              <div className="menu2-info">
                <div className="menu2-header">
                  <span className="menu2-type">{item.type}</span>
                  <span className="menu2-price">{item.price}</span>
                </div>
                <h3 className="menu2-name">{item.name}</h3>
                <p className="menu2-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
