import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
import FlavorTitle from "../components/FlavorTitle";
import FlavorSlider from "../components/FlavorSlider";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const FlavorSection = () => {
    const flavorRef = useRef<HTMLDivElement | null>(null);
    const btnMobile = useMediaQuery({ query: "(max-width: 768px)", });
    if (btnMobile) {
        useGSAP(() => {
            const btn = document.querySelector<HTMLDivElement>(".fixed-btn");
            if (!btn) return;
            const sliderCon = document.querySelector<HTMLDivElement>(".slider-con");
            if (!sliderCon) return;

            if (!flavorRef.current) return;

            const hScrollAmount = flavorRef.current.scrollHeight - window.innerHeight;
            // console.log(hScrollAmount);
            gsap.to(".fixed-btn", {
                opacity: 1,
                scrollTrigger:
                {
                    trigger: ".flavor-section",
                    start: "top 90%",
                    // end: `2000px top`,
                    end: `${hScrollAmount}px top`,
                    // pin: true,
                    onUpdate: (self) => {
                        const progress = self.progress; // 0 to 1
                        if (progress < 1) {
                            btn.style.position = "fixed";
                            btn.style.top = "90%";
                            sliderCon.style.padding = "0%";
                        } else {
                            btn.style.position = "absolute";
                            btn.style.bottom = "0%";
                            sliderCon.style.padding = "5rem";
                        }
                    },
                    markers: true,
                    preventOverlaps: true
                }
            })
        });
    }
    return (
        <section ref={flavorRef} className="flavor-section relative overflow-hidden">
            {/* Fixed button (stays in bottom-center during scroll) */}
            <div
                className={`${btnMobile ? "opacity-0 fixed-btn w-full py-7 h-25 left-1/2 -translate-x-1/2 z-[100] flex justify-center bg-milk" : "absolute bottom-[5%] left-1/2 -translate-x-1/2 z-[100] flex justify-center"}`}>
                <button type="button" className="text-md rounded-4xl bg-amber-400 px-8 py-2 cursor-pointer shadow-md hover:bg-amber-500 transition-all" >
                    Get It Now
                </button>
            </div>
            {/* This container moves horizontally */}
            <div className="flavor-scroll-inner h-full flex lg:flex-row flex-col relative">
                <div className="lg:w-[57%] flex-none h-80 lg:h-full lg:mt-[15%] xl:mt-0 lg:pb-50">
                    <FlavorTitle />
                </div>
                <div className="lg:pb-0 slider-con">
                    <FlavorSlider />
                </div>
            </div>
        </section >
    );
};

export default FlavorSection;