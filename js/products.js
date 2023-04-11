/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  {
    id: "P1",
    title: "Steel Toes Boots",
    description: "Made with hand crafted leather. These boots meet all puncture and slip resistant safety codes.",
    price: '$' + 159.99,
    discontinued: false,
    categories: ["c1"]
  },

  {
    id: "P2",
    title: "Duck-Lined Jacket",
    description: "Made using duck linen, this jacket is built to be lightweight while still providing a good protection from the elements.",
    price: '$' + 229.99,
    discontinued: false,
    categories: ["c1"]
  },

  {
    id: "P3",
    title: "Wool Socks",
    description: "Warm socks made from real sheeps wool.",
    price: '$' + 29.99,
    discontinued: false,
    categories: ["c1"]
  },

  {
    id: "P4",
    title: "Ski Mask",
    description: "Full covering face mask to keep your face warm in the winter.",
    price: '$' + 29.99,
    discontinued: false,
    categories: ["c1"]
  },

  {
    id: "P5",
    title: "Overall",
    description: "Heavy duty fire resisant overalls that are made to last.",
    price: '$' + 89.99,
    discontinued: false,
    categories: ["c1"]
  },

  {
    id: "P6",
    title: "Long Sleeve Shirt",
    description: "Warm long sleeve t-shirt",
    price: '$' + 39.99,
    discontinued: false,
    categories: ["c1"]
  },

  {
    id: "P7",
    title: "T-shirt",
    description: "High quality t-shirt",
    price: '$' + 29.99,
    discontinued: true,
    categories: ["c1"]
  },

  {
    id: "P8",
    title: "Shoes",
    description: "Slip/Puncture resistant shoes",
    price: '$' + 59.99,
    discontinued: false,
    categories: ["c1"]
  },

  {
    id: "P9",
    title: "Rain Jacket",
    description: "Wind proof and rain resistant lightweight jacket.",
    price: '$' + 119.99,
    discontinued: false,
    categories: ["c1"]
  },

  {
    id: "P10",
    title: "Pull Over Sweater",
    description: "Lightweight pullover sweater.",
    price: '$' + 79.99,
    discontinued: false,
    categories: ["c1"]
  },

  {
    id: "P11",
    title: "Zip Up Sweater",
    description: "A sweater with a zipper.",
    price: '$' + 79.99,
    discontinued: false,
    categories: ["c1"]
  },

  {
    id: "P12",
    title: "Cargo Shorts",
    description: "A pair of shorts with a lot of pockets.",
    price: '$' + 69.99,
    discontinued: false,
    categories: ["c1"]
  },

  {
    id: "P13",
    title: "Kids Leather Boots",
    description: "Pair or leather boots but kids size.",
    price: '$' + 59.99,
    discontinued: false,
    categories: ["c2"]
  },

  {
    id: "P14",
    title: "Kids jacket",
    description: "A kids size jacket",
    price: '$' + 79.99,
    discontinued: false,
    categories: ["c2"]
  },

  {
    id: "P15",
    title: "Kids T-shirt",
    description: "Kids size t-shirt",
    price: '$' + 19.99,
    discontinued: false,
    categories: ["c2"]
  },

  {
    id: "P16",
    title: "Kids Long Sleeve",
    description: "Kids size long sleeve t-shirt",
    price: '$' + 19.99,
    discontinued: false,
    categories: ["c2"]
  },

  {
    id: "P17",
    title: "Hammer",
    description: "A good sturdy hammer",
    price: '$' + 15.99,
    discontinued: false,
    categories: ["c3"]
  },

  {
    id: "P18",
    title: "Pipe Wrench",
    description: "Adjustable pipe wrench",
    price: '$' + 15.99,
    discontinued: false,
    categories: ["c3"]
  },

  {
    id: "P19",
    title: "Drill",
    description: "A good reliable drill",
    price: '$' + 59.99,
    discontinued: false,
    categories: ["c3"]
  },

  {
    id: "P20",
    title: "Drill Bits",
    description: "Different size drill bits",
    price: '$' + 29.99,
    discontinued: false,
    categories: ["c3"]
  },

  {
    id: "P21",
    title: "Socket Set",
    description: "Different size sockets, from small to big.",
    price: '$' + 259.99,
    discontinued: false,
    categories: ["c3"]
  },

  {
    id: "P22",
    title: "Vice Grip",
    description: "Adjustable vice grip.",
    price: '$' + 19.99,
    discontinued: false,
    categories: ["c3"]
  },

  {
    id: "P23",
    title: "Wrench Set",
    description: "A set of wrenches.",
    price: '$' + 49.99,
    discontinued: false,
    categories: ["c3"]
  },
  {
    id: "P24",
    title: "Screw Driver Set",
    description: "A set of screw drivers",
    price: '$' + 39.99,
    discontinued: false,
    categories: ["c3"]
  },
  {
    id: "P25",
    title: "Safety Glasses",
    description: "Great protection for your eyes.",
    price: '$' + 39.99,
    discontinued: false,
    categories: ["c4"]
  },

  {
    id: "P26",
    title: "Protective Face Mask",
    description: "Tight seal face mask.",
    price: '$' + 59.99,
    discontinued: false,
    categories: ["c4"]
  },

  {
    id: "P27",
    title: "Hard Hat",
    description: "Standard regulation hard hat. Meets all safety codes.",
    price: '$' + 69.99,
    discontinued: false,
    categories: ["c4"]
  },

  {
    id: "P28",
    title: "Ear Muffs",
    description: "Ear muff with sound bleeding technology that lets you hear things around you while still protecting your ears.",
    price: '$' + 59.99,
    discontinued: false,
    categories: ["c4"]
  },

  {
    id: "P29",
    title: "Welding Mask",
    description: "Protective face mask for welding.",
    price: '$' + 99.99,
    discontinued: false,
    categories: ["c4"]
  },

  {
    id: "P30",
    title: "Safety Vest",
    description: "Reflective safety vest.",
    price: '$' + 59.99,
    discontinued: false,
    categories: ["c4"]
  },
];


