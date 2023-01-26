import React from "react";

const Footer = () => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-4 space-y-10 px-32 py-14 bg-gray-100
    text-gray-600"
    >
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>Papa React</p>
        <p>Presents</p>
        <p>Zero to full stack hero</p>
        <p>hundreds of students</p>
        <p>Join Now</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Centre</p>
        <p>Trust & Safety</p>
        <p>Say HI YouTube</p>
        <p>Easter Eggs</p>
        <p>For the win</p>
      </div>

      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Footer;
