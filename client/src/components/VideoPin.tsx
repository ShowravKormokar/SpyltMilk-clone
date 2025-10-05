import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const VideoPin = () => {

    useGSAP(() => {
        const vpTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".vd-pin",
                start: "-10% top",
                end: "200% top",
                scrub: 1.5,
                pin: true,
                markers: true
            }
        });

        vpTl.to(".video-box", {
            clipPath: "circle(100% at 50% 50%)",
            ease: "power1.inOut",
        });
    });

    return (
        <div className="vd-pin h-[100vh] overflow-hidden md:-translate-y-[15%]">
            <div style={{ clipPath: "circle(6% at 50% 50%)" }} className="size-full video-box">
                <video src="/videos/pin-video.mp4" playsInline muted loop autoPlay className=" absolute inset-0 object-cover" />
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:scale-100 scale-200">
                <img src="/images/circle-text.svg" alt="" className="spin-circle " />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[8vw] flex justify-center items-center bg-[#ffffff1a] backdrop-blur-xl rounded-full">
                    <img src="/images/play.svg" alt="" className="size-[3vw] ml-[0.5vw]" />
                </div>
            </div>
        </div >
    )
};

export default VideoPin;