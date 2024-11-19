import { imgPath } from "@/components/helpers/functions-general";
import React from "react";

const SideNav = () => {
  const menus = [
    {
      img: "nav-value-meal.webp",
      title: "Value Meal",
    },
    {
      img: "nav-chickenjoy.webp",
      title: "Chickenjoy",
    },
    {
      img: "nav-burger.webp",
      title: "Jolly Burger",
    },
    {
      img: "nav-spaghetti.webp",
      title: "Spaghetti",
    },
    {
      img: "nav-burger-steak.webp",
      title: "Burger Steak",
    },
    {
      img: "nav-palabok.webp",
      title: "Palabok",
    },
    {
      img: "nav-sides.webp",
      title: "Fries & Sides",
    },
    {
      img: "nav-desserts.webp",
      title: "Desserts",
    },
  ];
  return (
    <>
      <h5 className="mb-0 text-center pt-2 text-sm">Menu</h5>

      <ul>
        {menus.map((item, key) => (
          <li className="mb-3">
            <button>
              <img src={`${imgPath}/${item.img}`} />
              <small className="text-xs">{item.title}</small>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SideNav;
