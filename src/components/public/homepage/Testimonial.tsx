import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { GrNext, GrPrevious } from "react-icons/gr";
// import assets
import artist from "@/assets/artist3.jpg";
import artist1 from "@/assets/artist4.jpg";
import artist2 from "@/assets/artist5.jpg";
import artist3 from "@/assets/artist6.jpg";
// Define the type for a single testimonial
interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  main: string;
  detail: string;
  image: StaticImageData; // Specific type for imported images in Next.js
}

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: "Madihu",
    role: "Indie Artist",
    main: "Prodigy has transformed how I connect with my fans!",
    detail:
      "As an independent artist, it’s hard to find platforms that give me both creative freedom and audience reach. Prodigy not only lets me share my music in studio-quality audio, but its AI-powered recommendations have introduced my songs to listeners who never would have found me otherwise. The real-time analytics are a game-changer—I can see which songs resonate most with my fans.",
    image: artist,
  },
  {
    id: 2,
    name: "Vu",
    role: "Indie Artist",
    main: "Finally, a platform that prioritizes artists!",
    detail:
      "Unlike other platforms, Prodigy gives artists 100% creative control over their profiles and content. I love the ability to customize my page with exclusive videos, personalized playlists, and updates for my fans. The royalty payouts are transparent and fair, making it easier to focus on creating music.",
    image: artist1,
  },
  {
    id: 3,
    name: "Khoidarealest",
    role: "Indie Artist",
    main: "A platform built for creators, by creators.",
    detail:
      "Prodigy empowers artists in ways that no other app does. From high-quality audio streaming to tools for hosting virtual meet-and-greets, it feels like every feature was designed with our needs in mind. Plus, the fair revenue model ensures that my hard work truly pays off.",
    image: artist2,
  },
  {
    id: 4,
    name: "Den Vau",
    role: "Indie Artist",
    main: "Revolutionizing fan engagement!",
    detail:
      "The interactive features on Prodigy, like the ability to host listening parties or livestream my creative process, have made my fans feel like they’re part of my journey. I’ve seen my fanbase grow faster than on any other platform.",
    image: artist3,
  },
];

export const Testimonial: React.FC = () => {
  const [testimonialIndex, setTestimonialIndex] = useState<number>(1);

  const handleNext = (): void => {
    setTestimonialIndex((prev) =>
      prev === testimonials.length ? 1 : prev + 1
    );
  };

  const handlePrev = (): void => {
    setTestimonialIndex((prev) =>
      prev === 1 ? testimonials.length : prev - 1
    );
  };

  const currentTestimonial = testimonials.find(
    (t) => t.id === testimonialIndex
  );

  if (!currentTestimonial) return null; // Guard clause for safety

  return (
    <div className="relative w-screen h-screen bg-black select-none">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="flex gap-x-[10px]">
          <p className="text-white font-semibold_poppins text-[34px]">What</p>
          <p className="font-semibold_poppins text-[34px] bg-gradient-to-b from-[#57534E] via-orange-100 to-[#C4B5FD] bg-clip-text text-transparent">
            our clients
          </p>
          <p className="text-white font-semibold_poppins text-[34px]">says</p>
        </div>
        <div className="flex w-[70%] gap-x-[20px] my-[50px]">
          <div className="flex w-[70%] justify-between rounded-lg px-[30px] py-[30px] border border-gray-800 gap-x-[30px] bg-gray-900 bg-opacity-30">
            <FaQuoteLeft className="text-gray-400" size={20} />
            <div className="flex flex-col w-[95%] gap-y-[10px] justify-between">
              <div className="flex flex-col gap-y-[20px]">
                <p className="font-light_poppins text-[28px] text-gray-200">
                  {currentTestimonial.main}
                </p>
                <p className="text-gray-500 text-[17px]">
                  {currentTestimonial.detail}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-y-[5px]">
                  <p className="font-semibold_poppins text-[18px] text-gray-200 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:text-orange-200 hover:drop-shadow-[0_2px_8px_rgba(255,204,128,0.5)]">
                    {currentTestimonial.name}
                  </p>

                  <p className="text-gray-500 text-[15px]">
                    {currentTestimonial.role}
                  </p>
                </div>
                <div className="flex mr-[30px] gap-x-[30px]">
                  <div
                    onClick={handlePrev}
                    className="cursor-pointer p-[14px] rounded-full border transition-all duration-300 hover:bg-gray-900 border-gray-800"
                  >
                    <GrPrevious className="text-gray-500" size={20} />
                  </div>
                  <div
                    onClick={handleNext}
                    className="cursor-pointer p-[14px] rounded-full border transition-all duration-300 hover:bg-gray-900 border-gray-800"
                  >
                    <GrNext className="text-gray-500" size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[30%]">
            <Image
              src={currentTestimonial.image}
              alt={currentTestimonial.name}
              className="w-full h-[400px] max-h-[400px] object-cover rounded-lg"
              quality={50}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
