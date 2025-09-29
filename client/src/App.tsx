import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar"
import HeroSection from "./sections/HeroSection"
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
    return (
        <main>
            <Navbar />
            <HeroSection />
            <div className="h-dvh border border-red-400"></div>
        </main>
    )
}

export default App