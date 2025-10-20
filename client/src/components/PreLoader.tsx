import { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const PreLoader = ({ onComplete }: { onComplete: () => void }) => {
    const [progress, setProgress] = useState(0);
    const [canHide, setCanHide] = useState(false); // flag to control hiding

    useEffect(() => {
        const MIN_DURATION = 1000; // minimum 1 seconds
        const startTime = performance.now();

        const resources: (HTMLImageElement | HTMLVideoElement)[] = [
            ...Array.from(document.images),
            ...Array.from(document.querySelectorAll("video")),
        ];

        const total = resources.length || 1;
        let loaded = 0;

        const updateProgress = () => {
            loaded++;
            const percent = Math.round((loaded / total) * 100);
            setProgress((prev) => (percent > prev ? percent : prev));
        };

        resources.forEach((res) => {
            if (
                (res instanceof HTMLImageElement && res.complete) ||
                (res instanceof HTMLVideoElement && res.readyState >= 3)
            ) {
                updateProgress();
            } else {
                res.addEventListener("load", updateProgress);
                res.addEventListener("loadeddata", updateProgress);
                res.addEventListener("error", updateProgress);
            }
        });

        if (document.fonts) {
            document.fonts.ready.then(() => {
                setProgress((prev) => (prev < 90 ? 90 : prev));
            });
        }

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    const elapsed = performance.now() - startTime;
                    const remaining = MIN_DURATION - elapsed;
                    if (remaining > 0) {
                        setTimeout(() => setCanHide(true), remaining);
                    } else {
                        setCanHide(true);
                    }
                    return 100;
                }
                return prev + 1;
            });
        }, 50);

        const handleWindowLoad = () => {
            const elapsed = performance.now() - startTime;
            const remaining = MIN_DURATION - elapsed;
            if (remaining > 0) {
                setTimeout(() => setCanHide(true), remaining);
            } else {
                setCanHide(true);
            }
        };
        window.addEventListener("load", handleWindowLoad);

        return () => {
            clearInterval(interval);
            window.removeEventListener("load", handleWindowLoad);
        };
    }, []);

    // Use GSAP only when both progress >= 100 and minimum time elapsed
    useGSAP(() => {
        if (progress >= 100 && canHide) {
            gsap.to(".preloader", {
                opacity: 0,
                duration: 0.5,
                ease: "power2.out",
                onComplete,
            });
        }
    }, [progress, canHide, onComplete]);

    return (
        <div className="preloader fixed inset-0 flex flex-col items-center justify-center z-[9999] text-white bg-[#7f3b2d]">
            <h1 className="text-2xl font-bold tracking-widest">SPYLT MILK</h1>
            <div className="mt-6 w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                    className="h-full bg-white transition-all duration-150 ease-linear"
                    style={{ width: `${progress}%` }}
                />
            </div>
            <p className="mt-4 text-sm tracking-wider">{progress}%</p>
        </div>
    );
};

export default PreLoader;