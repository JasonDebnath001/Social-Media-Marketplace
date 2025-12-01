import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate(`/marketplace?search=${input}`);
  };
  return (
    <>
      <section className="flex flex-col items-center text-gray-900 px-4 pb-10">
        {/* Avatars + Stars */}
        <div className="flex items-center mt-32 mx-auto lg:mx-0">
          <div className="flex -space-x-3 pr-3">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
              alt="user3"
              className="size-8 object-cover rounded-full border-2 border-gray-200 hover:-translate-y-0.5 transition z-1"
            />
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
              alt="user1"
              className="size-8 object-cover rounded-full border-2 border-gray-200 hover:-translate-y-0.5 transition z-2"
            />
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
              alt="user2"
              className="size-8 object-cover rounded-full border-2 border-gray-200 hover:-translate-y-0.5 transition z-3"
            />
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
              alt="user3"
              className="size-8 object-cover rounded-full border-2 border-gray-200 hover:-translate-y-0.5 transition z-4"
            />
          </div>

          <div>
            <div className="flex ">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-star text-transparent fill-[#FF8F20]"
                    aria-hidden="true"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                  </svg>
                ))}
            </div>
            <p className="text-xs text-gray-600">Used by 10,000+ users</p>
          </div>
        </div>
        <h1 className="text-[42px]/13 md:text-6xl/19 font-semibold text-center max-w-[840px] mt-4 text-gray-900">
          Buy and Sell Your Social Profiles Online
        </h1>
        <p className="text-gray-600 text-sm max-md:px-2 text-center max-w-sm mt-3">
          A secure marketplace to buy and sell Instagram, Youtube, Telegram and
          more - fast, safe, and hassle-free.
        </p>

        <div className="mt-8 flex items-center text-sm h-13 border pl-3 pr-0.5 rounded-md border-gray-300 w-full max-w-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="text-gray-400 shrink-0"
          >
            <path d="m21 21-4.34-4.34" />
            <circle cx="11" cy="11" r="8" />
          </svg>
          <input
            className="px-2 w-full h-full outline-none placeholder:text-gray-400 text-gray-700 bg-transparent rounded-lg"
            placeholder="Instagram Account"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            onClick={onSubmitHandler}
            className="px-10 h-11 font-medium text-sm rounded-lg text-purple-600 hover:text-white border border-purple-600 cursor-pointer hover:bg-purple-500 transition-all"
          >
            Search
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
