interface Card {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const HowItWorks = () => {
  const featuredCards: Card[] = [
    {
      id: 1,
      title: "Choose your base",
      description: "Pick cake or chocolate base, size and servings.",
      imageUrl: "./Howitworks/CheckIcon.svg",
    },
    {
      id: 2,
      title: "Add flavors & fillings",
      description: "Select flavors, fillings and dietary preferences.",
      imageUrl: "./Howitworks/FireIcon.svg",
    },
    {
      id: 3,
      title: "Personalized decorations",
      description: "Choose toppings, colors and a custom message.",
      imageUrl: "./Howitworks/star.svg",
    },
  ];

  return (
    <section className="py-3 px-10 my-1">
     
      <hr className="text-pinkDark mb-5 font-medium" />

    <div className="px-10 mx-9">
      <h2 className="text-3xl text-black font-bold px-5">How it works</h2>


        {/* This is featured Card */}
      <div className="grid gap-6 md:grid-cols-3">
        {featuredCards.map((card) => (
          <div
            key={card.id}
            className="bg-pinkSoft rounded-2xl px-5 py-5 my-3 max-w-sm"
          >
            <div className="flex items-center gap-3">
              <img src={card.imageUrl} alt={card.title} className="w-6 h-6" />
              <h3 className="font-semibold">{card.title}</h3>
            </div>
            <p className="text-pinkDark mt-2">{card.description}</p>
          </div>
        ))}
      </div>
    </div>  
      <hr className="text-pinkDark mt-5 " />
    </section>
  );
};

export default HowItWorks;
