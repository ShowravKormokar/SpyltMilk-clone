import FlavorSlider from "../components/FlavorSlider";
import FlavorTitle from "../components/FlavorTitle";

const FlavorSection = () => {
    return (
        <section className=" relative">
            <div className="flavor-section">
                <div className="h-dvh flex lg:flex-row flex-col relative">
                    <div className="lg:w-[57%] flex-none h-80 lg:h-full  xl:mt-0">
                        <FlavorTitle />
                    </div>
                    <div className="h-full">
                        <FlavorSlider />
                    </div>
                </div>

            </div>
            <div className="max-w-full w-[15vw] h-auto text-center flex flex-col items-center justify-center relative bottom-20 z-100">
                <button type="button" className="text-md rounded-4xl bg-amber-400 px-8 py-2 cursor-pointer absolute">Get It Now</button>
            </div>
        </section>
    )
}

export default FlavorSection;