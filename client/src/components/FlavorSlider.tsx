import { useGSAP } from "@gsap/react";
import { flavorlists } from "../constants/details";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

// At the top of component file
// Glob import all images and videos
const images: Record<string, { default: string }> = import.meta.glob(
    "../assets/images/*.{webp,svg,png,jpg,jpeg}",
    { eager: true }
);

// Access image by file name dynamically
const getImage = (fileName: string): string => {
    const key = `../assets/images/${fileName}`;
    return images[key]?.default || "";
};

const FlavorSlider = () => {
    const slideRef = useRef<HTMLDivElement | null>(null);

    const isTablet = useMediaQuery({
        query: "(max-width: 1024px)",
    });
    const isMob = useMediaQuery({
        query: "(max-width: 768px)",
    });

    useGSAP(() => {
        //Card Slider animation (Horizontally)
        if (!slideRef.current) return;

        const scrollAmount = slideRef.current.scrollWidth - window.innerWidth;

        if (!isTablet) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".flavor-section",
                    start: "top 0%",
                    end: "+=4000",
                    scrub: true,
                    pin: true,
                    // markers: true
                },
            });

            tl.to(".flavor-scroll-inner", {
                x: isMob ? 0 : `-${scrollAmount}px`,
                y: isMob ? `${scrollAmount}px` : 0,
                ease: "power1.inOut",
            });

        }

        //Element hover
        const cards = document.querySelectorAll<HTMLDivElement>(".flavors > div");

        cards.forEach((card) => {
            card.addEventListener("mousemove", (e: MouseEvent) => {
                const bounds = card.getBoundingClientRect();
                const x = e.clientX - bounds.left;
                const y = e.clientY - bounds.top;

                const offsetX = (x / bounds.width - 0.5) * 30; // max 30px left/right
                const offsetY = (y / bounds.height - 0.5) * 30; // max 30px up/down

                const elements = card.querySelector<HTMLImageElement>(".elements");
                const drinks = card.querySelector<HTMLImageElement>(".drinks");

                if (elements)
                    gsap.to(elements, { x: offsetX, y: offsetY, duration: 0.3, ease: "power2.out" });

                if (drinks)
                    gsap.to(drinks, { x: -offsetX, duration: 0.3, ease: "power2.out" });

            });

            card.addEventListener("mouseleave", () => {
                const elements = card.querySelector<HTMLImageElement>(".elements");
                const drinks = card.querySelector<HTMLImageElement>(".drinks");

                if (elements) gsap.to(elements, { x: 0, y: 0, duration: 0.5, ease: "power3.out" });
                if (drinks) gsap.to(drinks, { x: 0, y: 0, duration: 0.5, ease: "power3.out" });
            });
        });
    });

    return (
        <div ref={slideRef} className="slider-wrapper lg:w-[480vw] lg:h-full mt-0 xl:mt-0 bg-milk h-[100%]">
            <div className="flavors lg:pb-50 flex md:flex-row flex-col items-center lg:items-start lg:pt-10 2xl:gap-72 lg:gap-52 md:gap-24 gap-7 flex-nowrap">
                {flavorlists.map((flavor) => (
                    <div
                        key={flavor.name}
                        className={`relative z-30 lg:w-[50vw] w-88 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavor.rotation}`}
                    >
                        <img
                            src={getImage(`${flavor.color}-bg.svg`)}
                            alt={flavor.name}
                            className="absolute bottom-0"
                        />
                        <img
                            src={getImage(`${flavor.color}-drink.webp`)}
                            alt={flavor.name}
                            className="drinks"
                        />
                        <img
                            src={getImage(`${flavor.color}-elements.webp`)}
                            alt={flavor.name}
                            className="elements"
                        />

                        <h1>{flavor.name}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FlavorSlider;