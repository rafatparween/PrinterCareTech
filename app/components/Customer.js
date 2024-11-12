import React, { useRef } from "react"; 
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Customer = () => {
  const testimonialsRef = useRef(null);

  const scroll = (direction) => {
    if (testimonialsRef.current) {
      const { scrollLeft, clientWidth } = testimonialsRef.current;
      const cardWidth = 436; // Width of each testimonial card
      const gap = 16; // Space between cards
      const cardsToScroll = 3; // Number of visible cards
      const scrollAmount = direction === "left"
        ? scrollLeft - (cardWidth + gap) * cardsToScroll
        : scrollLeft + (cardWidth + gap) * cardsToScroll;
      testimonialsRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const testimonials = [
    {
      name: "John Davis",
      location: "Los Angeles, CA",
      date: "10/01/2024",
      review: "John Davis did an amazing job helping us with our marketing materials. He carefully guided us through the entire process, ensuring the design perfectly matched our brand. His attention to detail was exceptional.",
      rating: 5,
      verified: true,
    },
    {
      name: "Emily Roberts",
      location: "New York, NY",
      date: "09/20/2024",
      review: "Emily Roberts was fantastic in assisting us with promotional items. She made sure we chose the right products, delivered them on time, and provided useful tips for increasing visibility. Highly recommend her!",
      rating: 5,
      verified: true,
    },
    {
      name: "Michael Johnson",
      location: "Chicago, IL",
      date: "09/28/2024",
      review: "Michael Johnson went above and beyond in designing our brochures. He tailored the design to our specific needs and offered creative suggestions that made a huge impact on our marketing efforts.",
      rating: 5,
      verified: true,
    },
    {
      name: "Sarah Wilson",
      location: "Austin, TX",
      date: "09/22/2024",
      review: "Sarah Wilson was incredibly helpful with our flyer distribution strategy. Not only did she create eye-catching designs, but she also provided valuable insights on targeting the right audience. Her expertise made a significant difference.",
      rating: 5,
      verified: true,
    },
    {
      name: "David Thompson",
      location: "San Francisco, CA",
      date: "09/30/2024",
      review: "David Thompson delivered outstanding service in designing our business cards. He explained all the available options, helping us choose the best materials to match our brand. His guidance was priceless.",
      rating: 5,
      verified: true,
    },
    {
      name: "Jessica Lee",
      location: "Seattle, WA",
      date: "09/26/2024",
      review: "Jessica Lee provided excellent service with our promotional posters. She walked us through each step, ensuring we were completely satisfied with the final designs. Her expertise was invaluable.",
      rating: 5,
      verified: true,
    },
  ];

  return (
    <div className="bg-white py-10 relative 2xl:w-[1431px] 2xl:ml-[231px] xl:w-[1414px] xl:ml-[52px]">
      <h2 className="text-center text-3xl font-bold mb-6 mt-[30px] text-blue-900">What Our Customers Are Saying</h2>
      <div className="relative">
        <button
          className="absolute top-1/2 left-0 transform text-black p-2 rounded-full shadow-md focus:outline-none ml-[-55px] transition-colors duration-300 z-10"
          onClick={() => scroll("left")}
          style={{ width: '32px', height: '32px' }}
        >
          <ArrowBackIosIcon style={{ fontSize: '20px' }} />
        </button>
        <button
          className="absolute top-1/2 right-0 transform text-black p-2 rounded-full shadow-md focus:outline-none transition-colors duration-300 z-10"
          onClick={() => scroll("right")}
          style={{ width: '32px', height: '32px' }}
        >
          <ArrowForwardIosIcon style={{ fontSize: '20px' }} />
        </button>
        <div
          ref={testimonialsRef}
          className="flex overflow-x-hidden"
          style={{ width: 'calc(100% - 64px)', padding: '0 16px' }}
        >
          <div className="flex" style={{ gap: '16px' }}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-lg flex-shrink-0"
                style={{ width: '436px' }}
              >
                <div className="flex items-center justify-between">
                  <div className="text-yellow-500">
                    {"★".repeat(testimonial.rating)}
                  </div>
                  <div className="text-gray-500 text-sm">{testimonial.date}</div>
                </div>
                <p className="mt-4">{testimonial.review}</p>
                <div className="mt-4">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  {testimonial.verified && (
                    <p className="text-blue-500 text-sm">Verified ✓</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
