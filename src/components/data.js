import casablanca from "../assets/hassan-ii-mosque-surrounded-by-water-buildings-blue-sky-sunlight.jpg";
import london from "../assets/famous-tower-bridge-evening-london-england.jpg";
import paris from "../assets/famous-eiffel-tower-paris-with-gorgeous-colors.jpg";
import cairo from "../assets/viewpoint-alabaster-mosque-blue-sky-cairo-egypt.jpg";
import canada from "../assets/toronto-skyline-from-park.jpg";
import pretoria from "../assets/boston-city-aerial-view-with-urban-buildings-highway.jpg";

import { AiFillCar } from "react-icons/ai";
import { FaHotel, FaShopify } from "react-icons/fa";
import { TbBus } from "react-icons/tb";
import { BiDrink } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi";

export const city_destination = [
  {
    city: "Casablanca",
    country: "Morocco",
    id: "kjfdk12",
    image: casablanca,
    price: 120,
    date: "27 March 2023",
  },
  {
    city: "Paris",
    country: "France",
    id: "kjfddjkks2",
    image: paris,
    price: 220,
    date: "30 March 2023",
  },
  {
    city: "London",
    country: "United Kinkdom",
    id: "kjfddjjdkkks2",
    image: london,
    price: 500,
    date: "2 April 2023",
  },
  {
    city: "Cairo",
    country: "Egypt",
    id: "kjfddjoldkkks2",
    image: cairo,
    price: 900,
    date: "29 March 2023",
  },
  {
    city: "Pretoria",
    country: "South Africa",
    id: "jhdd5445",
    image: pretoria,
    price: 900,
    date: "7 April 2023",
  },
  {
    city: "Ottowa",
    country: "Canada",
    id: "jhdd55",
    image: canada,
    price: 100,
    date: "29 June 2023",
  },
];

export const Icons = [
  { name: "Car Rentals", icon: AiFillCar, id: "cdkd122" },
  { name: "Hotels", icon: FaHotel, id: "cdkd123" },
  { name: "Airport Trans", icon: TbBus, id: "cdkd124" },
  { name: "Tour & Acitvitis", icon: BiDrink, id: "cdkd125" },
  { name: "Meet & Greet", icon: HiUserGroup, id: "cdkd128" },
  { name: "Duty-Free Shopping", icon: FaShopify, id: "cdkd127" },
];
