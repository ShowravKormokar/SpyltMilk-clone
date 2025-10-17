import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { getImage } from '../utils/media';
import pinVideo from "../assets/videos/pin-video.mp4"

const VideoPin = () => {

    useGSAP(() => {
        const vpTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".video-wrapper",
                start: "0px top",
                end: "2500px top",
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
            <div className="relative w-full h-full video-box overflow-hidden">
                <img
                    src={getImage("circle-text.svg")}
                    alt=""
                    className="spin-circle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-100 w-[15%]"
                />
                <video
                    src={pinVideo}
                    playsInline
                    muted
                    loop
                    autoPlay
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-full object-cover"
                />
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:scale-100 scale-200 z-100">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[9vw] flex justify-center items-center bg-[#ffffff1a] backdrop-blur-xl rounded-full">
                    <img src={getImage("play.svg")} alt="" className="size-[3vw] ml-[0.5vw]" />
                </div>
            </div>
        </div >
    )
};

export default VideoPin;