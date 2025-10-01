import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar"
import HeroSection from "./sections/HeroSection"
import gsap from "gsap";
import MessageSection from "./sections/MessageSection";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
    return (
        <main>
            <Navbar />
            <HeroSection />
            <MessageSection />
            <div className="h-dvh border border-red-400"></div>
        </main>
    )
}

export default App