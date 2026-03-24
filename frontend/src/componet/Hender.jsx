import React from "react";
import { IconX ,IconChevronDown, IconSearch ,IconUserCircle, IconGardenCart } from '@tabler/icons-react';

function Hender() {
  return (
    <div>
      <div className="bg-black text-white flex justify-between px-24 py-2 ">
        <div className=""></div>
        <div className="flex gap-1">
          <p>Sign up and get 20% off to your first order.</p>
          <a href="" className="underline">Sign Up Now</a>
        </div>

        <button><IconX stroke={2} /></button>
      </div>

      <div className="flex gap-25 w-full h-10 items-center pl-30">
        <div className="text-black flex pl-2 gap-6 items-center">
            <a href="" className="font-bold text-3xl">SHOP.CO</a>
            <a href="" className="flex">Shop <IconChevronDown/></a>
            <a href="">On Slae</a>
            <a href="">New Arrivals</a>
            <a href="">Brands</a>
        </div>
        <div className="flex pl-10 w-170 h-full items-center ">
            <div className="flex items-center gap-5">  
                    <IconSearch className="relative left-13"/>          
                    <input className="h-9 border-0 w-120 p-2 pl-10 " type="text" placeholder="Search for product..." />
                    <IconUserCircle/>
                    <IconGardenCart />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Hender;
