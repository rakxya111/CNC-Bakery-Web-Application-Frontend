
export default function Hero() {
  return (
    <section className="flex items-center pl-20 overflow-hidden rounded-4xl bg-pinkSoft mx-9 my-1 ">
     
      {/* Left Text Section */}

      <div className="w-1/2 flex flex-col gap-20 overflow-hidden">
        <div className="flex flex-col">
          <h1 className="text-6xl font-bold text-purpleDark leading-snug">
            Design <span className="text-black">Irresistibly Personal</span> Treats
          </h1>
          <p className="text-lg text-gray-700">
            Premium, made-to-order chocolates and cakes for every celebration.
            Choose your base, flavors and decoration your way.
          </p>
        </div>

        <div className="flex gap-10">
          <button className="primary-button">
            <span>
              <img
                src="./ButtonIcons/Button_Icon2.svg "
                className="w-full h-full object-cover"
                alt=""
              />
            </span>
            <span> Start Customizing</span>
          </button>
          <button className="primary-button bg-amber-50 text-black shadow-lg">
            <span>
              <img
                src="./ButtonIcons/Button_Icon1.svg "
                className="w-full h-full object-cover"
                alt=""
              />
            </span>
            <span>Browse Catalog</span>
          </button>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="hidden md:hidden lg:flex w-1/2 items-center justify-start overflow-hidden">
        <img
          src="./HeroPage/choclate_background.svg"
          alt="Chocolate circle"
          className="h-120 w-full z-10"
        />
        <img
          src="./HeroPage/Rectangle.svg"
          alt="Rectangle"
          className="h-160 w-full -ml-70 z-0"
        />
      </div>
    </section>
  );
}
