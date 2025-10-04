import { useGSAP } from "@gsap/react"
import ClipPathTitle from "../components/ClipPathTitle"
import gsap from "gsap";

const BenifitSection = () => {

    useGSAP(() => {
        const revealTl = gsap.timeline({
            delay: 1,
            scrollTrigger: {
                trigger: ".benefit-section",
                start: "top 65%",
                end: "top -10%",
                scrub: 1.5,
                markers: true
            }
        });

        revealTl.to(".benefit-section .first-title", {
            duration: 1,
            opacity: 1,
            clipPath: "polygon(0% 0%,100% 0%, 100% 100%, 0% 100%)",
            ease: "circ.out"
        }).to(".benefit-section .second-title", {
            duration: 1,
            opacity: 1,
            clipPath: "polygon(0% 0%,100% 0%, 100% 100%, 0% 100%)",
            ease: "circ.out"
        }).to(".benefit-section .third-title", {
            duration: 1,
            opacity: 1,
            clipPath: "polygon(0% 0%,100% 0%, 100% 100%, 0% 100%)",
            ease: "circ.out"
        }).to(".benefit-section .fourth-title", {
            duration: 1,
            opacity: 1,
            clipPath: "polygon(0% 0%,100% 0%, 100% 100%, 0% 100%)",
            ease: "circ.out"
        })
    });

    return (
        <section className="benefit-section">
            <div className="container mx-auto pt-16">
                <div className="col-center">
                    <p className="md:text-sm">Unlock the Advantages:
                        <br />Explore the Key Benefits of Choosing SPYLT
                    </p>
                </div>

                <div className="mt-20 col-center">
                    <ClipPathTitle title={"Shelf stable"} color={"#faeade"} bg={"#c88e64"} className={"first-title"} borderColor={"#222123"} />
                    <ClipPathTitle title={"Protein+Caffeine"} color={"#222123"} bg={"#faeade"} className={"second-title"} borderColor={"#222123"} />
                    <ClipPathTitle title={"Infinitely recyclable"} color={"#faeade"} bg={"#7f3b2d"} className={"third-title"} borderColor={"#222123"} />
                    <ClipPathTitle title={"Lactose free"} color={"#2e2d2f"} bg={"#fed775"} className={"fourth-title"} borderColor={"#222123"} />
                </div>
                <div className="md:mt-0 mt-10">
                    <p>And much more ...</p>
                </div>
            </div>
        </section>
    )
}

export default BenifitSection