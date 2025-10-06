import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar"
import HeroSection from "./sections/HeroSection"
import gsap from "gsap";
import MessageSection from "./sections/MessageSection";
import FlavorSection from "./sections/FlavorSection";
import { ScrollSmoother } from "gsap/all";
import { useGSAP } from "@gsap/react";
import NutritionSection from "./sections/NutritionSection";
import BenifitSection from "./sections/BenifitSection";
import FooterSection from "./sections/FooterSection";
import BottomBanner from "./sections/BottomBanner";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {

    useGSAP(() => {
        ScrollSmoother.create({
            smooth: 2,
            effects: true,
        });
    });

    return (
        <main>
            <Navbar />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <HeroSection />
                    <MessageSection />
                    <FlavorSection />
                    <NutritionSection />
                    <BenifitSection />
                    <BottomBanner />
                    <FooterSection />
                    {/* <div className="h-dvh border border-red-400"></div> */}
                </div>
            </div>
        </main>
    )
}

export default App