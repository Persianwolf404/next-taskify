import React from "react";



export default function Sticky() {
  return (
    <div className={` flex p-4 w-full fixed medium:hidden bottom-0 zzz`}>
      <h1 className="w-[33%] font-light flex justify-start uppercase text-[1rem] text-[white] sora">
        Designed by Taskify
      </h1>
      <h1 className="w-[33%]  font-light flex justify-center uppercase text-[1rem] text-[white] sora">
        Freelance Developer
      </h1>
      <h1 className="w-[33%] font-light flex justify-end uppercase text-[1rem] text-[white] sora">
        Taskify
      </h1>
    </div>
  );
}
