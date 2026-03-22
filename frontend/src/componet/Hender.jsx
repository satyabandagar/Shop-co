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

      <div className="flex justify-around w-full bg-amber-200">
        <div className="text-black flex pl-2 gap-4">
            <a href="" className="font-bold">SHOP.CO</a>
            <a href="" className="flex">Shop <IconChevronDown/></a>
            <a href="">On Slae</a>
            <a href="">New Arrivals</a>
            <a href="">Brands</a>
        </div>
        <div className="flex pl-10">
            <div className="flex">  
                    <IconSearch/>          
                    <input type="text" placeholder="Search for product..." />
                    <IconUserCircle/>
                    <IconGardenCart />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Hender;
