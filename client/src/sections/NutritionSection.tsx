
const NutritionSection = () => {
    return (
        <section className="nutrition-section">
            <img src="/images/slider-dip.png" alt="" className="w-full object-cover z-0" />
            <img src="/images/big-img.png" alt="" className="big-img" />
            <div className="flex md:flex-row flex-col justify-between md:px-10 px-5 mt-14 md:mt-0">
                <div className="relative inline-block md:translate-y-20">
                    <div className="general-title relative flex flex-col justify-center items-center gap-24">
                        <div className="overflow-hidden place-self-start">
                            <h1>It still does</h1>
                        </div>
                        <div className="nutrition-text-scroll place-self-start">
                            <div className="bg-yellow-brown pb-5 md:pt-0 pt-3 md:px-5 px-3 inline-block">
                                <h2 className="text-milk-yellow">Body Good</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex md:justify-end items-start translate-y-20">
                    <div className="md:max-w-xs max-w-md">
                        <p className="text-sm md:text-right text-balance font-paragraph">Milk contains a wide array of nutrients including vitamins, minerals, and proteins and that is lactose free.</p>
                    </div>
                </div>
            </div>



            {/* <div className="nutrition-box">

            </div> */}
        </section>
    )
}

export default NutritionSection