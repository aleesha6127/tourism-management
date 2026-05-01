// export an array of package objects (copy your existing objects here)
const packagesData = [
  {
    id: 1,
    title: "Maldives Paradise Package",
    category: "Honeymoon",
    location: "Maldives",
    duration: "7 days, 6 nights",
    people: "2 people",
    rating: 4.9,
    reviews: 156,
    description:
      "Experience private overwater villas, turquoise lagoons and romantic dinners.",
    includes: [
      "Round-trip flights",
      "Overwater bungalow stay",
      "All meals included",
      "Sunset cruise",
    ],
    price: 1299,
    oldPrice: 1599,
    image: process.env.PUBLIC_URL + "/assets/package9.jpeg",
  },
  // ... add the rest of your 6 packages here (same objects you used previously)
];

export default packagesData;
