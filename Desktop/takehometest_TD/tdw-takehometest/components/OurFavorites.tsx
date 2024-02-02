import Button from "./Button";
import TabMenu from "./TabMenu";

{/* URLs for Handbags photos */}
const OurFavorites = () => {
  const fav_slides = [
    { url: "http://localhost:3000/ourFavorites1.jpg", title: "ourFavorites1" },
    { url: "http://localhost:3000/ourFavorites2.jpg", title: "ourFavorites2" },
    { url: "http://localhost:3000/ourFavorites3.jpg", title: "ourFavorites3" },
    { url: "http://localhost:3000/ourFavorites4.jpg", title: "ourFavorites4" },
    { url: "http://localhost:3000/ourFavorites5.jpg", title: "ourFavorites5" },
    { url: "http://localhost:3000/ourFavorites6.jpg", title: "ourFavorites6" },
    { url: "http://localhost:3000/ourFavorites7.jpg", title: "ourFavorites7" },
    { url: "http://localhost:3000/ourFavorites8.jpg", title: "ourFavorites8" },
  ];
{/* Fashion Trends Tab */}
  const tabContent = (
    <>
      <div className="relative flex items-center overflow-x-hidden">
        <div className="w-full h-full overflow-x-scroll overflow-y-hidden whitespace-nowrap scroll-smooth scrollbar-hide">
          {fav_slides
            .slice(0, Math.ceil(fav_slides.length / 2))
            .map((item, index) => (
              <div
                key={index}
                className="inline-block p-10 cursor-pointer hover:scale-110 ease-in-out duration-300 rounded-md"
              >
                <img
                  className="w-full h-auto sm:w-[360px] sm:h-[240px] md:w-[420px] md:h-[300px] lg:w-[480px] lg:h-[360px] object-cover rounded-md"
                  src={item.url}
                  alt="/"
                />
                <div className="text-center mt-4">
                  <p className="font-bold text-lg">Polished Palette</p>
                  <p className="text-lg mt-3">$100.00</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      {/* Horizontal slide1 */}
      <div className="relative flex items-center overflow-x-hidden">
        <div className="w-full h-full overflow-x-scroll overflow-y-hidden whitespace-nowrap scroll-smooth scrollbar-hide">
          {fav_slides
            .slice(Math.ceil(fav_slides.length / 2))
            .map((item, index) => (
              <div
                key={index}
                className="inline-block p-10 cursor-pointer hover:scale-110 ease-in-out duration-300 rounded-md"
              >
                <img
                  className="w-full h-auto sm:w-[360px] sm:h-[240px] md:w-[420px] md:h-[300px] lg:w-[480px] lg:h-[360px] object-cover rounded-md"
                  src={item.url}
                  alt="/"
                />
                <div className="text-center mt-4">
                  <p className="font-bold text-lg">Polished Palette</p>
                  <p className="text-lg mt-3 line-through">$100.00</p>
                  <p className="text-lg mt-3 text-red-500">$83.00</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
{/* Handbags tab */}
  const tabContent2 = (
    <>
      <div className="relative flex items-center overflow-x-hidden">
        <div className="w-full h-full overflow-x-scroll overflow-y-hidden whitespace-nowrap scroll-smooth scrollbar-hide">
          {fav_slides
            .slice(1, Math.ceil(fav_slides.length / 2))
            .map((item, index) => (
              <div
                key={index}
                className="inline-block p-10 cursor-pointer hover:scale-110 ease-in-out duration-300 rounded-md"
              >
                <img
                  className="w-full h-auto sm:w-[360px] sm:h-[240px] md:w-[420px] md:h-[300px] lg:w-[480px] lg:h-[360px] object-cover rounded-md"
                  src={item.url}
                  alt="/"
                />
                <div className="text-center mt-4">
                  <p className="font-bold text-lg">LV</p>
                  <p className="text-lg mt-3">$140.00</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      {/* Horizontal slide2 */}
      <div className="relative flex items-center overflow-x-hidden">
        <div className="w-full h-full overflow-x-scroll overflow-y-hidden whitespace-nowrap scroll-smooth scrollbar-hide">
          {fav_slides
            .slice(Math.ceil(fav_slides.length / 2))
            .map((item, index) => (
              <div
                key={index}
                className="inline-block p-10 cursor-pointer hover:scale-110 ease-in-out duration-300 rounded-md"
              >
                <img
                  className="w-full h-auto sm:w-[360px] sm:h-[240px] md:w-[420px] md:h-[300px] lg:w-[480px] lg:h-[360px] object-cover rounded-md"
                  src={item.url}
                  alt="/"
                />
                <div className="text-center mt-4">
                  <p className="font-bold text-lg">Polished Palette</p>
                  <p className="text-lg mt-3 line-through">$100.00</p>
                  <p className="text-lg mt-3 text-red-500">$83.00</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );

  {/* Tab Sections */}
  const tabItems = [
    {
      label: "Fashion Trends",
      value: "fashion_trends",
      content: tabContent
    },
    {
      label: "Handbags",
      value: "handbags",
      content: tabContent2
    },
    {
      label: "Backpacks",
      value: "backpacks",
      content: tabContent
    },
  ];

  return (
    <section className="max-container padding-container flex flex-col p-10">
      {/* The tabs in the Our Favorite Section */}
      <div className="text-2xl cursor-pointer pb-2 flexCenter">
        Our Favorites
      </div>
      <div className="w-full h-full overflow-x-scroll overflow-y-hidden whitespace-nowrap scroll-smooth scrollbar-hide">
        <TabMenu items={tabItems} />
      </div>
      {/* View all button */}
      <div className="flex justify-center pb-10">
        <Button type="button" title="View all" variant="btn_dark_green" />
      </div>
      <div className="container-sm md:container-md lg:container-lg padding-container text-lg md:text-xl lg:text-3xl text-center">
        Chase your dreams with confidence, armed with the perfect bag that
        speaks volumes about your personality and ambition.
      </div>
    </section>
  );
};

export default OurFavorites;
