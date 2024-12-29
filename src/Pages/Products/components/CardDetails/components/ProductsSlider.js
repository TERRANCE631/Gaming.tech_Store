import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function ProductSlider({ items,
  title = "Products",
  slidesToShow = 3,
  autoSlide = true,
  slideInterval = 9000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic sliding
  useEffect(() => {
    let interval;
    if (autoSlide) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, slideInterval);
    }
    return () => clearInterval(interval);
  }, [items.length, autoSlide, slideInterval]);

  // Handle manual navigation
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const handleItemClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
  };

  // Get visible slides
  const visibleSlides = items.slice(
    currentIndex,
    currentIndex + slidesToShow > items.length ? undefined : currentIndex + slidesToShow
  );

  if (visibleSlides.length < slidesToShow) {
    visibleSlides.push(...items.slice(0, slidesToShow - visibleSlides.length));
  }

  return (
    <div className="relative w-full h-full mx-auto my-10">
      {title && <h2 className="text-2xl font-semibold mb-4">{title}</h2>}
      <div className="flex h-full overflow-hidden justify-center items-center rounded-lg">
        {visibleSlides.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 rounded-lg shadow-md mx-2 transition-transform h-full w-full sm:w-1/2 md:w-1/3 relative"
          >
            {/* Link to individual product page */}
            <Link to={`/products/${item.id}`} className="relative block">
              <div className="relative">
                {/* Image */}
                <img
                  onClick={handleItemClick}
                  src={item.image || '/Assets/loadingImage.jpg'}
                  alt={item.name}
                  onError={(e) => {
                    e.target.src = '/Assets/loadingImage.jpg';
                  }}
                  className="w-full h-[20rem] object-cover"
                />
              </div>

              {/* Product name and price */}
              <p onClick={handleItemClick} className="text-center text-lg my-5 font-medium">{item.name}</p>
              {item.price && (
                <p className="text-center text-xl text-green-500">
                  ZAR{item.price.toFixed(2)}
                </p>
              )}

              <p className="flex gap-1 justify-center items-center ml-1 mb-5">
                {item.rating}<div className="text-yellow-500 text-xl">★</div>
              </p>

            </Link>
          </div>
        ))}
        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-300 p-2 rounded-full"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-300 p-2 rounded-full"
        >
          ❯
        </button>
      </div>
    </div>
  );
}
