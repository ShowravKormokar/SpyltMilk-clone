import { cards } from "../constants/details";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";

const TestimonialSection = () => {
    // Refs to multiple video elements
    const vdRf = useRef<HTMLVideoElement[]>([]);

    useGSAP(() => {
        gsap.set(".testimonials-section", {
            marginTop: "-140vh"
        });

        const tesTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".testimonials-section",
                start: "top bottom",
                end: "500% top",
                scrub: true,
                markers: true
            }
        });

        tesTl.to(".testimonials-section .ft-anim", {
            xPercent: 70 + 30,
            yPercent: -100
        }).to(".testimonials-section .st-anim", {
            xPercent: 25 + 30, yPercent: -100
        }, "<").to(".testimonials-section .tt-anim", {
            xPercent: -80, yPercent: -100
        }, "<");

        const pinTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".testimonials-section",
                start: "10% top",
                end: "200% top",
                scrub: 1.5,
                pin: true,
                markers: true
            }
        });

        pinTl.from(".vd-card", {
            yPercent: 150,
            stagger: 0.2,
            ease: "power1.inOut"
        })
    });

    const setVideoRef = (el: HTMLVideoElement | null, index: number): void => {
        if (el) vdRf.current[index] = el;
    };

    const handlePlay = (index: number): void => {
        const video = vdRf.current[index];
        if (video) video.play().catch((err) => console.error("Play failed:", err));
    };

    const handlePause = (index: number): void => {
        const video = vdRf.current[index];
        if (video) video.pause();
    };

    return (
        <section className="testimonials-section">
            <div className="h-[150vh] absolute size-full flex flex-col items-center pt-[5vw]">
                <h1 className="text-black first-title ft-anim">What's</h1>
                <h1 className="text-light-brown sec-title st-anim">Everyone</h1>
                <h1 className="text-black third-title tt-anim">Talking</h1>
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
                                key={index}
                                ref={(el) => setVideoRef(el, index)}
                                src={card.src} playsInline muted loop
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