import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const VideoPin = () => {

    useGSAP(() => {
        const vpTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".vd-pin",
                start: "0% top",
                end: "150% top",
                scrub: 1.5,
                pin: true,
                // markers: true
            }
        });

        vpTl.to(".video-box", {
            clipPath: "circle(100% at 50% 50%)",
            ease: "power1.inOut",
        });
    });

    return (
        <div className="h-screen overflow-hidden ">
            <div className="relative size-full video-box">
                <img src="/images/circle-text.svg" alt="" className="spin-circle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-100 w-[15%]" />
                <video src="/videos/pin-video.mp4" playsInline muted loop autoPlay className=" absolute inset-0 object-cover" />
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:scale-100 scale-200 z-100">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[9vw] flex justify-center items-center bg-[#ffffff1a] backdrop-blur-xl rounded-full">
                    <img src="/images/play.svg" alt="" className="size-[3vw] ml-[0.5vw]" />
                </div>
            </div>
        </div >
    )
};

export default VideoPin;