import React from 'react';
import MarieImg from '../assets/AboutUs/Marie.png';
import LucImg from '../assets/AboutUs/Luc.png';
import AndreImg from '../assets/AboutUs/Andre.png';
import AichaImg from '../assets/AboutUs/Aicha.png';
import MarcImg from '../assets/AboutUs/Marc.png';
import CholeImg from '../assets/AboutUs/Chole.png';
import DavidImg from '../assets/AboutUs/David.png';
import EliseImg from '../assets/AboutUs/Elise.png';

const chefs = [
  {
    img: MarieImg,
    name: 'Chef Marie Dupont',
    title: 'Head Chef',
    desc: 'With over 10 years of experience in international kitchens, Chef Marie Dupont brings a world of flavors to every creation.'
  },
  {
    img: LucImg,
    name: 'Chef Luc Moreau',
    title: 'Pastry Chef',
    desc: 'With a culinary background from France, Chef Luc Moreau creates beautiful pastries and sweet masterpieces for every occasion.'
  },
  {
    img: AndreImg,
    name: 'Chef André Dubois',
    title: 'Sous Chef',
    desc: 'Chef André Dubois brings experience from various Michelin-starred restaurants, ensuring consistency and quality in each plate.'
  },
  {
    img: AichaImg,
    name: 'Chef Aïcha Laurent',
    title: 'Vegetarian Chef',
    desc: 'Chef Aïcha Laurent focuses on plant-based cuisine, creating dishes that are vibrant, nutritious, and innovative.'
  },
  {
    img: MarcImg,
    name: 'Chef Marc Lefevre',
    title: 'Grill Master',
    desc: 'With expertise in grilling techniques, Chef Marc Lefevre serves meats and seafood to perfection every time.'
  },
  {
    img: CholeImg,
    name: 'Chef Chloé Martin',
    title: 'Sushi Chef',
    desc: 'Chef Chloé Martin’s skills in crafting authentic sushi are impressive. Specialty rolls and sashimi are highlights of her menu.'
  },
  {
    img: DavidImg,
    name: 'Chef David Blanchet',
    title: 'Culinary Consultant',
    desc: 'As a culinary consultant, Chef David Blanchet assists restaurants in menu development, cost control, and culinary training.'
  },
  {
    img: EliseImg,
    name: 'Chef Élise Bernard',
    title: 'Catering Manager',
    desc: 'With experience in the catering industry, Chef Élise Bernard designs menus for memorable private and corporate events.'
  },
];

const OurStorySection3 = () => (
  <section className="ourstory-section3 py-5">
    <div className="container">
      <div className="row align-items-start mb-5">
        <div className="col-md-6 mb-3 mb-md-0">
          <h2 className="section3-title">Meet the Soul Behind<br />Our Kitchen</h2>
        </div>
        <div className="col-md-6">
          <p className="section3-desc">
            Leading our kitchen is Chef Julien Moreau, whose expertise and vision elevate every dish on our menu. With over 15 years of experience in fine dining, Chef Julien draws inspiration from French countryside traditions while embracing modern culinary artistry.
          </p>
        </div>
      </div>
      <div className="row g-4">
        {chefs.map((chef, i) => (
          <div className="col-sm-6 col-lg-3 d-flex" key={chef.name}>
            <div className="chef-card flex-fill h-100 d-flex flex-column">
              <img src={chef.img} alt={chef.name} className="chef-img mb-3 rounded mx-auto" />
              <div className="chef-name">{chef.name}</div>
              <div className="chef-title">{chef.title}</div>
              <div className="chef-desc text-muted flex-grow-1">{chef.desc.length > 95 ? chef.desc.slice(0,95) + '...' : chef.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center mt-4">
        <button type="button" className="btn section3-viewall-btn">View All</button>
      </div>
    </div>
  </section>
);

export default OurStorySection3;


