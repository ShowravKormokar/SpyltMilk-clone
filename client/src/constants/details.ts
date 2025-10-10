// Define types
interface Flavor {
    name: string;
    color: string;
    rotation: string;
}

interface Nutrient {
    label: string;
    amount: string;
}

interface Card {
    src: number;
    rotation: string;
    name: string;
    img: string;
    translation?: string; // optional since some cards don’t have it
}

// Flavor list
const flavorlists: Flavor[] = [
    {
        name: "Chocolate Milk",
        color: "brown",
        rotation: "md:rotate-[-8deg] rotate-0",
    },
    {
        name: "Stawberry Milk",
        color: "red",
        rotation: "md:rotate-[8deg] rotate-0",
    },
    {
        name: "Cookies & Cream",
        color: "blue",
        rotation: "md:rotate-[-8deg] rotate-0",
    },
    {
        name: "Peanut Butter Chocolate",
        color: "orange",
        rotation: "md:rotate-[8deg] rotate-0",
    },
    {
        name: "Vanilla Milkshake",
        color: "white",
        rotation: "md:rotate-[-8deg] rotate-0",
    },
    {
        name: "Max Chocolate Milk",
        color: "black",
        rotation: "md:rotate-[8deg] rotate-0",
    },
];

// Nutrient list
const nutrientLists: Nutrient[] = [
    { label: "Potassium", amount: "245mg" },
    { label: "Calcium", amount: "500mg" },
    { label: "Vitamin A", amount: "176mcg" },
    { label: "Vitamin D", amount: "5mcg" },
    { label: "Iron", amount: "1mg" },
];

// Cards list
const cards: Card[] = [
    {
        src: 1,
        rotation: "rotate-z-[-10deg]",
        name: "Madison",
        img: "../assets/images/p1.png",
        translation: "translate-y-[-5%]",
    },
    {
        src: 2,
        rotation: "rotate-z-[4deg]",
        name: "Alexander",
        img: "../assets/images/p2.png",
    },
    {
        src: 3,
        rotation: "rotate-z-[-4deg]",
        name: "Andrew",
        img: "../assets/images/p3.png",
        translation: "translate-y-[-5%]",
    },
    {
        src: 4,
        rotation: "rotate-z-[4deg]",
        name: "Bryan",
        img: "../assets/images/p4.png",
        translation: "translate-y-[5%]",
    },
    {
        src: 5,
        rotation: "rotate-z-[-10deg]",
        name: "Chris",
        img: "../assets/images/p5.png",
    },
    {
        src: 6,
        rotation: "rotate-z-[4deg]",
        name: "Devante",
        img: "../assets/images/p6.png",
        translation: "translate-y-[5%]",
    },
    {
        src: 7,
        rotation: "rotate-z-[-3deg]",
        name: "Melisa",
        img: "../assets/images/p7.png",
        translation: "translate-y-[10%]",
    },
];

export { flavorlists, nutrientLists, cards };