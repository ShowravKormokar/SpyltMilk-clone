import FlavorSlider from "../components/FlavorSlider";
import FlavorTitle from "../components/FlavorTitle";

const FlavorSection = () => {
    return (
        <section className="flavor-section">
            <div className="h-full flex lg:flex-row flex-col items-center relative">
                <div className="lg:w-[57%] flex-none h-80 lg:h-full">
                    <FlavorTitle />
                </div>
                <div className="div">
                    <FlavorSlider />
                </div>
            </div>
        </section>
    )
}

export default FlavorSection;