import FlavorSlider from "../components/FlavorSlider";
import FlavorTitle from "../components/FlavorTitle";

const FlavorSection = () => {
    return (
        <section className="flavor-section">
            <div className="">
                <div className="h-full flex lg:flex-row flex-col relative">
                    <div className="lg:w-[57%] flex-none h-80 lg:h-full lg:mt-[15%]  xl:mt-0 lg:pb-50">
                        <FlavorTitle />
                    </div>
                    <div>
                        <FlavorSlider />
                    </div>
                </div>
            </div>
            {/* <div className="relative">
                <div className="max-w-full w-[15vw] h-auto text-center flex flex-col items-center justify-center bottom-20 z-100 absolute">
                    <button type="button" className="text-md rounded-4xl bg-amber-400 px-8 py-2 cursor-pointer ">Get It Now</button>
                </div>
            </div> */}
        </section>
    )
}

export default FlavorSection;