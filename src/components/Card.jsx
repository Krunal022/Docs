import React from "react";
import { FaRegFileAlt } from "react-icons/fa";

const Card = () => {
  return (
    <div className="relative overflow-hidden h-80 w-60 rounded-4xl bg-sky-200 flex-wrap shrink-0">
      <FaRegFileAlt className="font-black absolute right-5 text-xl top-5" />
      <p className="tracking-tight p-5 leading-none text-lg mt-8 font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
        exercitationem!
      </p>
      <div className="bg-green-400 cursor-pointer absolute bottom-0 w-full h-10 flex items-center justify-center font-black">
        Complete
      </div>
    </div>
  );
};

export default Card;
