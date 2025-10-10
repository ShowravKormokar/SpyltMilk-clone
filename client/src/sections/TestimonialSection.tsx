import { cards } from "../constants/details";
import vd1 from "../assets/videos/f1.mp4"
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
// import vd2 from "../assets/videos/f2.mp4"
// import vd3 from "../assets/videos/f3.mp4"
// import vd4 from "../assets/videos/f4.mp4"
// import vd5 from "../assets/videos/f5.mp4"
// import vd6 from "../assets/videos/f6.mp4"
// import vd7 from "../assets/videos/f7.mp4"

const TestimonialSection = () => {
    // Refs to multiple video elements
    const vdRf = useRef<HTMLVideoElement[]>([]);

    

    // Assign ref safely
    const setVideoRef = (el: HTMLVideoElement | null, index: number): void => {
        if (el) {
            vdRf.current[index] = el;
        }
    };

    // Play handler
    const handlePlay = (index: number): void => {
        const video = vdRf.current[index];
        if (video) video.play();
    };

    // Pause handler
    const handlePause = (index: number): void => {
        const video = vdRf.current[index];
        if (video) video.pause();
    };

    return (
        <section className="testimonials-section">
            <div className="absolute size-full flex flex-col items-center pt-[5vw]">
                <h1 className="text-black first-title">What's</h1>
                <h1 className="text-light-brown sec-title">Everyone</h1>
                <h1 className="text-black third-title">Talking</h1>
            </div>

            <div className="pin-box">
                {
                    cards.map((card, index) => (
                        <div
                            key={index}
                            className={`vd-card ${card.translation} ${card.rotation}`}
                            onMouseEnter={() => handlePlay(index)}
                            onMouseLeave={() => handlePause(index)}
                        >
                            <video
                                ref={(el) => setVideoRef(el, index)}
                                src={vd1} playsInline muted loop
                                className="size-full object-cover"
                            />
                        </div>
                    ))
                }
            </div>
        </section >
    );
};

export default TestimonialSection;